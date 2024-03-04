import Image from "next/image";
import adminLogo from "../../../../public/assets/img/admin.png";
import { CiSearch } from "react-icons/ci";
import { FaRegBell, FaRegCommentDots } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

export default function NavbarAdmin({ setFullScreen }: any) {
  return (
    <div className="sticky z-50 top-0 left-0 bg-white h-16 w-full shadow-md flex">
      <div className=" w-8/12">
        <div className="flex items-center gap-2 px-5 h-full">
          <span className="text-2xl text-slate-800 " onClick={setFullScreen}>
            {/* <CiSearch /> */}
            <FaBars />
          </span>
          {/* <input
            type="text"
            className="w-full focus:outline-none"
            placeholder="Type to search..."
          /> */}
        </div>
      </div>
      <div className="w-4/12  flex justify-evenly items-center">
        <div className="w-9 h-9 rounded-full bg-slate-100 border flex justify-center items-center border-slate-200 relative">
          <span className="text-slate-500">
            <FaRegBell />
          </span>
          <div className="w-2 h-2 rounded-full bg-red-600 absolute top-0 right-0"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-end leading-5">
            <h1 className="text-md text-slate-600 font-normal">
              Christofan Pedengka
            </h1>
            <p className="text-[14px] font-normal text-slate-400">
              Administrator
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-300 overflow-hidden  relative">
            <span className="absolute top-2">
              <Image src={adminLogo} alt="" className="w-full " />
            </span>
          </div>
          <div className="text-slate-600">
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}
