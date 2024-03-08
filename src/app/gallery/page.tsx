"use client";

import img from "../../../public/assets/img/gallery-perangkat/4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Swiper
        effect={`coverflow`}
        autoplay={{
          delay: 3000,
        }}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Image src={img} alt="" width={250} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="" width={250} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="" width={250} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="" width={250} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="" width={250} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="" width={250} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img} alt="" width={250} height={200} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default page;
