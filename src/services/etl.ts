import { supabase } from "@/integrations/supabase/client"

export interface ETLQueryResult {
  data: any[]
  error?: string
  totalRecords?: number
}

export class ETLService {

  // Extract revenue data from fiscal documents
  async extractRevenueData(startDate?: string, endDate?: string): Promise<ETLQueryResult> {
    try {
      let query = supabase
        .from('fis_nfe')
        .select('dt_emissao, vl_nf, ds_razao_social_emitente, ds_uf')
        .order('dt_emissao', { ascending: false })

      if (startDate && endDate) {
        query = query
          .gte('dt_emissao', startDate)
          .lte('dt_emissao', endDate)
      }

      const { data, error, count } = await query

      if (error) throw error

      // Transform data for BI charts
      const transformedData = this.transformRevenueData(data || [])

      return {
        data: transformedData,
        totalRecords: count || 0
      }
    } catch (error) {
      return {
        data: [],
        error: error instanceof Error ? error.message : 'Erro ao extrair dados de receita'
      }
    }
  }

  // Extract customer data
  async extractCustomerData(): Promise<ETLQueryResult> {
    try {
      const { data, error, count } = await supabase
        .from('fis_fornecedores')
        .select('ds_nome, ds_documento, ds_email, dt_cadastro, ds_status')
        .eq('ds_status', 'ATIVO')
        .order('dt_cadastro', { ascending: false })

      if (error) throw error

      return {
        data: data || [],
        totalRecords: count || 0
      }
    } catch (error) {
      return {
        data: [],
        error: error instanceof Error ? error.message : 'Erro ao extrair dados de clientes'
      }
    }
  }

  // Extract sales by region
  async extractSalesByRegion(): Promise<ETLQueryResult> {
    try {
      const { data, error } = await supabase
        .from('fis_nfe')
        .select('ds_uf, vl_nf')
        .not('vl_nf', 'is', null)
        .not('ds_uf', 'is', null)

      if (error) throw error

      // Transform and aggregate by region
      const regionData = this.aggregateByRegion(data || [])

      return {
        data: regionData
      }
    } catch (error) {
      return {
        data: [],
        error: error instanceof Error ? error.message : 'Erro ao extrair vendas por região'
      }
    }
  }

  // Extract product distribution
  async extractProductDistribution(): Promise<ETLQueryResult> {
    try {
      const { data, error } = await supabase
        .from('fis_nfe_itens')
        .select('ds_produto, vl_total, fis_nfe!inner(dt_emissao)')
        .not('vl_total', 'is', null)
        .limit(1000)

      if (error) throw error

      // Group by product categories
      const categoryData = this.groupByCategory(data || [])

      return {
        data: categoryData
      }
    } catch (error) {
      return {
        data: [],
        error: error instanceof Error ? error.message : 'Erro ao extrair distribuição de produtos'
      }
    }
  }

