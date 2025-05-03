import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleMinus } from "lucide-react";

export function MonthCanceledOrdersAmounthCard() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-base font-semibold">
          Cancelamentos [mês]
        </CardTitle>
        <CircleMinus className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">32</span>
        <p className="mt-1 text-sm text-muted-foreground">
          <span className="dar:text-emerald-400 text-emerald-500">-6% </span>
          em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
}
