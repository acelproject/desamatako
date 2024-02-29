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

const progressPage1Img = [
  {
    id: 1,
    img: beach1,
    progress: "Foto Pembangunan 0%",
  },
  {
    id: 2,
    img: beach2,
    progress: "Foto Pembangunan 12%",
  },
];
const progressPage2Img = [
  {
    id: 1,
    img: arter1,
    progress: "Foto Pembangunan 0%",
  },
  {
    id: 2,
    img: arter2,
    progress: "Foto Pembangunan 12%",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type DetailProps = {
  onPopUp: any;
  handleClose: any;
  isOpenPopUp: any;
  img1: any;
  img2: any;
};

export default function DokPopUpBox(props: DetailProps) {
  const { onPopUp, handleClose, isOpenPopUp, img1, img2 } = props;
  const [viewImg, setViewImg] = useState(beach1);

  const [slide, setSlide] = useState(1);
  return (
    <div
      className={`fixed bg-black/90 w-[100%] h-[100vh] left-0 top-0 z-[9999] ${
        isOpenPopUp ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <div className="w-6/12  text-white relative">
        {onPopUp === 1 ? (
          <Image src={img1} alt="" className="h-[500px] w-max mx-auto"></Image>
        ) : onPopUp === 2 ? (
          <Image src={img2} alt="" className="h-[500px] w-max mx-auto"></Image>
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
    </div>
  );
}
