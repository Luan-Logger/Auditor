import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { etlService } from "@/services/etl"
import { useToast } from "@/hooks/use-toast"

export function TecnospeedErrorsChart() {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      try {
        const result = await etlService.extractTecnospeedErrors()
        if (result.error) {
          toast({
            title: "Erro",
            description: result.error,
            variant: "destructive"
          })
        } else {
          setData(result.data)
        }
      } catch (error) {
        toast({
          title: "Erro",
          description: "Falha ao carregar dados de erros do Tecnospeed",
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [toast])

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-md">
          <p className="text-sm font-medium text-foreground">{label}</p>
          <p className="text-sm text-muted-foreground">
            Ocorrências: <span className="font-medium text-primary">{payload[0].value}</span>
          </p>
        </div>
      )
    }
    return null
  }

  if (isLoading) {
    return (
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Erros Tecnospeed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center">
            <div className="text-muted-foreground">Carregando...</div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Erros Tecnospeed</CardTitle>
        <p className="text-sm text-muted-foreground">
          Top 10 erros mais frequentes (05-30 Jul/2025)
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="ds_erro" 
                angle={-45}
                textAnchor="end"
                height={80}
                className="text-xs fill-muted-foreground"
              />
              <YAxis className="fill-muted-foreground" />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="qtd_ocorrencias" 
                fill="hsl(var(--destructive))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}