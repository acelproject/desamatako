"use client";

import gal1 from "../../../public/assets/img/gallery-perangkat/1.jpg";
import gal2 from "../../../public/assets/img/gallery-perangkat/2.png";
import gal3 from "../../../public/assets/img/gallery-perangkat/3.jpg";
import gal4 from "../../../public/assets/img/gallery-perangkat/4.jpg";
import gal5 from "../../../public/assets/img/gallery-perangkat/5.jpg";
import gal6 from "../../../public/assets/img/gallery-perangkat/6.jpg";

const gallPerangkat = [
  {
    nama: "Marchel lumimpah",
    posisi: "Kepala Desa",
    img: gal1,
  },
  {
    nama: "Marchel lumimpah",
    posisi: "Sekretaris Desa",
    img: gal2,
  },
  {
    nama: "Marchel lumimpah",
    posisi: "Kaur TU & Umum",
    img: gal3,
  },
  {
    nama: "Marchel lumimpah",
    posisi: "Kaur Perencanaan",
    img: gal4,
  },
  {
    nama: "Marchel lumimpah",
    posisi: "Kaur Keuangan",
    img: gal5,
  },
  {
    nama: "Marchel lumimpah",
    posisi: "Kasi Pelayanan",
    img: gal6,
  },
  {
    nama: "Marchel lumimpah",
    posisi: "Kasi Kesejahteraan",
    img: gal6,
  },
  {
    nama: "Marchel lumimpah",
    posisi: "Kasi Pemerintahan",
    img: gal6,
  },
  {
    nama: "Marchel lumimpah",
    posisi: "Kadus 1",
    img: gal6,
  },
  {
    nama: "Marchel lumimpah",
    posisi: "Kadus 2",
    img: gal6,
  },
  {
    nama: "Marchel lumimpah",
    posisi: "Kadus 3",
    img: gal6,
  },
  {
    nama: "Marchel lumimpah",
    posisi: "Kadus 4",
    img: gal6,
  },
  {
    nama: "Marchel lumimpah",
    posisi: "Kadus 5",
    img: gal6,
  },
  {
    nama: "Marchel lumimpah",
    posisi: "Kadus 6",
    img: gal6,
  },
];

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function GalleryPerangkatDesa() {
  return (
    <>
      <div className=" w-full md:px-20 px-8">
        <Swiper
          effect={`coverflow`}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 5,
              coverflowEffect: {
                depth: 40,
              },
            },
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="swiper_container"
        >
          {gallPerangkat.map((gal, i) => (
            <SwiperSlide>
              <div className="h-auto w-full rounded-lg p-2 bg-gradient-to-b from-primary to-slate-800">
                <Image
                  src={gal.img}
                  alt=""
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <div className="text-white text-center">
                  <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% my-3 rounded-md">
                    {gal.posisi}
                  </div>
                  <div className="font-medium">{gal.nama}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
