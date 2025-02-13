"use client";
import React, {  useState } from "react";
import { allProductsList, deleteProduct } from "@/services/ProdctService";
import { ShoppingCart, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "../ui/button";
import TableSkeletion from "./TableSkeletion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
export interface ProductInfo {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
import { cartStore, CartType } from "@/stores/cart.store";
const AllProducts: React.FC = () => {
  // const [allProduct] = useState<ProductList[]>([]);
  const [showMore, setShowMore] = useState(false);
  /******
   *
   * Using the normal way of fetching
   */

  // const products = async () => {
  //   try {
  //     //
  //     const lists: ProductList[] | [] = await allProductsList();

  //     setAllProduct(lists);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   products();
  //   if (allProduct && allProduct.length > 0) {
  //     const total = allProduct.reduce((acc, item) => acc + item.price, 0);
  //     setTotal(total);
  //   }
  // }, [allProduct]);

  /** Using React query */
  const { data, isFetching } = useQuery({
    queryKey: ["product-list"],
    queryFn: () => allProductsList(),
    // initialData: [],
    gcTime: 8 * 1000 * 100,
    // staleTime: 8 * 1000,
    //refetchInterval: 2 * 1000,
  });
  console.log("fetched", data);
  // if (data && data.length > 0) {
  //   const total = data.reduce((acc, item) => acc + item.price, 0);
  //   setTotal(total);
  // }

  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onMutate: (id) => {
      console.log("Id", id);
    },
    onSuccess: (data, id) => {
      // to get data from cache
      queryClient.setQueryData(["product-list"], (currElem: ProductInfo[]) => {
        return currElem.filter((item) => item.id !== id);
      });
      console.log("On Success", data, id);
    },
  });
  // const handleScroll = () => {
  //   //console.log(event);
  //   console.log("inner height", window.innerHeight);
  //   console.log("scrol y", window.scrollY);
  //   console.log("elelement height", document.documentElement.scrollHeight);
  //   const bottom =
  //     window.innerHeight + window.scrollY >
  //     document.documentElement.scrollHeight - 1;
  //   console.log("bottm", bottom);
  //   if (bottom) {
  //     console.log("Reaced bottm");
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const cartManage = cartStore();
  const handleCart = (item: ProductInfo) => {
    console.log("Cart Item",item)
    const cartList = cartManage.cart;
    const cartPayload:CartType = {
      id: item.id,
      name: item.title,
      price: item.price,
      quantity:1
    }
    cartManage.addCart(cartPayload)
    console.log("iii",cartList)
  }
  return (
    <>
      <div className="product-list">
        <Table>
          <TableCaption>A list of all products.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Add to Cart</TableHead>
            </TableRow>
          </TableHeader>
          {data && data.length > 0 && (
            <>
              <TableBody>
                {data.map((item: ProductInfo) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>
                      <Link href={`product-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">{item.price}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell
                      style={{
                        wordBreak: "break-word",
                        wordWrap: "break-word",
                      }}
                    >
                      {!showMore
                        ? item.description.substring(0, 100)
                        : item.description}
                      {!showMore ? (
                        <span
                          className="ml-2 cursor-pointer text-green-700 text-lg"
                          onClick={() => setShowMore(!showMore)}
                        >
                          ...more
                        </span>
                      ) : (
                        <span
                          className="ml-2 cursor-pointer text-green-700 text-lg"
                          onClick={() => setShowMore(!showMore)}
                        >
                          ...less
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={100}
                        height={100}
                      />
                    </TableCell>
                    <TableCell className="flex gap-2">
                      <Button onClick={()=>handleCart(item)}>
                        <ShoppingCart />
                      </Button>
                      <Button
                        onClick={() => deleteMutation.mutate(item.id)}
                        className=" bg-red-600 "
                      >
                        <Trash2 />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">
                    {data
                      .reduce(
                        (acc: number, item: ProductInfo) => acc + item.price,
                        0
                      )
                      .toFixed(2)}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </>
          )}
          {isFetching && <TableSkeletion />}
        </Table>
      </div>
    </>
  );
};

export default AllProducts;
