import { NextResponse } from "next/server";
import ObjekWisata from "../../../models/objekWisata";
import connectMongoDB from "../../../lib/mongodb";


// create data
export async function POST(request) {
  const { wisata, lokasi, pengelola, img1,img2,img3 } = await request.json();
  await connectMongoDB();
  await ObjekWisata.create({ wisata,lokasi,pengelola,img1,img2,img3 });
  return NextResponse.json(
    { message: "Objek Wisata berhasil dibuat" },
    { status: 201 }
  );
}

// get all data
export async function GET() {
  await connectMongoDB();
  const objekWisata = await ObjekWisata.find();
  return NextResponse.json({ objekWisata });
}





// delete data
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await ObjekWisata.findByIdAndDelete(id);
  return NextResponse.json({ message: "Berhasil Dihapus." }, { status: 200 });
}

