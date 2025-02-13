import React from "react";
import SingleProduct from "@/components/custom/SingleProduct";
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
    const nnn = {
      id,
    };
  return (
    <div>
      <div>
        <SingleProduct props={nnn} />
      </div>
    </div>
  );
};

export default page;
