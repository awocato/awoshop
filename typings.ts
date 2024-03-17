export type Category = {
  id: number;
  name: string;
  image: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: Category;
  isFreeShipping: boolean;
  isOnDiscount: boolean;
  discountPercentage: number;
};

export type Props = {
  searchParams: {
    q: string;
    category: string;
    isOnDiscount: boolean;
    isFreeShipping: boolean;
    altTitle: string;
    id: string;
  };
};
