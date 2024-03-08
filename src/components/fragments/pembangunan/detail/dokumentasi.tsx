import Image, { StaticImageData } from "next/image";
import beach1 from "../../../../../public/assets/img/pantai1.jpg";
import beach2 from "../../../../../public/assets/img/pantai2.jpg";
import beach3 from "../../../../../public/assets/img/pantai3.jpg";

import arter1 from "../../../../../public/assets/img/arter1.jpg";
import arter2 from "../../../../../public/assets/img/arter2.jpg";
import arter3 from "../../../../../public/assets/img/arter3.jpg";

import goa1 from "../../../../../public/assets/img/goa1.jpg";
import goa2 from "../../../../../public/assets/img/goa2.jpg";
import goa3 from "../../../../../public/assets/img/goa3.jpg";
import { useState } from "react";
import DokPopUpBox from "./dokPopUpBox";

const progressPage1Img = [
  {
    id: 1,
    img: beach1,
    progress: "Foto Pembangunan 0%",
  },
  {
    id: 2,
    img: beach3,
    progress: "Foto Pembangunan 50%",
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
const progressPage3Img = [
  {
    id: 1,
    img: goa1,
    progress: "Foto Pembangunan 0%",
  },
  {
    id: 2,
    img: goa2,
    progress: "Foto Pembangunan 12%",
  },
];

type DokProps = {
  id: any;
};

export default function DokDetailPembangunanComponent(props: DokProps) {
  const [detail, setDetail] = useState(0);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  const handleClick = (id: any) => {
    setIsOpenPopUp(true);
    setDetail(id);
  };

  const { id } = props;

  const [progressImgHover, setProgressImgHover] = useState(false);
  return (
    <div className="bg-gray-200 p-4 rounded-md relative flex justify-center">
      {id === 1 ? (
        <DokPopUpBox
          onPopUp={detail}
          img1={progressPage1Img[0].img}
          img2={progressPage1Img[1].img}
          isOpenPopUp={isOpenPopUp}
          handleClose={() => setIsOpenPopUp(false)}
        />
      ) : id === 2 ? (
        <DokPopUpBox
          onPopUp={detail}
          img1={progressPage2Img[0].img}
          img2={progressPage2Img[1].img}
          isOpenPopUp={isOpenPopUp}
          handleClose={() => setIsOpenPopUp(false)}
        />
      ) : id === 3 ? (
        <DokPopUpBox
          onPopUp={detail}
          img1={progressPage3Img[0].img}
          img2={progressPage3Img[1].img}
          isOpenPopUp={isOpenPopUp}
          handleClose={() => setIsOpenPopUp(false)}
        />
      ) : (
        <div></div>
      )}
      <div
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 50%, 55% 52%, 48% 65%, 40% 52%, 0 51%)",
        }}
        className="bg-primary absolute -top-5 z-30 w-40 h-20 rounded-md  flex justify-center font-semibold  text-white text-sm pt-2"
      >
        Foto Dokumentasi
      </div>

      {id === 1 ? (
        <div className="flex md:gap-4 xl:gap-4 mt-10">
          {progressPage1Img.map((data) => (
            <div
              key={data.id}
              className="progress-img-wrap w-1/2 lg:h-80 md:h-72 h-52 overflow-hidden rounded-md border-4 border-gray-300 group"
              onMouseEnter={() => setProgressImgHover(!progressImgHover)}
              onMouseLeave={() => setProgressImgHover(!progressImgHover)}
              onClick={() => handleClick(data.id)}
            >
              <div className="progress-img  relative flex">
                <Image src={data.img} alt="Wisata Ilustration" className="" />
                <div
                  className={`absolute lg:bottom-32 md:bottom-32 bottom-20 left-0 z-40 font-medium w-full text-center transition-transform ease-in-out duration-200 delay-150 text-white translate-y-0 group-hover:-translate-y-20`}
                >
                  {data.progress}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : id === 2 ? (
        <div className="flex xl:gap-4 md:gap-4 mt-10">
          {progressPage2Img.map((data) => (
            <div
              key={data.id}
              className="progress-img-wrap w-1/2 h-52 overflow-hidden rounded-md border-4 border-gray-300 group"
              onMouseEnter={() => setProgressImgHover(!progressImgHover)}
              onMouseLeave={() => setProgressImgHover(!progressImgHover)}
              onClick={() => handleClick(data.id)}
            >
              <div className="progress-img  relative flex">
                <Image src={data.img} alt="Wisata Ilustration" className="" />
                <div
                  className={`absolute bottom-20 left-0 z-40 font-medium w-full text-center transition-transform ease-in-out duration-200 delay-150 text-white translate-y-0 group-hover:-translate-y-20`}
                >
                  {data.progress}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : id === 3 ? (
        <div className="flex xl:gap-4 md:gap-4 mt-10">
          {progressPage3Img.map((data) => (
            <div
              key={data.id}
              className="progress-img-wrap w-1/2 h-52 overflow-hidden rounded-md border-4 border-gray-300 group"
              onMouseEnter={() => setProgressImgHover(!progressImgHover)}
              onMouseLeave={() => setProgressImgHover(!progressImgHover)}
              onClick={() => handleClick(data.id)}
            >
              <div className="progress-img  relative flex">
                <Image src={data.img} alt="Wisata Ilustration" className="" />
                <div
                  className={`absolute bottom-20 left-0 z-40 font-medium w-full text-center transition-transform ease-in-out duration-200 delay-150 text-white translate-y-0 group-hover:-translate-y-20`}
                >
                  {data.progress}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-full"></div>
      )}
    </div>
  );
}
