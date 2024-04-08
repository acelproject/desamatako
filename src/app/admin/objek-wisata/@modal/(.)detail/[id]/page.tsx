"use client";
import useSWR from "swr";
import Form from "./Form";

type DetailMarketProps = {
  params: { id: string };
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailEdit(props: DetailMarketProps) {
  const { params } = props;

  // const data = await fetch(
  //   `http://localhost:3000/api/products/?id=${params.id}`
  // ).then((res)=>{
  //   return res.json()
  // });

  //   const { data, error } = useSWR(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/products/?id=${
  //      params.id
  //     }`,
  //     fetcher
  //   );

  //   const product: any = {
  //     data: data?.data,
  //   };
  return (
    <>
      <Form id={params.id} urll={``} />
    </>
  );
}
