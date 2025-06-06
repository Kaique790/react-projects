import { getDayOrdersAmount } from "@/api/get-day-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { MetricCardSkeleton } from "./MetricCardSkeleton";

export function DayOrdersAmounthCard() {
  const { data: dayOrdersAmount } = useQuery({
    queryKey: ["metrics", "day-orders-amount"],
    queryFn: getDayOrdersAmount,
  });
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-base font-semibold">Pedidos [dia]</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="mt-1 text-sm text-muted-foreground">
              {dayOrdersAmount.diffFromYesterday >= 0 ? (
                <span className="dar:text-emerald-400 text-emerald-500">
                  +{dayOrdersAmount.diffFromYesterday}%{" "}
                </span>
              ) : (
                <span className="dar:text-rose-400 text-rose-500">
                  {dayOrdersAmount.diffFromYesterday}%{" "}
                </span>
              )}
              em relação a ontem
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
