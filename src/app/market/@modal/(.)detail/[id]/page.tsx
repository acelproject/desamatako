import Modal from "@/components/layouts/modals";
import Image from "next/image";

type DetailMarketProps = {
  params: { id: string };
};

export default async function DetailMarketPage(props: DetailMarketProps) {
  const { params } = props;

  const data = await fetch(
    `http://localhost:3000/api/products/?id=${params.id}`
  ).then((res)=>{
    return res.json()
  });;
  return (
    <Modal>
      <div>
        <Image src={data.data.img} alt="" width={300} height={100} />
      </div>
    </Modal>
  );
}
