import { revalidateTag } from "next/cache";

//step 1 = Add new product
export interface Product {
  id?: number;
  product: string;
  price: string;
}

export default async function Home() {
  //step 2 = Add new product
  const res = await fetch(
    "https://6518a379818c4e98ac5fe1e6.mockapi.io/products",
    {
      //disable caching because next js by default will cache the result
      cache: "no-cache",
      //step 1 = for get new product
      next: {
        tags: ["products"],
      },
    }
  );
  //step 3 = Add new product
  const products: Product[] = await res.json();
//step 4 = Add new product
  const addProductToDatabase = async (e: FormData) => {
    "use server";
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
    //step 2 = for get new product
    revalidateTag("products");
  };

  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Products Warehouse</h1>
      {/* step 5 = Add new product */}
      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="product"
          placeholder="Enter Product name..."
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          name="price"
          placeholder="Enter Product price..."
          className="border border-gray-300 p-2 rounded-md"
        />
        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>
      <h2 className="mx-3 font-bold  ">List of Products : </h2>
      <div className="flex flex-wrap gap-5 m-3">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p> {product.product} </p>
            <p> £{product.price} </p>
          </div>
        ))}
      </div>
    </main>
  );
}
