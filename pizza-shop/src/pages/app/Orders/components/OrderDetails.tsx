import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// interface OrderDetailsProps {}

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 4900q74q90hfr83Q0DN3</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Kaique Bezerra dos Santos
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (79) 99999-9999
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                7qXKq@example.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">Há 15 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-muted-foreground">Produtos</TableHead>
              <TableHead className="text-right text-muted-foreground">
                Qtd.
              </TableHead>
              <TableHead className="text-right text-muted-foreground">
                Preço
              </TableHead>
              <TableHead className="text-right text-muted-foreground">
                Subtotal
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Pizza portuguesa Familia</TableCell>{" "}
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 50,00</TableCell>
              <TableCell className="text-right">R$ 100,00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pizza pequena</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 49,90</TableCell>
              <TableCell className="text-right">R$ 49,90</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pizza de chocolate</TableCell>{" "}
              <TableCell className="text-right">3</TableCell>
              <TableCell className="text-right">R$ 34,90</TableCell>
              <TableCell className="text-right">R$ 102,70</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableCell colSpan={3}>Total do pedidos</TableCell>
            <TableCell className="text-right font-medium">R$ 262,60</TableCell>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}
