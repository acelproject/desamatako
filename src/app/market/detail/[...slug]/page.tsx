// import getData from "@/services/market/indeks";
import Image from "next/image";

type DetailMarketProps = {
  params: { slug: string };
};

export default async function DetailMarketPage(props: DetailMarketProps) {
  // const { params } = props;

  // const data = await getData(
  //   `http://localhost:3000/api/market/?id=${
  //     params.slug[params.slug.length - 1]
  //   }`
  // );
  return (
    <div>
      <h1>Detail Market Place</h1>
{/* 
      <div>
        <Image src={data.data.img} alt="" width={300} height={100} />
      </div> */}
    </div>
  );
}
