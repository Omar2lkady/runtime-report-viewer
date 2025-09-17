import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { TrendingUp, TrendingDown, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  change: {
    value: string;
    percentage: string;
    isPositive: boolean;
  };
  icon: React.ReactNode;
  tooltip: string;
}

const KPICard = ({ title, value, change, icon, tooltip }: KPICardProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Card className="cursor-help transition-all duration-200 hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-accent rounded-lg">
                {icon}
              </div>
              <div className="flex items-center space-x-2">
                {change.isPositive ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
                <span className={cn(
                  "text-sm font-medium",
                  change.isPositive ? "text-green-600" : "text-red-600"
                )}>
                  {change.percentage}
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                {title}
              </h3>
              <p className="text-2xl font-bold text-foreground">
                {value}
              </p>
              <p className="text-xs text-muted-foreground">
                vs {change.value}
              </p>
            </div>
            
            {/* Mini sparkline placeholder */}
            <div className="mt-4 h-8 bg-accent/30 rounded flex items-end justify-between px-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-accent rounded-sm"
                  style={{ height: `${Math.random() * 100}%` }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export const RuntimeKPICards = () => {
  const kpiData = [
    {
      title: "Present Value of DBO",
      value: "875,395,402.84",
      change: {
        value: "675,385,402.84",
        percentage: "+29.6%",
        isPositive: true,
      },
      icon: <TrendingUp className="h-5 w-5 text-accent-foreground" />,
      tooltip: "Present Value of Defined Benefit Obligation compared to previous period",
    },
    {
      title: "Service Cost",
      value: "207,894,356.63",
      change: {
        value: "247,894,356.63",
        percentage: "-16.1%",
        isPositive: false,
      },
      icon: <TrendingDown className="h-5 w-5 text-accent-foreground" />,
      tooltip: "Current period service cost with percentage change from last period",
    },
    {
      title: "Total Employees",
      value: "20,001",
      change: {
        value: "20,501",
        percentage: "-2.4%",
        isPositive: false,
      },
      icon: <Users className="h-5 w-5 text-accent-foreground" />,
      tooltip: "Current employee count and change from previous period",
    },
  ];

  return (
    <div className="p-6 border-b bg-card/50">
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6">
        {kpiData.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>
    </div>
  );
};