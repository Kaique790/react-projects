import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectValue } from "@radix-ui/react-select";
import { Search, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const orderFilterSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
});

type OrderFilter = z.infer<typeof orderFilterSchema>;

export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");
  const customerName = searchParams.get("customerName");
  const status = searchParams.get("status");

  const { handleSubmit, register, control, reset } = useForm<OrderFilter>({
    resolver: zodResolver(orderFilterSchema),
    defaultValues: {
      orderId: orderId ?? "",
      customerName: customerName ?? "",
      status: status ?? "all",
    },
  });

  function handleOrderFilter({ customerName, orderId, status }: OrderFilter) {
    setSearchParams((prev) => {
      if (orderId) {
        prev.set("orderId", orderId);
      } else {
        prev.delete("orderId");
      }

      if (customerName) {
        prev.set("customerName", customerName);
      } else {
        prev.delete("customerName");
      }

      if (status) {
        prev.set("status", status);
      } else {
        prev.delete("status");
      }

      prev.set("page", "1");
      return prev;
    });
  }

  function handleClearOrderFilters() {
    setSearchParams((prev) => {
      prev.delete("orderId");
      prev.delete("customerName");
      prev.delete("status");
      prev.set("page", "1");

      return prev;
    });

    reset({
      orderId: "",
      customerName: "",
      status: "all",
    });
  }

  return (
    <form
      onSubmit={handleSubmit(handleOrderFilter)}
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold">Filtros</span>

      <Input
        {...register("orderId")}
        placeholder="ID do pedido"
        className="h-8 w-auto"
      />

      <Input
        {...register("customerName")}
        placeholder="Nome do Cliente"
        className="h-8 w-[320px]"
      />

      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos status</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivery">Em entrega</SelectItem>
                <SelectItem value="delivered">Entregue</SelectItem>
              </SelectContent>
            </Select>
          );
        }}
      />

      <Button type="submit" variant="outline" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button
        onClick={handleClearOrderFilters}
        type="button"
        variant="secondary"
        size="xs"
      >
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  );
}
