import type { Product } from "@/typings";

export function getCartTotal(products: Product[]): string {
  const total = products.reduce((acc: number, currentProduct: Product) => {
    let price = currentProduct.price;
    if (currentProduct.isOnDiscount) {
      price = price - (price * currentProduct.discountPercentage / 100);
    }
    return acc + price;
  }, 0);

  return ` ${total.toFixed(2)}$`;
}
