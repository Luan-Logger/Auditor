import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { etlService } from "@/services/etl"
import { useToast } from "@/hooks/use-toast"

export function TecnospeedErrorsChart({ startDate, endDate }: { startDate?: string; endDate?: string }) {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      try {
        const result = await etlService.extractTecnospeedErrors(startDate, endDate)
        if (result.error) {
          toast({
            title: "Erro",
            description: result.error,
            variant: "destructive"
          })
        } else {
          console.debug('Tecno errors raw', result.data)
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
  }, [toast, startDate, endDate])

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
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 30, left: 10, bottom: 90 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="opacity-20" />
              <XAxis
                dataKey="ds_erro"
                angle={-35}
                textAnchor="end"
                height={90}
                className="text-xs fill-muted-foreground"
                tick={{ fontSize: 11 }}
              />
              <YAxis className="fill-muted-foreground" />
              <Tooltip
                content={<CustomTooltip />}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 8
                 }}
              />
              <Bar
                dataKey="qtd_ocorrencias"
                fill="hsl(var(--chart-tecnospeed))"
                radius={[6, 6, 6, 6]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
