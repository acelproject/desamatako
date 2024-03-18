import Image from "next/image";

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

  const product = await fetch(
    `http://localhost:3000/api/products/?id=${
      params.slug[params.slug.length - 1]
    }`
  ).then((res)=>{
    return res.json()
  });


  return (
    <div>
      <h1>Detail Market Place</h1>

      <div>
            <div>
              <div>
                <Image src={product.img} alt="" />
              </div>
              <div>nama : {product.nama}</div>
              <div>haraga: {product.harga}</div>
            </div>
      </div>
    </div>
  );
}
