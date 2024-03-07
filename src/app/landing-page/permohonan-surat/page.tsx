import BgTitle from "@/components/elements/BgTitle";
import img from "../../../../public/assets/img/permohonan-surat.png";
import Image from "next/image";
import Link from "next/link";
import { TbSend } from "react-icons/tb";

export default function PermohonanSurat() {
  return (
    <div className="bg-white relative text-gray-700 py-28 ">
      <div className="flex justify-center ms-20 ">
        <div className="mt-12">
          <div className="  mx-auto">
            <h1 className="text-2xl mt-10 font-semibold">
              Ingin Membuat Permohonan <br /> Surat ?
            </h1>
          </div>
          <Link
            href={`/pembuatan-surat`}
            className=" bg-primary hover:bg-[#3b8b9b] transition-all flex items-center gap-2 text-white w-max py-3 px-5 mt-3 rounded-md"
          >
            Kirim permohonan
            <TbSend className="text-lg" />
          </Link>
        </div>
        <div className="">
          <Image src={img} alt="" height={200} width={450} />
        </div>
      </div>
    </div>
  );
}
