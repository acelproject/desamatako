import Image from "next/image";
import Link from "next/link";

const getDocs = async () => {
  const res = await fetch("http://localhost:3000/api/market", {
    cache: "no-cache",
  });
  return res.json();
};
export default async function MarketPage() {
  const products = await getDocs();
  console.log(products);
  return (
    // api sendiri
    <div className=" flex gap-5 bg-white flex-wrap w-10/12 justify-center mx-auto">
      {products.data.length > 0 &&
        products.data.map((product: any, i: any) => (
          <Link href={`market/detail/${product.id}`} key={i}>
            <Image
              src={product.img}
              alt=""
              width={300}
              height={200}
              priority
              loading="lazy"
            />
            <div>nama: {product.nama}</div>
            <div>Kategori: {product.category}</div>
            <div className="text-3xl">Kategori: {product.harga}</div>
          </Link>
        ))}
    </div>
  );
}
