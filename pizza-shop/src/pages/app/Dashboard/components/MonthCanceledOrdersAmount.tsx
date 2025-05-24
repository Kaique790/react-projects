import { getMonthCanceledAmount } from "@/api/get-month-canceled-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { CircleMinus } from "lucide-react";

export function MonthCanceledOrdersAmounthCard() {
  const { data: monthCanceledOrdersAmount } = useQuery({
    queryKey: ["metrics", "month-orders-amount"],
    queryFn: getMonthCanceledAmount,
  });

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-base font-semibold">
          Cancelamentos [mês]
        </CardTitle>
        <CircleMinus className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceledOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="mt-1 text-sm text-muted-foreground">
              {monthCanceledOrdersAmount.diffFromLastMonth <= 0 ? (
                <span className="dar:text-rose-400 text-rose-500">
                  +{monthCanceledOrdersAmount.diffFromLastMonth}%{" "}
                </span>
              ) : (
                <span className="dar:text-emerald-400 text-emerald-500">
                  -{monthCanceledOrdersAmount.diffFromLastMonth}%{" "}
                </span>
              )}
              em relação ao mês passado
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
