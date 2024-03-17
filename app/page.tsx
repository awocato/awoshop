import GridOption from "@/components/GridOption";

function Home() {
  return (
    <main className="flex-1 ">
      <div className="grid grid-col-1 grid-flow-row-dense md:grid-cols-4 gap-2 m-2 md:m-5">
        <GridOption
          title="Sweet gifts for less"
          isOnDiscount={true}
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-full md:h-32"
        />
        <GridOption
          category="clothes"
          title="Shop Wardrobe"
          image="https://links.papareact.com/8ko"
          className="bg-blue-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Home"
          category="furniture"
          image="https://links.papareact.com/szu"
          className="bg-purple-100 row-span-2"
        />
        <GridOption
          title="Shop Electronics"
          category="electronics"
          image="https://links.papareact.com/n7r"
          className="bg-green-100 h-52"
        />
        <GridOption
          title="Shop Shoes"
          category="shoes"
          image="https://i.postimg.cc/XNTXYTNp/image.png"
          className="bg-yellow-100 h-52 col-span2"
        />
        <GridOption
          title="All you need for Match Day"
          category="clothes"
          image="https://links.papareact.com/m8e"
          className="bg-red-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Gadgets"
          category="electronics"
          image="https://links.papareact.com/gs1"
          className="bg-orange-100 h-52"
        />
        <GridOption
          title="Interesting finds"
          category="miscellaneous"
          image="https://links.papareact.com/4y0"
          className="bg-blue-100 h-52"
        />
        <GridOption
          title="Shop Sports"
          category="clothes"
          image="https://links.papareact.com/sq2"
          className="bg-blue-100 h-52"
        />
        <GridOption
          title="Enjoy free shipping"
          isFreeShipping={true}
          image="https://links.papareact.com/9fh"
          className="bg-rose-100 h-52"
        />
        <GridOption
          title="Flash Deals"
          isFreeShipping={true}
          isOnDiscount={true}
          image="https://links.papareact.com/qx7"
          className="bg-orange-200 h-52 col-span-2"
        />
        <GridOption
          title="Shop Something"
          image="https://i.postimg.cc/ZqkpSnsR/photo-2021-12-29-21-32-44.jpg"
          className="bg-pink-100 h-52"
        />
      </div>
    </main>
  );
}

export default Home;
