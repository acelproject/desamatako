import connectMongoDB from "../../../../lib/mongodb";
import ObjekWisata from "../../../../models/objekWisata";
import { NextResponse } from "next/server";

// edit data
export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newWisata: wisata,
    newLokasi: lokasi,
    newPengelola: pengelola,
    newImg1: img1,
    newImg2: img2,
    newImg3: img3,
  } = await request.json();
  await connectMongoDB();
  await ObjekWisata.findByIdAndUpdate(id, { wisata,lokasi,pengelola,img1,img2,img3 });

  return NextResponse.json({ message: "Berhasil Diedit." }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const detailObjekWisata = await ObjekWisata.findOne({ _id: id });

  return NextResponse.json({ detailObjekWisata}, { status: 200 });
}

