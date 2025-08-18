import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { month: 'Jan', receita: 65000, meta: 60000 },
  { month: 'Fev', receita: 72000, meta: 65000 },
  { month: 'Mar', receita: 68000, meta: 70000 },
  { month: 'Abr', receita: 85000, meta: 75000 },
  { month: 'Mai', receita: 92000, meta: 80000 },
  { month: 'Jun', receita: 88000, meta: 85000 },
  { month: 'Jul', receita: 105000, meta: 90000 },
  { month: 'Ago', receita: 98000, meta: 95000 },
  { month: 'Set', receita: 112000, meta: 100000 },
  { month: 'Out', receita: 125000, meta: 110000 },
  { month: 'Nov', receita: 138000, meta: 120000 },
  { month: 'Dez', receita: 142000, meta: 130000 },
]

export function RevenueChart() {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Evolução da Receita</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="month" 
                className="text-muted-foreground text-xs"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                className="text-muted-foreground text-xs"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                formatter={(value: number, name: string) => [
                  `R$ ${value.toLocaleString()}`,
                  name === 'receita' ? 'Receita' : 'Meta'
                ]}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="receita" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="meta" 
                stroke="hsl(var(--muted-foreground))" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: 'hsl(var(--muted-foreground))', strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}