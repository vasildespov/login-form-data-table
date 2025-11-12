import { Skeleton } from "@/components/people/loading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { tableLoader } from "@/routes/table/loader";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLoaderData, useNavigation, useSearchParams } from "react-router";

const COLUMNS = ["Name", "Mass", "Height", "Hair color", "Skin color"];
export const People = () => {
  const data = useLoaderData<typeof tableLoader>();
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const handlePagination = (url: string | null) => {
    if (!url) return;
    const pageParam = new URL(url).searchParams.get("page") ?? "1";
    setSearchParams({ page: pageParam });
  };

  return (
    <div className="relative flex size-full w-full max-w-5xl flex-col">
      <div
        className={cn(
          "flex h-105 max-h-[calc(100vh-160px)] w-full flex-col overflow-auto",
          !data.success && "max-h-[calc(100vh-100px)]",
        )}
      >
        <Table className="relative">
          <TableHeader className="bg-background sticky top-0 shadow-md">
            <TableRow>
              {COLUMNS.map((column) => (
                <TableHead className="w-1/5" key={column}>
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <Skeleton />
            ) : (
              data.success &&
              data.data.results.map(
                ({ name, mass, height, hair_color, skin_color }) => (
                  <TableRow key={name}>
                    <TableCell className="max-w-75 truncate">{name}</TableCell>
                    <TableCell>{mass}</TableCell>
                    <TableCell>{height}</TableCell>
                    <TableCell>{hair_color}</TableCell>
                    <TableCell>{skin_color}</TableCell>
                  </TableRow>
                ),
              )
            )}
          </TableBody>
        </Table>

        {!data.success && (
          <div className="flex size-full flex-col items-center justify-center gap-4 p-10 text-xl">
            <span>{data.errorMessage}</span>
            <Button
              onClick={() => {
                setSearchParams({ page: "1" });
              }}
            >
              Go to Page 1
            </Button>
          </div>
        )}
      </div>

      {data.success && (
        <nav
          aria-label="pagination"
          className="mt-5 flex w-full items-center justify-end gap-2"
        >
          <Button
            aria-label="go to previous page"
            disabled={!data.data.previous || isLoading}
            onClick={() => handlePagination(data.data.previous)}
          >
            <ChevronLeft />
          </Button>
          <span aria-current="page" className="w-5 text-center text-lg">
            {searchParams.get("page")}
          </span>
          <Button
            aria-label="go to next page"
            disabled={!data.data.next || isLoading}
            onClick={() => handlePagination(data.data.next)}
          >
            <ChevronRight />
          </Button>
        </nav>
      )}
    </div>
  );
};
