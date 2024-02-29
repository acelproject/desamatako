import Image from "next/image";

async function getData() {
  // API luar
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  // API Sendiri
  // const res = await fetch("http://localhost:3000/api/market", {
  //   cache: "no-store",
  //   next: {
  //     // revalidate: 10, //revalidate auto

  //     //revalidate manual
  //     tags:["market"]
  //   },
  // });

  if (!res.ok) {
    throw new Error("Failed data fetching!");
  }

  return res.json();
}

export default async function MarketPage() {
  const products = await getData();
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
      {products.length > 0 &&
        products.map((product: any) => (
          <div key={product.id} className="w-1/5">
            <h1 className="truncate">{product.title}</h1>
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={100}
              className="w-full"
            />
          </div>
        ))}
    </div>
  );
}
