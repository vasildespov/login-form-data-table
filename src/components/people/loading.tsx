import { TableRow, TableCell } from "@/components/ui/table";

export const Skeleton = () => {
  return Array.from({ length: 10 }).map((_, index) => (
    <TableRow key={`skeleton-${index}`}>
      <TableCell>
        <div className="bg-muted h-4 w-3/4 animate-pulse rounded" />
      </TableCell>
      <TableCell>
        <div className="bg-muted h-4 w-1/2 animate-pulse rounded" />
      </TableCell>
      <TableCell>
        <div className="bg-muted h-4 w-1/2 animate-pulse rounded" />
      </TableCell>
      <TableCell>
        <div className="bg-muted h-4 w-2/3 animate-pulse rounded" />
      </TableCell>
      <TableCell>
        <div className="bg-muted h-4 w-2/3 animate-pulse rounded" />
      </TableCell>
    </TableRow>
  ));
};
