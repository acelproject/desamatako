"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import link1 from "../../../../public/assets/img/garuda.png";
import link2 from "../../../../public/assets/img/tojo-una-una.png";
import link3 from "../../../../public/assets/img/sulteng.png";

import Image from "next/image";
import { useEffect, useState } from "react";

// const links = [
//   {
//     id: 1,
//     img: "/../../../public/assets/img/garuda.png",
//   },
//   {
//     id: 2,
//     img: "/../../../public/assets/img/logo.png",
//   },
//   {
//     id: 3,
//     img: "/../../../public/assets/img/sulteng.png",
//   },
//   {
//     id: 4,
//     img: "/../../../public/assets/img/polda.png",
//   },
// ];

type LinksProps = {
 onClick?: any;
};

export default function Links(props:LinksProps) {
  const{onClick}=props;
  const [onScroll, setOnScroll] = useState(false);
  const handleViewLinks = () => {
    if (window.scrollY >= 1) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleViewLinks);
  });
  return (
    <div className="w-full  text-center absolute md:-bottom-[80px] xl:-bottom-[80px]">
      <motion.div
        className={`bg-white mx-auto w-9/12 py-12 justify-evenly items-center gap-2 rounded-[40px] shadow-md flex ${
          onScroll ? "block" : "hidden"
        }`}
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{
          delay: 0.1,
          y: { type: "spring", stiffness: 100 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <div className="w-1/5 ">
          <div className="" onClick={()=>onClick(1)}>
            <Image
              src={link1}
              alt="Indonesia"
              className="w-16 mx-auto transition-all duration-150 delay-150 hover:-translate-y-2 "
            />
          </div>
        </div>

        <div className="w-1/5">
          <Link
            href={`/landing-page/detail/links`}
            className=" "
            target="_blank"
          >
            <Image
              src={link3}
              alt="Sulteng"
              className="w-16 mx-auto transition-all duration-150 delay-150 hover:-translate-y-2"
            />
          </Link>
        </div>
        <div className="w-1/5 ">
          <Link
            href={`landing-page/links-detail/3`}
            className=" "
            target="_blank"
          >
            <Image
              src={link2}
              alt="Tojo Una-una"
              className="w-16 mx-auto transition-all duration-150 delay-150 hover:-translate-y-2"
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
