import { NextResponse, NextRequest } from "next/server";

const data = [
  {
    id: 1,
    nama: "Durian",
    category: "buah",
    penjual: "Bapak Marchel",
    jumlah: 10,
    harga: 90000,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/13190eab-1f63-421e-b8da-c96e5d08ab50/air-jordan-1-low-se-craft-shoes-76v7Vm.png",
  },
  {
    id: 2,
    nama: "Mesin Paras",
    category: "bangunan",
    penjual: "Bapak Andre",
    jumlah: 2,
    harga: 200000,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b5406b0d-fb0b-4e94-ab81-4d24a3d79a2f/air-force-1-07-shoes-8jXZH2.png",
  },
  {
    id: 3,
    nama: "Mesin Paras",
    category: "bangunan",
    penjual: "Bapak Andre",
    jumlah: 2,
    harga: 200000,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b5406b0d-fb0b-4e94-ab81-4d24a3d79a2f/air-force-1-07-shoes-8jXZH2.png",
  },
  {
    id: 4,
    nama: "Mesin Paras",
    category: "bangunan",
    penjual: "Bapak Andre",
    jumlah: 2,
    harga: 200000,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b5406b0d-fb0b-4e94-ab81-4d24a3d79a2f/air-force-1-07-shoes-8jXZH2.png",
  },
];
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const category = searchParams.get("category");

  if (id) {
    const detileProduct = data.find((item) => item.id === Number(id));
    if (detileProduct) {
      return NextResponse.json({
        status: 200,
        message: "berhasil",
        data: detileProduct,
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: "Not Found",
        data: {},
      });
    }
  } else {
    return NextResponse.json({ status: 200, message: "berhasil", data });
  }

  //   if (category) {
  //       const categoryProduct = data.find(
  //         (item) => item.category === String(category)
  //       );

  //     return NextResponse.json({
  //       status: 200,
  //       message: "berhasil",
  //       data: categoryProduct,
  //     });
  //   } else {
  //     return NextResponse.json({ status: 200, message: "berhasil", data });
  //   }
}
