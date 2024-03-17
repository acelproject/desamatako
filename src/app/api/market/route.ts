import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextResponse, NextRequest } from "next/server";


export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const category = searchParams.get("category");

  if (id) {
    const detileProduct = await retrieveDataById("products", id);
    if (detileProduct) {
      return NextResponse.json({
        status: 200,
        message: "berhasil",
        data: detileProduct,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "not found",
      data: {},
    });
  }
  const products = await retrieveData("products");
  return NextResponse.json({ status: 200, message: "berhasil", data:products });
}
