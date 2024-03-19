"use client";

import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type DetailMarketProps = {
  params: { slug: string };
};
// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/products");

//   if (!res.ok) {
//     throw new Error("gagal memuat data");
//   }

//   return res.json();
// };

export default async function DetailMarketPage(props: DetailMarketProps) {
  const { params } = props;

  // const product = await fetch(
  // `http://localhost:3000/api/products/?id=${
  //   params.slug[params.slug.length - 1]
  // }`
  // ).then((res) => {
  //   return res.json();
  // });

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/?id=${
      params.slug[params.slug.length - 1]
    }`,
    fetcher
  );

  const product: any = {
    data: data?.data,
  };

  return (
    <div>
      <h1>Detail Market Place</h1>

      <div>
        <div>
          <div>
            <Image src={product.data?.img} alt="" width={300} height={150} />
          </div>
          <div>nama : {product.data?.nama}</div>
          <div>haraga: {product.data?.harga}</div>
        </div>
      </div>
    </div>
  );
}
