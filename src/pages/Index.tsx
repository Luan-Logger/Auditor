import { useState, useEffect } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardControls } from "@/components/dashboard-controls"
import { KPICard } from "@/components/ui/kpi-card"
import { RevenueChart } from "@/components/charts/revenue-chart"
import { DistributionChart } from "@/components/charts/distribution-chart"
import { RegionalBarChart } from "@/components/charts/bar-chart"
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign,
  Target,
  Activity
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { etlService } from "@/services/etl"

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [kpiData, setKpiData] = useState<any>(null)

  const loadData = async () => {
    setIsLoading(true)
    try {
      const kpiResult = await etlService.getKPIMetrics()
      if (kpiResult.error) {
        toast({
          title: "Erro",
          description: kpiResult.error,
          variant: "destructive"
        })
      } else {
        setKpiData(kpiResult.data[0])
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Falha ao carregar dados do sistema",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleRefresh = () => {
    loadData()
    toast({
      title: "Dados atualizados",
      description: "Os dados do dashboard foram atualizados com sucesso.",
    })
  }

  const handleExport = () => {
    toast({
      title: "Exportação iniciada",
      description: "O relatório será baixado em alguns segundos.",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content */}
      <div className="lg:pl-64">
        <div className="p-6 lg:p-8 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Dashboard Analytics
            </h1>
            <p className="text-muted-foreground">
              Acompanhe seus indicadores e métricas em tempo real
            </p>
          </div>

          {/* Controls */}
          <DashboardControls onRefresh={handleRefresh} onExport={handleExport} />

          {/* KPIs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <KPICard
              title="Receita Total"
              value={isLoading ? "Carregando..." : kpiData?.totalRevenue || "R$ 0"}
              change="+12.5% vs último mês"
              changeType="positive"
              icon={DollarSign}
            />
            <KPICard
              title="Fornecedores Ativos"
              value={isLoading ? "Carregando..." : kpiData?.totalCustomers || "0"}
              change="+8.2% vs último mês"
              changeType="positive"
              icon={Users}
            />
            <KPICard
              title="Taxa de Conversão"
              value={isLoading ? "Carregando..." : kpiData?.conversionRate || "0%"}
              change="-0.3% vs último mês"
              changeType="negative"
              icon={Target}
            />
            <KPICard
              title="Total de Vendas"
              value={isLoading ? "Carregando..." : kpiData?.totalSales || "0"}
              change="+15.7% vs último mês"
              changeType="positive"
              icon={ShoppingCart}
            />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <DistributionChart />
            <RegionalBarChart />
          </div>

          {/* Additional KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KPICard
              title="Taxa de Retenção"
              value="94.2%"
              change="+2.1% vs último mês"
              changeType="positive"
              icon={Activity}
            />
            <KPICard
              title="Ticket Médio"
              value="R$ 420"
              change="+5.8% vs último mês"
              changeType="positive"
              icon={TrendingUp}
            />
            <KPICard
              title="ROI Marketing"
              value="4.2x"
              change="+0.3x vs último mês"
              changeType="positive"
              icon={Target}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Index;
