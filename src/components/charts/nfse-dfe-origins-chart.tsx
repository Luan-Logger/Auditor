import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { etlService } from "@/services/etl"
import { useToast } from "@/hooks/use-toast"

export function NFSEDFEOriginsChart() {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      try {
        const result = await etlService.extractNFSEByOriginDFE()
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
          description: "Falha ao carregar dados de origens DFE",
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [toast])

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-md">
          <p className="text-sm font-medium text-foreground">{data.name}</p>
          <p className="text-sm text-muted-foreground">
            Quantidade: <span className="font-medium">{data.qtd_nfse}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Percentual: <span className="font-medium">{data.perc}%</span>
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
          <CardTitle>NFSe por Origem (DFE)</CardTitle>
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
        <CardTitle>NFSe por Origem (DFE)</CardTitle>
        <p className="text-sm text-muted-foreground">
          Distribuição junho/2025
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="qtd_nfse"
                label={({ name, perc }) => `${name}: ${perc}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{
                  paddingTop: '20px',
                  fontSize: '14px'
                }}
                formatter={(value, entry: any) => 
                  `${value} (${entry.payload.qtd_nfse})`
                }
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}