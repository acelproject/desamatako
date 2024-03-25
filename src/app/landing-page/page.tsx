"use client";

import Image from "next/image";
import hero from "../../../public/assets/img/hero.jpg";
import senja from "../../../public/assets/img/senja.jpg";
import pantai from "../../../public/assets/img/pantaibiru.jpg";
import History from "./sejarah/page";
import DataPenduduk from "./data-penduduk/page";
import Wisata from "./wisata/page";
import InfoPembangunan from "./pembangunan/page";
import Links from "./Links";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import TextHero from "./textHero/TextHero";
import LinksDetail from "./LinksDetail";
import PermohonanSurat from "./permohonan-surat/page";

export default function LandingPage() {
  const [count, setCount] = useState(1);
  const [onScroll, setOnScroll] = useState(false);

  const [linksDetail, setLinksDetail] = useState(false);
  const [paramsLinksDetail, setParamsLinksDetail] = useState(0);

  const handleShowLinksDetail = (id: any) => {
    setLinksDetail(true);
    setParamsLinksDetail(id);
  };

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
        <LinksDetail
          params={paramsLinksDetail}
          linksDetail={linksDetail}
          setLinksDetail={setLinksDetail}
        />
        <Navbar />
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

        <div className="text-white  w-6/12 m-auto py-10 flex flex-col justify-center items-center text-center">
          <TextHero />
        </div>
      </div>
      <Links onClick={handleShowLinksDetail} />

      <DataPenduduk />

      <PermohonanSurat />

      <History />

      <Wisata />

      <InfoPembangunan />

      <Footer />
    </>
  );
}
