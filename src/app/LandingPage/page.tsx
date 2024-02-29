"use client";

import Image from "next/image";
import hero from "../../../public/assets/img/hero.jpg";
import senja from "../../../public/assets/img/senja.jpg";
import pantai from "../../../public/assets/img/pantaibiru.jpg";
import strukturOrganitation from "../../../public/assets/img/pop-up-surat.png";
import History from "./sejarah/page";
import DataPenduduk from "./data-penduduk/page";
import Wisata from "./wisata/page";
import InfoPembangunan from "./pembangunan/page";
import Links from "./Links";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default function LandingPage() {
  const [count, setCount] = useState(1);

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

  const pathName = usePathname();
  const [onScrollwindow, setOnScrollwindow] = useState(false);

  const toTop = () => {
    if (window.scrollY >= 1) {
      setOnScrollwindow(true);
    } else {
      setOnScrollwindow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toTop);
  });
  return (
    <>
      <div className="w-full h-[100vh] overflow-hidden relative ">
        <Navbar/>
        <div className=" -z-20 w-full top-0 h-full  absolute block banner">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            autoplay={{
              delay: 5000,

              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => {
              if (count === 5) {
                setCount(1);
                swiper.autoplay.stop();
                setTimeout(() => {
                  swiper.autoplay.start();
                }, 5000);
              } else {
                setCount((prev) => prev + 1);
              }
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={hero} alt="Desa Matako" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={pantai} alt="Desa Matako" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={senja} alt="Desa Matako" />
            </SwiperSlide>
          </Swiper>
          <Image src={hero} alt="Desa Matako" />
        </div>

        <div className="text-white md:mt-48 xl:mt-48 lg:mt-64 w-6/12 m-auto py-10 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-normal">
            Selamat Datang di Website Resmi
          </h1>
          <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-500 via-primary  to-purple-500  p-4 text-transparent bg-clip-text font-satisfy">
            Desa Matako
          </h1>
          <p className="mt-[-5px] text-xl font-medium">
            Kec. Tojo Barat, Kab. Tojo Una-Una
          </p>
        </div>
      </div>
      <Links/>

      <DataPenduduk />

      <History />

      <Wisata />

      <InfoPembangunan />

      {/* Link Surat */}
      <div
        className={`  fixed  xl:bottom-[50%]  bottom-[30%]  left-0 w-32 m-5 rounded-md z-[200] ${
          pathName !== "/" ? "hidden" : "block"
        }`}
      >
        <div className="relative flex items-center ">
          <div
            className={`pop-up-surat relative bg-primary rounded-md p-5  ${
              onScroll ? "scale-1" : "scale-0"
            } `}
          >
            <p className="text-sm font-medium text-white mb-3">
              Ingin Membuat Permohonan Surat ?
            </p>
            <Link
              href={`/pembuatan-surat`}
              className="bg-white text-sm px-2 py-1 text-primary rounded-md"
            >
              Klik Disini
            </Link>
          </div>
          <div
            className={`absolute right-[-60px] z-30 w-8/12 img-pop-up-surat  ${
              onScroll ? "translate-x-0" : "-translate-x-60"
            }`}
          >
            <Image
              src={strukturOrganitation}
              alt="Map Desa"
              className="w-full"
            />
          </div>
        </div>
        <Footer/>
      </div>
      {/* End Link Surat */}
    </>
  );
}
