export type OrderStatustype =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatustype;
}

const orderStatusMap: Record<OrderStatustype, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  processing: "Em preparo",
  delivering: "Em entrega",
  delivered: "Entregue",
};

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span
          data-testId="badge"
          className="h-2 w-2 rounded-full bg-slate-400"
        />
      )}
      {status === "canceled" && (
        <span
          data-testId="badge"
          className="h-2 w-2 rounded-full bg-rose-400"
        />
      )}
      {status === "delivered" && (
        <span
          data-testId="badge"
          className="h-2 w-2 rounded-full bg-emerald-400"
        />
      )}
      {["processing", "delivering"].includes(status) && (
        <span
          data-testId="badge"
          className="h-2 w-2 rounded-full bg-amber-400"
        />
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  );
}
