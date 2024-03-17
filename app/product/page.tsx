"use client";

import FetchData from "@/lib/fetchData";
import type { Product, Props } from "@/typings";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Loading from "./loading";
import AddToCart from "@/components/AddToCart";



function ProductPage({
  searchParams: { id },
}: {
  searchParams: Props["searchParams"];
}) {
  const { data, isLoading, isError } = FetchData(
    "https://api.mockfly.dev/mocks/afd0aa1c-aaa7-4449-800c-1db1c5b194a9/products"
  );

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <Loading />;

  let products = data;

  if (id) {
    const idNumber = Number(id);
    products = products.filter(
      (product: { id: number }) => product.id === idNumber
    );
  }

  const product = products[0];

  return (
    <div
      className="p-4 lg:p-10 flex-col flex lg:flex-row w-full"
      key={product.id}
    >
      <div className="hidden lg:inline space-y-4">
        {product.images.map((image:string, index) => (
          <Image
            key={image}
            src={image}
            alt={`${product.title} ${index}`}
            width={90}
            height={90}
            className="border rounded-sm"
          />
        ))}
      </div>
      <Carousel
        opts={{ loop: true }}
        className=" mb-10 lg:mb-0 lg:w-full self-start flex items-center max-w-xl lg:max-w-md mx-auto lg:mx-20"
      >
        <CarouselContent>
          {product.images.map((image:string, index) => (
            <CarouselItem key={index}>
              <div>
                <div className="flex items-center justify-center relative">
                  <Image
                    src={image}
                    width={400}
                    height={400}
                    className="rounded-md"
                    alt={`Product Image ${index + 1}`}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>

      <div className="flex-1 border rounded-md w-full p-5 space-y-5">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <Badge variant="outline">{product.category.name}</Badge>
        <p>{product.description}</p>
        {product.isOnDiscount ? (
          <div>
            <div className="text-xl font-bold flex  ">
              <p className="pr-5">DEAL: </p>
              <p className="line-through">{product.price}$</p>
            </div>
            <p className="text-xl font-bold">
              Price:{" "}
              {(product.price * (1 - product.discountPercentage / 100)).toFixed(
                2
              )}
              $ ({product.discountPercentage}% off)
            </p>
          </div>
        ) : (
          <p className="text-xl font-bold "> Price: {product.price}$</p>
        )}
        {product.isFreeShipping && (
          <p className="text-green-500">Free Shipping</p>
        )}
         <AddToCart product={product}  />
      </div>
    </div>
  );
}

export default ProductPage;
