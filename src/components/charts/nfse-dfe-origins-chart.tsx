import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import React, { useState, useEffect } from 'react'
import { etlService } from "@/services/etl"
import { useToast } from "@/hooks/use-toast"

export function NFSEDFEOriginsChart({ startDate, endDate }: { startDate?: string; endDate?: string }) {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      try {
        const result = await etlService.extractNFSEByOriginDFE(startDate, endDate)
        if (result.error) {
          toast({
            title: "Erro",
            description: result.error,
            variant: "destructive"
          })
        } else {
          console.debug('NFSE DFE raw', result.data)
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
  }, [toast, startDate, endDate])

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
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, payload }: any) => `${name} (${payload.qtd_nfse})`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="qtd_nfse"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                content={<CustomTooltip />}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 8,
                }}
              />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{
                  marginTop: 12,
                  fontSize: 13
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
