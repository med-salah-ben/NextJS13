// import server actions
//step 2 = Add new product action
import { addProductToDatabase } from "@/actions/serverActions";
//import Product Schema
import { Product } from "../../typings";
import AddProductButton from "@/components/AddProductButton";

export default async function Home() {
  //step 1 = for get  products
  const res = await fetch(
    "https://6518a379818c4e98ac5fe1e6.mockapi.io/products",
    {
      //disable caching because next js by default will cache the result
      cache: "no-cache",
      //step 3 = for get new product
      next: {
        tags: ["products"],
      },
    }
  );
  //step 2 = for get  products
  const products: Product[] = await res.json();

  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Products Warehouse</h1>
      {/* step 3 = Add new product : use addProductToDatabase action */}
      <AddProductButton />
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
