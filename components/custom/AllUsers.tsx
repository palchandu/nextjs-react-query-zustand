"use client";
import React, { useEffect } from "react";
import { allUsersList } from "@/services/ProdctService";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
export interface UserInfo {
  id: string;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}
const AllUsers = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["user-list"],
      initialPageParam: 1,
      queryFn: ({ pageParam = 1 }) => allUsersList({ limit: pageParam * 10 }),
      getNextPageParam: (lastPage, allPages) => {
        console.log("oooo", lastPage, allPages);
        return lastPage?.length === 10 ? allPages.length : undefined;
      },
    });
  // console.log("dddd", data);
  //   const handleScroll = () => {
  //     //console.log(event);
  //     const bottom =
  //       window.innerHeight + window.scrollY >
  //       document.documentElement.scrollHeight - 1;
  //     console.log("bottm", bottom);
  //     if (bottom && hasNextPage) {
  //       console.log("Reaced bottm");
  //       fetchNextPage();
  //     }
  //   };
  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   });
  const { ref, inView } = useInView({ threshold: 1 });
  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage, inView]);

  return (
    <>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Phone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.pages?.map((page, index) =>
              page?.map((item2: UserInfo, index2: number) => (
                <TableRow key={index + index2}>
                  <TableCell>{item2.id}</TableCell>
                  <TableCell>
                    {item2.name.firstname + " " + item2.name.lastname}
                  </TableCell>
                  <TableCell>{item2.email}</TableCell>
                  <TableCell>{item2.email}</TableCell>
                  <TableCell>{item2.email}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div ref={ref} className="flex justify-center items-center">
        {isFetchingNextPage
          ? "Loading more data ..."
          : hasNextPage
          ? "Scroll down to load more"
          : "No more user"}
      </div>
    </>
  );
};

export default AllUsers;
