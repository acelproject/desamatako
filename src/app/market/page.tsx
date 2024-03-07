import getData from "@/services/market/indeks";
import Image from "next/image";
import Link from "next/link";

export default async function MarketPage() {
  // const products = await getData("http://localhost:3000/api/market");
  return (
    // api luar
    // <div className=" flex gap-5 bg-primary flex-wrap">
    //   {products.length > 0 &&
    //     products.map((product: any) => (
    //       <div key={product.id} className="w-40">
    //         <h1 className="truncate">{product.title}</h1>
    //       </div>
    //     ))}
    // </div>

    // api sendiri
    <div className=" flex gap-5 bg-primary flex-wrap w-10/12 justify-center mx-auto">
      {/* {products.data.length > 0 &&
        products.data.map((product: any) => (
          <Link
            href={`/market/detail/${product.id}`}
            key={product.id}
            className="w-1/5"
          >
            <h1 className="truncate">{product.title}</h1>
            <Image
              src={product.img}
              alt={product.title}
              width={200}
              height={100}
            />
          </Link>
        ))} */}
        <div>on prosess....</div>
    </div>
  );
}
