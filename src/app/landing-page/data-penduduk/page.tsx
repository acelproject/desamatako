import { IoIosMan,IoIosWoman } from "react-icons/io";
import { FaUsers } from "react-icons/fa";

export default function DataPenduduk() {
  return (
    <div className=" pb-16 pt-32 bg-gradient-to-b  from-sky-50 to-sky-50">
      <div className="w-10/12 uppercase mx-auto ">
        <h1 className="text-3xl font-bold text-[#343a40] mb-3 relative w-max mx-auto ">
          Data Penduduk
        </h1>
      </div>
      <div className="w-10/12 uppercase mx-auto flex justify-center items-center mt-20">
        <div className="w-1/3 flex justify-center flex-col items-center gap-3">
          <div className="text-5xl text-[#343a40]">
            <IoIosMan />
          </div>
          <div className="text-2xl font-bold text-primary">1.100</div>
          <div className="text-sm font-semibold ">Laki-laki</div>
        </div>
        <div className="w-1/3 flex justify-center flex-col items-center gap-3">
          <div className="text-5xl text-[#343a40]">
            <IoIosWoman />
          </div>
          <div className="text-2xl font-bold text-primary">1.100</div>
          <div className="text-sm font-semibold ">perempuan</div>
        </div>
        <div className="w-1/3 flex justify-center flex-col items-center gap-3">
          <div className="text-5xl text-[#343a40]">
          <FaUsers />
          </div>
          <div className="text-2xl font-bold text-primary">1.100</div>
          <div className="text-sm font-semibold ">total</div>
        </div>
      </div>
    </div>
  );
}
