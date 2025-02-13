"use client";
import Image from "next/image";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getSingleproduct } from "@/services/ProdctService";
import { ProductInfo } from "./AllProducts";
export interface SingleProductProps {
  id: string;
}
type resultType = {
  data: ProductInfo | undefined | null;
  isFetching: boolean;
  isFetched: boolean;
};
const SingleProduct = ({ props }: { props: SingleProductProps }) => {
  const { data, isFetching, isFetched }: resultType = useQuery({
    queryKey: ["single-product", props.id],
    queryFn: () => getSingleproduct(props.id),
  });
  return (
    <div className="flex justify-start gap-40 mt-10 p-4">
      {isFetched && data != null && (
        <>
          <div className="image-area">
            <Image
              src={data.image}
              alt={data?.title}
              width={300}
              height={300}
            />
          </div>
          <div className="product-info flex flex-col gap-4 justify-start">
            <h3>{data?.title}</h3>
            <p>{data?.description}</p>
            <p>{data?.category}</p>
            <p>{data?.price}</p>
          </div>
        </>
      )}
      {isFetching && (
        <>
          <div className="">
            <h2>Product loading</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
