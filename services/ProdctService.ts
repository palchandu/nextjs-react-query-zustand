import axiosInstance from "@/lib/axiosInstance";
export async function allProductsList() {
  try {
    const allProducts = await axiosInstance.get("/products");
    if (allProducts.status === 200) {
      return allProducts.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log("error hrrr", error);
    return error;
  }
}

export async function getSingleproduct(id: string) {
  try {
    const productDetails = await axiosInstance.get(`/products/${id}`);
    if (productDetails.status === 200) {
      return productDetails.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Single product error", error);
    return error;
  }
}
export async function deleteProduct(id: string) {
  try {
    const deleteDetails = await axiosInstance.delete(`/products/${id}`);
    console.log("deleted res", deleteDetails);
    if (deleteDetails.status === 200) {
      return deleteDetails.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Single product error", error);
    return error;
  }
}

export async function allUsersList({ limit = 10 }: { limit: number }) {
  try {
    const allProducts = await axiosInstance.get(`/users?limit=${limit}`);
    if (allProducts.status === 200) {
      return allProducts.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log("error hrrr", error);
    return error;
  }
}
