import { MonthOrdersAmounthCard } from "./components/MonthOrdersAmountCard";
import { MonthRevenueCard } from "./components/MonthRevenueCard";
import { DayOrdersAmounthCard } from "./components/DayOrdersAmountCard";
import { MonthCanceledOrdersAmounthCard } from "./components/MounthCanceledOrdersAmount";
import { RevenueChart } from "./components/RevenueChart";
import { PopularProductsChart } from "./components/PopularProductsChart";

export function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-2">
          <MonthRevenueCard />
          <MonthOrdersAmounthCard />
          <DayOrdersAmounthCard />
          <MonthCanceledOrdersAmounthCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  );
}
