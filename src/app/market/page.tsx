"use client";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/products", {
//     cache: "no-store",
//     // next: {
//     //   // revalidate: 10
//     //   tags: ["products"],
//     // },
//   });

//   if (!res.ok) {
//     throw new Error("gagal memuat data");
//   }

//   return res.json();
// }

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MarketPage() {
  // const [products, setProducts] = useState([]);

  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, fetcher);
  
  const products = {
    data: data?.data,
  };



  return (
    // api sendiri
    <div className=" flex gap-5 bg-white flex-wrap w-10/12 justify-center mx-auto">
      {products.data?.length &&
        products.data?.map((product: any, i: any) => (
          <Link href={`market/detail/${product.id}`} key={i}>
            <Image src={product.img} alt="" width={300} height={200} priority />
            <div>nama: {product.nama}</div>
            <div className="text-3xl">Harga: {product.harga}</div>
          </Link>
        ))}
    </div>
  );
}