  // Transform revenue data for charts
  private transformRevenueData(data: any[]) {
    const monthlyRevenue = new Map()

    data.forEach(item => {
      if (item.dt_emissao && item.vl_nf) {
        const date = new Date(item.dt_emissao)
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
        const value = parseFloat(item.vl_nf) || 0

        if (monthlyRevenue.has(monthKey)) {
          monthlyRevenue.set(monthKey, monthlyRevenue.get(monthKey) + value)
        } else {
          monthlyRevenue.set(monthKey, value)
        }
      }
    })

    return Array.from(monthlyRevenue.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, value]) => ({
        month: this.formatMonth(month),
        receita: Math.round(value),
        meta: Math.round(value * 0.9) // Example target as 90% of actual
      }))
      .slice(-12) // Last 12 months
  }

  // Aggregate sales by region
  private aggregateByRegion(data: any[]) {
    const regionTotals = new Map()

    data.forEach(item => {
      if (item.ds_uf && item.vl_nf) {
        const uf = item.ds_uf
        const value = parseFloat(item.vl_nf) || 0

        if (regionTotals.has(uf)) {
          regionTotals.set(uf, regionTotals.get(uf) + value)
        } else {
          regionTotals.set(uf, value)
        }
      }
    })

    return Array.from(regionTotals.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10) // Top 10 states
      .map(([uf, value]) => ({
        name: uf,
        value: Math.round(value)
      }))
  }

  // Group products by category
  private groupByCategory(data: any[]) {
    const categories = new Map()

    data.forEach(item => {
      if (item.ds_produto && item.vl_total) {
        // Simple categorization based on product name keywords
        const category = this.categorizeProduct(item.ds_produto)
        const value = parseFloat(item.vl_total) || 0

        if (categories.has(category)) {
          categories.set(category, categories.get(category) + value)
        } else {
          categories.set(category, value)
        }
      }
    })

    const total = Array.from(categories.values()).reduce((sum, val) => sum + val, 0)

    return Array.from(categories.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 6) // Top 6 categories
      .map(([name, value]) => ({
        name,
        value: Math.round(value),
        percentage: Math.round((value / total) * 100)
      }))
  }

  // Simple product categorization
  private categorizeProduct(productName: string): string {
    const name = productName.toLowerCase()

    if (name.includes('combustivel') || name.includes('gasolina') || name.includes('diesel')) return 'Combustíveis'
    if (name.includes('medicamento') || name.includes('farmacia')) return 'Medicamentos'
    if (name.includes('alimento') || name.includes('comida')) return 'Alimentos'
    if (name.includes('roupa') || name.includes('vestir')) return 'Vestuário'
    if (name.includes('equipamento') || name.includes('maquina')) return 'Equipamentos'
    if (name.includes('servico') || name.includes('manutencao')) return 'Serviços'

    return 'Outros'
  }

  // Format month for display
  private formatMonth(monthKey: string): string {
    const [year, month] = monthKey.split('-')
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    return months[parseInt(month) - 1] || month
  }

  // Extract NFSE origins distribution
  async extractNFSEOrigins(startDate?: string, endDate?: string): Promise<ETLQueryResult> {
    try {
      // removed date and in-filters so the UI controls on the page can apply filtering
      let query: any = supabase
        .from('fis_documento')
        .select('ds_origem')
        .eq('ds_tipo', 'NFSE')

      if (startDate) query = query.gte('dt_created', startDate)
      if (endDate) query = query.lt('dt_created', endDate)

      const { data, error } = await query

      if (error) throw error

      // Manual aggregation with robust parsing (handles JSON object, JSON string or plain string)
      const counts = new Map<string, number>()
      data?.forEach((item: any) => {
        let key = 'outros'
        const raw = item?.ds_origem

        if (raw) {
          if (typeof raw === 'object') {
            key = raw.sistema || JSON.stringify(raw)
          } else if (typeof raw === 'string') {
            try {
              const parsed = JSON.parse(raw)
              key = parsed?.sistema || raw
            } catch {
              key = raw
            }
          } else {
            key = String(raw)
          }
        }

        const k = String(key).toLowerCase()
        counts.set(k, (counts.get(k) || 0) + 1)
      })

      const total = Array.from(counts.values()).reduce((sum, val) => sum + val, 0)
      if (total === 0) return { data: [] }

      const transformedData = Array.from(counts.entries()).map(([key, count]) => {
        let name = 'Outros'
        let color = 'hsl(var(--muted-foreground))'

        if (key.includes('worker')) {
          name = 'Worker Dominio'
          color = 'hsl(var(--chart-worker-dominio))'
        } else if (key.includes('sieg')) {
          name = 'API Sieg'
          color = 'hsl(var(--chart-sieg))'
        } else if (key.includes('tecno')) {
          // unify any tecnospeed variations into a single label
          name = 'Tecnospeed'
          color = 'hsl(var(--chart-tecnospeed))'
        }

        return {
          name,
          // keep percentage with two decimals
          value: Math.round((count / total) * 100 * 100) / 100,
          total: count,
          color
        }
      })

      return { data: transformedData }
    } catch (error) {
      return {
        data: [],
        error: error instanceof Error ? error.message : 'Erro ao extrair origens NFSE'
      }
    }
  }

  // Extract Tecnospeed errors
  async extractTecnospeedErrors(startDate?: string, endDate?: string): Promise<ETLQueryResult> {
    try {
      // removed fixed date window so page-level filters can control the timeframe
      let q: any = supabase
        .from('fis_tecnospeed_request')
        .select('ds_erro')
        .not('ds_erro', 'is', null)
        .neq('ds_erro', '')
        .neq('ds_erro', 'Erro de inscrição municipal obrigatório, corrigido com retry especial')

      if (startDate) q = q.gte('dt_created', startDate)
      if (endDate) q = q.lt('dt_created', endDate)

      const { data, error } = await q

      if (error) throw error

      // Manual aggregation (trim & normalize error text)
      const errorCounts = new Map<string, number>()
      data?.forEach((item: any) => {
        const raw = item?.ds_erro
        if (!raw) return
        const key = String(raw).trim()
        if (!key) return
        errorCounts.set(key, (errorCounts.get(key) || 0) + 1)
      })

      const transformedData = Array.from(errorCounts.entries())
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10) // Top 10 erros
        .map(([ds_erro, qtd_ocorrencias]) => ({
          ds_erro: ds_erro.length > 50 ? ds_erro.substring(0, 50) + '...' : ds_erro,
          qtd_ocorrencias
        }))

      return { data: transformedData }
    } catch (error) {
      return {
        data: [],
        error: error instanceof Error ? error.message : 'Erro ao extrair erros do Tecnospeed'
      }
    }
  }

  // Extract NFSe by origin from DFE table
  async extractNFSEByOriginDFE(startDate?: string, endDate?: string): Promise<ETLQueryResult> {
    try {
      // removed date filters so timeframe is handled by UI
      let q: any = supabase
        .from('fis_documento_dfe')
        .select('ds_origem')
        .eq('ds_tipo', 'NFSE')

      if (startDate) q = q.gte('dt_created', startDate)
      if (endDate) q = q.lt('dt_created', endDate)

      const { data, error } = await q

      if (error) throw error

      // Manual aggregation with friendly name normalization
      const counts = new Map<string, number>()
      data?.forEach((item: any) => {
        let key = item?.ds_origem || 'outros'

        // if origin contains ':' take the last segment, else use full string
        if (typeof key === 'string' && key.includes(':')) {
          const parts = key.split(':')
          key = parts[parts.length - 1]
        }

        counts.set(key, (counts.get(key) || 0) + 1)
      })

      const total = Array.from(counts.values()).reduce((sum, val) => sum + val, 0)
      if (total === 0) return { data: [] }

      const transformedData = Array.from(counts.entries())
        .sort(([, a], [, b]) => b - a)
        .map(([ds_origem, qtd_nfse]) => {
          let name = 'Outros'
          let color = 'hsl(var(--muted-foreground))'

          // unify tecnospeed-related keys
          if (String(ds_origem).toUpperCase().includes('TECNOSPEED')) {
            name = 'Tecnospeed Tomados'
            color = 'hsl(var(--chart-tecnospeed))'
          } else if (String(ds_origem).toUpperCase().includes('SIEG')) {
            name = 'DFE Sieg'
            color = 'hsl(var(--chart-sieg))'
          } else {
            // make a shorter, human-friendly label for other keys
            const short = String(ds_origem).replace(/_/g, ' ')
            name = short.charAt(0).toUpperCase() + short.slice(1).toLowerCase()
          }

          return {
            name,
            ds_origem,
            qtd_nfse,
            perc: Math.round((qtd_nfse / total) * 100 * 100) / 100,
            color
          }
        })

      return { data: transformedData }
    } catch (error) {
      return {
        data: [],
        error: error instanceof Error ? error.message : 'Erro ao extrair NFSe por origem DFE'
      }
    }
  }

  // Get KPI metrics
  async getKPIMetrics(): Promise<ETLQueryResult> {
    try {
      const [revenueResult, customerResult, salesResult] = await Promise.all([
        this.extractRevenueData(),
        this.extractCustomerData(),
        this.extractSalesByRegion()
      ])

      const totalRevenue = revenueResult.data.reduce((sum: number, item: any) => sum + (item.receita || 0), 0)
      const totalCustomers = customerResult.totalRecords || 0
      const totalSales = salesResult.data.reduce((sum: number, item: any) => sum + (item.value || 0), 0)
      const conversionRate = totalCustomers > 0 ? (totalSales / totalCustomers * 100).toFixed(2) : '0.00'

      return {
        data: [{
          totalRevenue: `R$ ${(totalRevenue / 1000000).toFixed(1)}M`,
          totalCustomers: totalCustomers.toLocaleString(),
          conversionRate: `${conversionRate}%`,
          totalSales: totalSales.toLocaleString()
        }]
      }
    } catch (error) {
      return {
        data: [],
        error: error instanceof Error ? error.message : 'Erro ao calcular KPIs'
      }
    }
  }
}

export const etlService = new ETLService()
