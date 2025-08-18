import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Users, 
  Calendar,
  Settings,
  Menu,
  X
} from "lucide-react"
import { useState } from "react"

const navItems = [
  { icon: BarChart3, label: "Visão Geral", id: "overview" },
  { icon: TrendingUp, label: "Análise de Tendências", id: "trends" },
  { icon: PieChart, label: "Distribuição", id: "distribution" },
  { icon: Users, label: "Demografia", id: "demographics" },
  { icon: Calendar, label: "Relatórios", id: "reports" },
]

interface DashboardSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function DashboardSidebar({ activeTab, onTabChange }: DashboardSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border",
        "transform transition-transform duration-300 ease-in-out lg:translate-x-0",
        isCollapsed ? "-translate-x-full" : "translate-x-0"
      )}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-bold text-foreground">Analytics Pro</h2>
            <p className="text-sm text-muted-foreground mt-1">Dashboard Corporativo</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 h-11",
                    isActive && "bg-primary/10 text-primary border-primary/20"
                  )}
                  onClick={() => {
                    onTabChange(item.id)
                    setIsCollapsed(true) // Close on mobile after selection
                  }}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Button>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Settings className="h-5 w-5" />
              Configurações
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </>
  )
}