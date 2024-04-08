import connectMongoDB from "../../../../lib/mongodb";
import SuratMasuk from "../../../../models/surat_masuk";
import { NextResponse } from "next/server";

// edit data
export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newNama: nama,
    newNik: nik,
    newNoWa: noWa,
    newJenisSurat: jenisSurat,
  } = await request.json();
  await connectMongoDB();
  await SuratMasuk.findByIdAndUpdate(id, { nama, nik, noWa, jenisSurat });

  return NextResponse.json({ message: "Berhasil Diedit." }, { status: 200 });
}
// get detail
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const detailSuratMasuk = await SuratMasuk.findOne({ _id: id });

  return NextResponse.json({ detailSuratMasuk}, { status: 200 });
}
// export async function GET(request, { params }) {
//   const { jenisSurat } = params;
//   await connectMongoDB();
//   const detailSuratMasuk = await SuratMasuk.find({ jenisSurat:jenisSurat });

//   return NextResponse.json({ detailSuratMasuk}, { status: 200 });
// }
