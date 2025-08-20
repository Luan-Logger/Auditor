import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, Filter, Download, RefreshCw } from "lucide-react"
import { useEffect, useState } from 'react'
import { supabase } from '@/integrations/supabase/client'

interface DashboardControlsProps {
  onRefresh: () => void
  onExport: () => void
  onDateRangeChange?: (range: { start?: string; end?: string } | null) => void
  onCompanyChange?: (companyId?: string | null) => void
}

export function DashboardControls({ onRefresh, onExport, onDateRangeChange }: DashboardControlsProps) {
  const [companies, setCompanies] = useState<Array<{ id: string; ds_nome: string }>>([])
  const [selectedCompany, setSelectedCompany] = useState<string>('all')

  const formatDate = (d: Date) => d.toISOString().split('T')[0]

  const handlePeriodChange = (value: string) => {
    const now = new Date()
    let start: string | undefined
    let end: string | undefined

    if (value === 'last7') {
      const s = new Date(now)
      s.setDate(now.getDate() - 6)
      start = formatDate(s)
      const e = new Date(now)
      e.setDate(now.getDate() + 1)
      end = formatDate(e)
    } else if (value === 'last30') {
      const s = new Date(now)
      s.setDate(now.getDate() - 29)
      start = formatDate(s)
      const e = new Date(now)
      e.setDate(now.getDate() + 1)
      end = formatDate(e)
    } else if (value === 'last90') {
      const s = new Date(now)
      s.setDate(now.getDate() - 89)
      start = formatDate(s)
      const e = new Date(now)
      e.setDate(now.getDate() + 1)
      end = formatDate(e)
    } else if (value === 'thisyear') {
      const s = new Date(now.getFullYear(), 0, 1)
      const e = new Date(now.getFullYear() + 1, 0, 1)
      start = formatDate(s)
      end = formatDate(e)
    } else if (value === 'thismonth') {
      const s = new Date(now.getFullYear(), now.getMonth(), 1)
      const e = new Date(now.getFullYear(), now.getMonth() + 1, 1)
      start = formatDate(s)
      end = formatDate(e)
    } else if (value === 'prevmonth') {
      const s = new Date(now.getFullYear(), now.getMonth() - 1, 1)
      const e = new Date(now.getFullYear(), now.getMonth(), 1)
      start = formatDate(s)
      end = formatDate(e)
    } else if (value === 'custom') {
      // let the page handle custom selection
      start = undefined
      end = undefined
    }

    if (onDateRangeChange) onDateRangeChange(start || end ? { start, end } : null)
  }

  // set initial default range on mount
  useEffect(() => {
    handlePeriodChange('last30')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        const { data, error } = await supabase
          .from('sis_empresas')
          .select('id, ds_nome')
          .order('ds_nome', { ascending: true })

        if (error) {
          console.error('Failed to load companies', error)
          return
        }

        const mapped = (data || []).map((c: any) => ({ id: String(c.id), ds_nome: c.ds_nome }))
        setCompanies(mapped)
      } catch (err) {
        console.error('Error loading companies', err)
      }
    }

    loadCompanies()
  }, [])

  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <div className="flex flex-wrap items-center gap-4">
          {/* Time Period */}
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <Select defaultValue="last30" onValueChange={handlePeriodChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last7">Últimos 7 dias</SelectItem>
                <SelectItem value="last30">Últimos 30 dias</SelectItem>
                <SelectItem value="last90">Últimos 90 dias</SelectItem>
                <SelectItem value="thismonth">Este mês</SelectItem>
                <SelectItem value="prevmonth">Mês anterior</SelectItem>
                <SelectItem value="thisyear">Este ano</SelectItem>
                <SelectItem value="custom">Período personalizado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Empresa Filter (unified) */}
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select defaultValue="all" value={selectedCompany} onValueChange={(v) => { setSelectedCompany(v); if ((onDateRangeChange as any) && false) {} if (typeof (onDateRangeChange) === 'function') {} if (typeof (onRefresh) === 'function') {} if (typeof (onExport) === 'function') {} if (typeof (onDateRangeChange) === 'function') {} }}>
              <SelectTrigger className="w-[220px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas empresas</SelectItem>
                {companies.map(c => (
                  <SelectItem key={c.id} value={c.id}>{c.ds_nome}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 ml-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={onRefresh}
              className="gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Atualizar
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={onExport}
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              Exportar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
