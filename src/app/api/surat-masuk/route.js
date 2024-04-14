import { NextResponse } from "next/server";
import SuratMasuk from "../../../models/surat_masuk";
import connectMongoDB from "../../../lib/mongodb";

// create data
export async function POST(request) {
  const { nama, nik, noWa, surat, jenisSurat, alamat, ktp, kk,status } =
    await request.json();
  await connectMongoDB();
  await SuratMasuk.create({
    nama,
    nik,
    noWa,
    surat,
    jenisSurat,
    alamat,
    ktp,
    kk,
    status
  });
  return NextResponse.json(
    { message: "Surat Masuk berhasil dibuat " },
    { status: 201 }
  );
}

// get all data
export async function GET() {
  await connectMongoDB();
  const suratMasuk = await SuratMasuk.find();
  return NextResponse.json({ suratMasuk });
}

// delete data
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await SuratMasuk.findByIdAndDelete(id);
  return NextResponse.json({ message: "Berhasil Dihapus." }, { status: 200 });
}

// export async function GET(request,{params}) {
//     await connectMongoDB();
//     const suratMasuk = await SuratMasuk.find(jenisSurat);

//     return NextResponse.json({suratMasuk});
//   }
