"use client"
import Modal from "@/components/layouts/modals";
import Image from "next/image";
import useSWR from "swr";

type DetailMarketProps = {
  params: { id: string };
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailMarketPage(props: DetailMarketProps) {
  const { params } = props;

  // const data = await fetch(
  //   `http://localhost:3000/api/products/?id=${params.id}`
  // ).then((res)=>{
  //   return res.json()
  // });

  const { data, error } = useSWR(
  `${process.env.NEXT_PUBLIC_API_URL}/api/products/?id=${
     params.id
    }`,
    fetcher
  );

  const product: any = {
    data: data?.data,
  };
  return (
    <Modal>
      <div>
        <Image src={product.data?.img} alt="" width={300} height={100} />
      </div>
    </Modal>
  );
}
