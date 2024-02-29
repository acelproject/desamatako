"use client"

import { IoIosClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
// slide pantai
import beach1 from "../../../../../public/assets/img/pantai1.jpg";
import beach2 from "../../../../../public/assets/img/pantai2.jpg";
import beach3 from "../../../../../public/assets/img/pantai3.jpg";
// slide air terjun
import arter1 from "../../../../../public/assets/img/arter1.jpg";
import arter2 from "../../../../../public/assets/img/arter2.jpg";
import arter3 from "../../../../../public/assets/img/arter3.jpg";
// slide goa
import goa1 from "../../../../../public/assets/img/goa1.jpg";
import goa2 from "../../../../../public/assets/img/goa2.jpg";
import goa3 from "../../../../../public/assets/img/goa3.jpg";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type DetailProps = {
  onDetail: any;
  handleClose: any;
};

export default function DetailWisata(props: DetailProps) {
  const { onDetail, handleClose } = props;
  const [viewImg, setViewImg] = useState(beach1);

  const [slide, setSlide] = useState(1);
  return (
    <div
      className={`fixed bg-black/90 w-[100%] h-[100vh] left-0 top-0 z-[9999] ${
        onDetail >= 1 ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <div className="w-6/12  text-white relative">
        {onDetail === 1 ? (
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
          >
            <SwiperSlide>
              <Image src={beach1} alt="" className="h-[500px] w-max mx-auto"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={beach2} alt="" className="h-[500px]"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={beach3} alt="" className="h-[500px]"></Image>
            </SwiperSlide>
          </Swiper>
        ) : onDetail === 2 ? (
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
          >
            <SwiperSlide>
              <Image src={arter1} alt="" className="h-[500px] w-max mx-auto"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={arter2} alt="" className="h-[500px]"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={arter3} alt="" className="h-[500px]"></Image>
            </SwiperSlide>
          </Swiper>
        ) : onDetail === 3 ? (
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
          >
            <SwiperSlide>
              <Image src={goa1} alt="" className="h-[500px] w-max mx-auto"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={goa2} alt="" className="h-[500px]"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={goa3} alt="" className="h-[500px]"></Image>
            </SwiperSlide>
          </Swiper>
        ) : (
          <div></div>
        )}
      </div>
      <div
        className="p-1 text-white  text-xl w-max bg-primary absolute right-0 top-0 rounded-md m-3"
        onClick={handleClose}
      >
        <IoIosClose />
      </div>
      <div className="absolute inset-60 text-white flex items-center justify-between z-[99999]">
        <button className="bg-primary text-4xl h-10 w-10 left-16 rounded-full flex justify-center items-center prev-btn">
          <IoIosArrowBack />
        </button>
        <button className="bg-primary text-4xl h-10 w-10 rounded-full flex justify-center items-center  next-btn">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}



