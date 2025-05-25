import { getMonthRevenue } from "@/api/get-month-revenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";
import { MetricCardSkeleton } from "./MetricCardSkeleton";

export function MonthRevenueCard() {
  const { data: monthRevenue } = useQuery({
    queryKey: ["metrics", "month-revenue"],
    queryFn: getMonthRevenue,
  });

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-base font-semibold">
          Receita total [mês]
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenue && (
          <span className="text-2xl font-bold tracking-tight">
            R${(monthRevenue?.receipt / 100).toLocaleString("pt-BR")}
          </span>
        )}

        {monthRevenue ? (
          <>
            <p className="mt-1 text-sm text-muted-foreground">
              {monthRevenue.diffFromLastMonth >= 0 ? (
                <span className="dar:text-emerald-400 text-emerald-500">
                  +{monthRevenue.diffFromLastMonth}%{" "}
                </span>
              ) : (
                <span className="dar:text-rose-400 text-rose-500">
                  {monthRevenue.diffFromLastMonth}%{" "}
                </span>
              )}
              em relação ao mês passado
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
