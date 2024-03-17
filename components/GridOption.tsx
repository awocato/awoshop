import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
type Props = {
  category?: string;
  className?: string;
  image: string;
  title:string;
  isFreeShipping?: boolean;
  isOnDiscount?: boolean;
};

function GridOption({ category, className, image, title, isFreeShipping, isOnDiscount }: Props) {
  return (
    <Link
      href={{
        pathname: "/search",
        query: { category: category,
          isFreeShipping: isFreeShipping,
          isOnDiscount: isOnDiscount },
      }}
      className={cn("relative grid-option", className)}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      {image && <Image src={image} alt={title} fill priority={true} sizes="100%"className="object-cover opacity-20 hover:opacity-100 transition-opacity rounded-md" /> }
    </Link>
  );
}

export default GridOption;
