import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./ui/button";

interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  parPage: number;
  onPageChange: (pageIndex: number) => Promise<void> | void;
}

export function Pagination({
  pageIndex,
  parPage,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const pagesCount = Math.ceil(totalCount / parPage) || 1;

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        total de {totalCount} {totalCount <= 1 ? "item" : "itens"}
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pagesCount}
        </div>
        <div className="flex items-center gap-2">
          <Button
            disabled={pageIndex === 0}
            onClick={() => onPageChange(0)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button
            disabled={pageIndex === 0}
            onClick={() => onPageChange(pageIndex - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button
            disabled={pageIndex === pagesCount - 1}
            onClick={() => onPageChange(pageIndex + 1)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button
            // disabled={pageIndex === pagesCount - 1}
            disabled={pagesCount <= pageIndex + 1}
            onClick={() => onPageChange(pagesCount - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Ultima página</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
