"use client";

import FetchData from "@/lib/fetchData";
import type { Product, Props } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import Loading from "./loading";
import AddToCart from "@/components/AddToCart";

function SearchPage({
  searchParams: { q, category, isFreeShipping, isOnDiscount },
}: {
  searchParams: Props["searchParams"];
}) {
  const { data, isLoading, isError } = FetchData(
    "https://api.mockfly.dev/mocks/afd0aa1c-aaa7-4449-800c-1db1c5b194a9/products"
  );

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <Loading />;

  let products = data;
  let title = "All products";

  if (q) {
    products = products.filter((product: { title: string }) =>
      q
        .toLowerCase()
        .split(" ")
        .every((term) => product.title.toLowerCase().includes(term))
    );
    title = `Shop for ${q}`;
  }

  if (category) {
    products = products.filter(
      (product: { category: { name: string } }) =>
        product.category &&
        typeof product.category.name === "string" &&
        product.category.name.toLowerCase() === category.toLowerCase()
    );
    title = `Shop in ${category} category `;
  }

  if (isFreeShipping) {
    products = products.filter(
      (product: { isFreeShipping: boolean }) => product.isFreeShipping === true
    );
    title = "Looking for Free Shipping?";
  }

  if (isOnDiscount) {
    products = products.filter(
      (product: { isOnDiscount: boolean }) => product.isOnDiscount === true
    );
    title = "Best Discount Deals";
  }

  if (isFreeShipping && isOnDiscount) {
    title = "Our Flash Deals";
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="mb-10">({products.length} results found)</p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product: Product) => (
          <li className="flex flex-col justify-between relative border rounded-md h-full p-5" key={product.id}>
            <Link
              
              href={{
                pathname: "/product",
                query: { id: product.id },
              }}
            >
              <Image
                className="mx-auto pb-5 rounded-md"
                width={300}
                height={200}
                src={product.images[0]}
                alt={product.title}
              />
              {product.isOnDiscount ? (
                <div>
                  <div className="text-xl font-bold flex  ">
                    <p className="pr-5">DEAL: </p>
                    <p className="line-through">{product.price}$</p>
                  </div>
                  <p className="text-xl font-bold">
                    Price:{" "}
                    {(
                      product.price *
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                    $ ({product.discountPercentage}% off)
                  </p>
                </div>
              ) : (
                <p className="text-xl font-bold "> Price: {product.price}$</p>
              )}
              {product.isFreeShipping && (
                <p className="text-green-500">Free Shipping</p>
              )}
              <p className="font-light">{product.title}</p>
            
            </Link>
              <div className="flex pt-2  justify-center "><AddToCart product={product} /></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
