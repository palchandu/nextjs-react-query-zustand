import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
const totalRow: number[] = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];
const TableSkeletion = () => {
  return (
    <TableBody className="w-full">
      {totalRow.map((item) => (
        <TableRow key={item}>
          <TableCell>
            <Skeleton className="h-[25px] w-screen" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-[25px] w-screen" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-[25px] w-screen" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-[25px] w-screen" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-[25px] w-screen" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-[25px] w-screen" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-[25px] w-screen" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableSkeletion;
