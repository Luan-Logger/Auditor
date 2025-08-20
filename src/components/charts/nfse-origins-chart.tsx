import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { etlService } from "@/services/etl"
import { useToast } from "@/hooks/use-toast"

export function NFSEOriginsChart({ startDate, endDate }: { startDate?: string; endDate?: string }) {
   const [data, setData] = useState<any[]>([])
   const [isLoading, setIsLoading] = useState(true)
   const { toast } = useToast()

   useEffect(() => {
     const loadData = async () => {
       setIsLoading(true)
       try {
         const result = await etlService.extractNFSEOrigins(startDate, endDate)
         if (result.error) {
           toast({
             title: "Erro",
             description: result.error,
             variant: "destructive"
           })
         } else {
           console.log('NFSEOrigins data', result.data)
           setData(result.data)
         }
       } catch (error) {
         toast({
           title: "Erro",
           description: "Falha ao carregar dados de origens NFSE",
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
            Total: <span className="font-medium">{data.total}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Percentual: <span className="font-medium">{data.value}%</span>
          </p>
        </div>
      )
    }
    return null
  }

  const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
    if (percent < 5) return null // Don't show label for small slices

    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-sm font-medium"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  if (isLoading) {
    return (
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Origens das NFSE</CardTitle>
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
        <CardTitle>Origens das NFSE</CardTitle>
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
                label={({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
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
                  borderRadius: 8
                }}
              />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{
                  marginTop: 12,
                  fontSize: 13,
                  color: 'hsl(var(--muted-foreground))'
                }}
                formatter={(value, entry: any) => `${value} (${entry.payload.total})`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
