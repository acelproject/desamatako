import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

// const data = [
//   {
//     id: 1,
//     nama: "sepatu",
//     harga: 1000000,
//     img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/869dada1-afb5-45a5-b09e-a876e079bd38/jordan-max-aura-5-shoes-ZBZ4Pz.png",
//   },
//   {
//     id: 2,
//     nama: "baju",
//     harga: 2000000,
//     img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0b669fd5-61a7-43db-965b-f60d2dc3ffe5/air-force-1-07-shoes-5fFrTT.png",
//   },
// ];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    // const detailProduct = data.find((item) => item.id === Number(id));
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "berhasil",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not found",
      data: {},
    });
  }
  const products = await retrieveData("products");

  return NextResponse.json({
    status: 200,
    message: "berhasil",
    data: products,
  });
}
