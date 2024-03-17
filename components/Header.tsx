"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Grid2x2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useState, useEffect, type FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "@/lib/useDebounce";
import { useCartStore } from "@/store";
import { getCartTotal } from "@/lib/getCartTotal";

function Header() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const pathname = usePathname();
  const cart = useCartStore((state) => state.cart);
  const total = getCartTotal(cart);
  const isHomePage = pathname === "/";
  const isSearchPage = pathname.startsWith("/search");

  const debouncedInput = useDebounce(input, 500);
  useEffect(() => {
    if (debouncedInput) {
      router.push(`/search?q=${debouncedInput}`);
    }
  }, [debouncedInput, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  };

  return (
    <header className="flex flex-col items-center bg-walmart px-10 py-4 lg:space-x-5 md:flex-row md:justify-between md:space-x-10 ">
      <Link href="/" className=" mb-1 md:mb-0">
        <Image
        className="myImage"
          src="https://i.postimg.cc/Xv8SbGNc/awoshop-transparent.png"
          alt="Walmart logo"
          width={200}
          height={150}
          priority={true}
        />
      </Link>

      <form
        onSubmit={isHomePage ? handleSubmit : undefined}
        className="flex items-center bg-white rounded-full w-full flex-1"
      >
        <input
        required
          onInput={isSearchPage ? handleChange : undefined}
          name="input"
          className="flex-1 px-4 rounded-l-full outline-none text-black placeholder:text-sm"
          type="text"
          placeholder="Search Everything..."
        />
        <button type="submit">
          <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400  text-w cursor-pointer" />
        </button>
      </form>
      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2x2 size={20} />
          <p>Departments</p>
        </Link>
        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <Link
          href={"/"}
          className=" flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p className="text-xs">My Items</p>
          </div>
        </Link>
        <Link
          href={"/"}
          className=" flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign in</p>
            <p className="text-xs">Account</p>
          </div>
        </Link>
        <Link
          href={"/basket"}
          className=" flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingCart size={20} />
          <div>
            <p className="text-xs font-extralight">
               {cart.length > 0 ? `${cart.length} items` : "No Items"}
            </p>
            <p >
              {cart.length > 0 ? `${total}` : "0.00$"}
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
