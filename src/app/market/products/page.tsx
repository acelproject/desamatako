"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    return res.json();
  });
export default function Page() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
    fetcher
  );
  return (
    <div className=" flex gap-5 bg-white flex-wrap w-10/12 justify-center mx-auto">
      {data.data.length > 0 &&
        data.data.map((product: any, i: any) => (
          <Link href={`market/detail/${product.id}`} key={i}>
            <Image src={product.img} alt="" width={300} height={200} priority />
            <div>nama: {product.nama}</div>
            <div className="text-3xl">Harga: {product.harga}</div>
          </Link>
        ))}
    </div>
  );
}
