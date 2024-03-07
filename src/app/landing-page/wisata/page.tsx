"use client"

import Image from "next/image";
import arter from "../../../../public/assets/img/arter1.jpg";
import beach from "../../../../public/assets/img/pantai3.jpg";
import goa from "../../../../public/assets/img/goa1.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import DetailWisata from "./detail";
import BgTitle from "@/components/elements/BgTitle";
import ViewMoreBtn from "@/components/fragments/ViewMoreBtn";
// import BgTitle from "@/pages/components/elements/BgTitle";
// import ViewMoreBtn from "@/pages/components/fragments/ViewMoreBtn";
export default function Wisata() {
  const [activeHover, setActiveHover] = useState(0);
  const [detail,setDetail]=useState(0)
  const handleClose = (e:any)=>{
    setDetail(e)
  }
  const handleHover = (e: any) => {
    setActiveHover(e);
  };

  return (
    <>
      <div className="pb-20 bg-white w-full relative">
        <DetailWisata onDetail={detail} handleClose={()=>handleClose(0)}/>
        <BgTitle text={`objek wisata`}/>
        <div className="w-7/12 flex mx-auto  justify-center gap-5 pt-32">
          <div
            className="w-full wsta-img-lp1 rounded-bl-[30%] rounded-tr-[20%] rounded-br-[20%] flex justify-center items-center  cursor-pointer"
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => setActiveHover(0)}
            onClick={()=>handleClose(1)}
          >
            <Image
              src={beach}
              alt="Desa Matako"
              className="rounded-bl-[30%] rounded-tr-[20%] rounded-br-[10px]"
            />
            <motion.div
              className={`uppercase font-medium text-sm absolute text-white z-20 ${
                activeHover === 1 ? "flex" : "hidden"
              }`}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0,
                type: "spring",
              }}
              
            >
              pantai wisata empang
            </motion.div>
          </div>
          <div
            className="w-full wsta-img-lp3 flex justify-center items-center rounded-[20%] cursor-pointer"
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={() => setActiveHover(0)}
            onClick={()=>handleClose(2)}
          >
            <Image src={arter} alt="Desa Matako" className=" rounded-[20%]" />
            <motion.div
              className={`uppercase font-medium text-sm absolute text-white z-20 ${
                activeHover === 2 ? "flex" : "hidden"
              }`}
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0,
                type: "spring",
              }}
              
            >
              air terjun watumoali
            </motion.div>
          </div>
          <div
            className="w-full wsta-img-lp2 rounded-br-[30%] rounded-tl-[20%] rounded-bl-[20%] flex justify-center items-center cursor-pointer"
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={() => setActiveHover(0)}
            onClick={()=>handleClose(3)}
          >
            <Image
              src={goa}
              alt="Desa Matako"
              className="rounded-br-[30%] rounded-tl-[20%] rounded-bl-[20%]"
            />
            <motion.div
              className={`uppercase font-medium text-sm absolute text-white z-20 ${
                activeHover === 3 ? "flex" : "hidden"
              }`}
              initial={{ x: 10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0,
                type: "spring",
              }}
              
            >
              goa manu
            </motion.div>
          </div>
        </div>
        <div className="w-7/12  mx-auto  mt-10">
        <ViewMoreBtn href={`/objek-wisata`}/>
      </div>
      </div>
    </>
  );
}
