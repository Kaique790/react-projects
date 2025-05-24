import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import colors from "tailwindcss/colors";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import { Label } from "@/components/ui/label";
import { DateRangerPicker } from "@/components/ui/date-ranger-picker";

export function RevenueChart() {
  const { data: revenueInPeriod } = useQuery({
    queryKey: ["metrics", "daily-revenue-in-period"],
    queryFn: getDailyRevenueInPeriod,
  });

  return (
    <Card className="col-span-6">
      <CardHeader className="flex items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária do pedido</CardDescription>
        </div>

        <div className="flex items-center gap-3">
          <Label htmlFor="period">Período</Label>
          <DateRangerPicker />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={revenueInPeriod} style={{ fontSize: "12" }}>
            <XAxis dataKey={"date"} dy={16} axisLine={false} tickLine={false} />
            <YAxis
              width={90}
              stroke="#888"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey={"receipt"}
              stroke={colors.violet[500]}
            />

            <CartesianGrid
              vertical={false}
              className="stroke-muted-foreground"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
