"use client";

import PagesWrapper from "../../components/layouts/PagesWrapper";
import ilustrasiWisata from "../../../public/assets/img/wisata-ilus.png";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import imgCard1 from "../../../public/assets/img/pantai1.jpg";
import imgCard2 from "../../../public/assets/img/arter1.jpg";
import imgCard3 from "../../../public/assets/img/goa1.jpg";
import SlidedImgObjekWisata from "./slide-img";
import { useState } from "react";

export default function ObjekWisata() {
  const [detail, setDetail] = useState(0);
  const handleClose = (e: any) => {
    setDetail(e);
  };
  return (
    <div>
      <PagesWrapper pageTitle="Objek Wisata">
        <div className="w-full">
          <SlidedImgObjekWisata
            onDetail={detail}
            handleClose={() => handleClose(0)}
          />
          <div className="w-8/12 mx-auto ">
            <div className="flex w-7/12 justify-center mx-auto">
              <div className="w-1/2 bg-blue-500">
                <Image src={ilustrasiWisata} alt="Wisata Ilustration" />
              </div>
              <div className="w-1/2 pt-5">
                <h1 className="uppercase text-5xl font-bold text-primary">
                  objek
                </h1>
                <h1 className="uppercase text-3xl font-bold text-[#343a40]">
                  wisata
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto  mt-5 ">
            <div className="w-full flex md:h-60 lg:h-64 justify-center">
              <div className="w-1/3   wisata-img md:translate-x-3 lg:translate-x-6 relative flex justify-center items-center rounded-l-lg overflow-hidden">
                <Image
                  src={imgCard1}
                  alt="Wisata Ilustration"
                  className="rounded-lg"
                />
                <div
                  className="zoom-icon scale-0 absolute transition-all p-2 text-2xl z-30 bg-white rounded-full text-primary"
                  onClick={() => handleClose(1)}
                >
                  <MdZoomOutMap />
                </div>
              </div>
              <div className="w-1/3 h-full wisata-card rounded-r-lg -translate-x-3 bg-gray-300 relative z-10 flex justify-center items-center">
                <div className="ml-8 font-medium w-8/12">
                  <h1 className="font-bold lg:text-2xl">
                    Pantai Wisata Empang
                  </h1>
                  <div className="flex gap-1 items-center text-sm">
                    <div className="text-gray-500 text-[10px]">
                      <FaPlay />
                    </div>
                    <p>
                      Lokasi :{" "}
                      <span className="text-sky-600">Dusun I, Desa Matako</span>
                    </p>
                  </div>
                  <div className="flex gap-1 items-center text-sm">
                    <div className="text-gray-500 text-[10px]">
                      <FaPlay />
                    </div>
                    <p>
                      Pengelola : <span className="text-sky-600">Pribadi</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto  mt-3 ">
            <div className="w-full flex md:h-60 lg:h-64 justify-center">
              <div className="w-1/3   wisata-img md:translate-x-3 lg:translate-x-6 relative flex justify-center items-center rounded-l-lg overflow-hidden">
                <Image
                  src={imgCard2}
                  alt="Wisata Ilustration"
                  className="rounded-lg"
                />
                <div
                  className="zoom-icon scale-0 absolute transition-all p-2 text-2xl z-30 bg-white rounded-full text-primary"
                  onClick={() => handleClose(2)}
                >
                  <MdZoomOutMap />
                </div>
              </div>
              <div className="w-1/3 h-full wisata-card rounded-r-lg -translate-x-3 bg-gray-300 relative z-10 flex justify-center items-center">
                <div className="ml-8 font-medium w-8/12">
                  <h1 className="font-bold lg:text-2xl">
                    Air Terjun Watumoali
                  </h1>
                  <div className="flex gap-1 items-center text-sm">
                    <div className="text-gray-500 text-[10px]">
                      <FaPlay />
                    </div>
                    <p>
                      Lokasi :{" "}
                      <span className="text-sky-600">
                        Dusun IV, Desa Matako
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-1 items-center text-sm">
                    <div className="text-gray-500 text-[10px]">
                      <FaPlay />
                    </div>
                    <p>
                      Pengelola : <span className="text-sky-600">Pribadi</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto  mt-3 ">
            <div className="w-full flex md:h-60 lg:h-64 justify-center">
              <div className="w-1/3   wisata-img md:translate-x-3 lg:translate-x-6 relative flex justify-center items-center rounded-l-lg overflow-hidden">
                <Image
                  src={imgCard3}
                  alt="Wisata Ilustration"
                  className="rounded-lg"
                />
                <div
                  className="zoom-icon scale-0 absolute transition-all p-2 text-2xl z-30 bg-white rounded-full text-primary"
                  onClick={() => handleClose(3)}
                >
                  <MdZoomOutMap />
                </div>
              </div>
              <div className="w-1/3 h-full wisata-card rounded-r-lg -translate-x-3 bg-gray-300 relative z-10 flex justify-center items-center">
                <div className="ml-8 font-medium w-8/12">
                  <h1 className="font-bold lg:text-2xl">Goa Manu</h1>
                  <div className="flex gap-1 items-center text-sm">
                    <div className="text-gray-500 text-[10px]">
                      <FaPlay />
                    </div>
                    <p>
                      Lokasi :{" "}
                      <span className="text-sky-600">
                        Dusun VI, Desa Matako
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-1 items-center text-sm">
                    <div className="text-gray-500 text-[10px]">
                      <FaPlay />
                    </div>
                    <p>
                      Pengelola :{" "}
                      <span className="text-sky-600">Pemerintah Desa</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PagesWrapper>
    </div>
  );
}
