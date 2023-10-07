"use server";
// imports
import { revalidatePath, revalidateTag } from "next/cache";
import { Product } from "../../typings";

//step 1 = Add new product action
//declare action
export const addProductToDatabase = async (e: FormData) => {
  const product = e.get("product")?.toString();
  const price = e.get("price")?.toString();

  if (!product || !price) return;

  const newProduct: Product = {
    product,
    price,
  };
  await fetch("https://6518a379818c4e98ac5fe1e6.mockapi.io/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //step 3 = for get new product
  //revalidate just tag not all page
  revalidateTag("products");
  //we can revalidate path or tag
  //revalidate all page
  //   revalidatePath("/")
};
