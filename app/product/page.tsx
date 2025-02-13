import AllProducts from "@/components/custom/AllProducts";
import React from "react";

const Products = () => {
  return (
    <div className="login-section flex justify-between  p-4 gap-4 w-full">
      <div className="login-area w-auto ">
        <h3 className="mt-2 mb-4">Products List</h3>
        <AllProducts />
      </div>
    </div>
  );
};

export default Products;
