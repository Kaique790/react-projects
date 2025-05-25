import { Skeleton } from "@/components/ui/skeleton";

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="mt-1 h-7 w-36 max-w-full" />
      <Skeleton className="h-4 w-52 max-w-full" />
    </>
  );
}
