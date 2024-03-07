import Modal from "@/components/layouts/modals";
// import getData from "@/services/market/indeks";
// import Image from "next/image";

type DetailMarketProps = {
  params: { id: string };
};

export default async function DetailMarketPage(props: DetailMarketProps) {
  const { params } = props;

  // const data = await getData(
  //   `http://localhost:3000/api/market/?id=${params.id}`
  // );
  return (
    <Modal>
      <div>
        {/* <Image src={data.data.img} alt="" width={300} height={100} /> */}
        onprosesss.....
      </div>
    </Modal>
  );
}
