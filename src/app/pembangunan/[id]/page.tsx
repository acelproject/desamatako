"use client"

import PagesWrapper from "@/components/layouts/PagesWrapper";
import ilustrasiBuildingDetail from "../../../../public/assets/img/building-detail.png";
import jembatanBuild from "../../../../public/assets/img/pantai1.jpg";
import jembatanBuild2 from "../../../../public/assets/img/goa1.jpg";
import Image from "next/image";
import { MdZoomOutMap } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/router";
import ImgDetailZoom from "../imgDetailZoom";
import DokDetailPembangunanComponent from "../../../components/fragments/pembangunan/detail/dokumentasi";

type DetailPembangunanProps = {
  params: { id: string };
};

export default function DetailPembangunanPage(props: DetailPembangunanProps) {
  const {params}=props
  const [imgZoom, setImgZoom] = useState(0);

  const handleZoomImg = (e: any) => {
    setImgZoom(e);
  };

  const handleClose = (e:any)=>{
    setImgZoom(e)
  }

  // const { query } = useRouter();

  // console.log(query.id);


  return (
    <PagesWrapper pageTitle="Detail Pembangunan">
      <ImgDetailZoom onImgZoom={imgZoom} handleClose={()=>handleClose(0)}/>
      <div className="w-full">
        <div className="w-8/12 mx-auto ">
          <div className="flex w-7/12 justify-center mx-auto">
            <div className="w-1/2 bg-blue-500">
              <Image src={ilustrasiBuildingDetail} alt="Wisata Ilustration" />
            </div>
            <div className="w-1/2 pt-5">
              <h1 className="uppercase text-5xl font-bold text-primary">
                info
              </h1>
              <h1 className="uppercase text-3xl font-bold text-[#343a40]">
                pembangunan
              </h1>
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-3xl font-semibold mx-auto  text-center mt-4">
              {params.id === "1" ? (
                <div>Semenisasi gg. Ramli RT 09 RW 05 Dusun III</div>
              ) : params.id === "2" ? (
                <div>Semenisasi gg. Ramli RT 09 RW 05 Dusun 222</div>
              ) : params.id === "3" ? (
                <div>Semenisasi gg. Ramli RT 09 RW 05 Dusun 333</div>
              ) : (
                <div>--ksosng--</div>
              )}
            </h1>
          </div>
          <div className="w-full flex justify-center items-center mt-3">
            <div className="w-10/12 mx-auto  relative build-img-detail z-10 flex justify-center">
              {params.id === "1" ? (
                <Image
                  src={jembatanBuild}
                  alt="Pembangunan Jembatan"
                  className="lg:h-[700px] md:h-[500px]"
                />
              ) : params.id === "2" ? (
                <Image
                  src={jembatanBuild2}
                  alt="Pembangunan Jembatan"
                  className="lg:h-[700px] md:h-[500px]"
                />
              ) : params.id === "3" ? (
                <Image
                  src={jembatanBuild}
                  alt="Pembangunan Jembatan"
                  className="lg:h-[700px] md:h-[500px]"
                />
              ) : (
                <div>--ksosng--</div>
              )}
              <div
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 50%, 55% 52%, 48% 65%, 40% 52%, 0 51%)",
                }}
                className="bg-primary absolute bottom-[-60px]  z-30 w-40 h-20 rounded-md border-2 border-white flex justify-center font-semibold text-white text-sm pt-2"
              >
                Detail Pembangunan
              </div>
            </div>
            {params.id === "1" ? (
              <div
                className=" scale-100 absolute transition-all p-2 text-lg z-30 bg-white rounded-full text-primary"
                onClick={() => handleZoomImg(1)}
              >
                <MdZoomOutMap />
              </div>
            ) : params.id === "2" ? (
              <div
                className=" scale-100 absolute transition-all p-2 text-lg z-30 bg-white rounded-full text-primary"
                onClick={() => handleZoomImg(2)}
              >
                <MdZoomOutMap />
              </div>
            ) : params.id === "3" ? (
              <div
                className=" scale-100 absolute transition-all p-2 text-lg z-30 bg-white rounded-full text-primary"
                onClick={() => handleZoomImg(3)}
              >
                <MdZoomOutMap />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="w-full  mt-12 xl:px-20 md:px-16">
            <div className="flex">
              <p className="w-[30%] font-semibold">Lokasi</p>
              <p className="w-[70%]">: RT 009 / RW 005 - III PEDEKIK DARAT</p>
            </div>
            <div className="flex">
              <p className="w-[30%] font-semibold">Anggaran</p>
              <p className="w-[70%]">: Rp. 45,000,000</p>
            </div>
            <div className="flex">
              <p className="w-[30%] font-semibold">Volume</p>
              <p className="w-[70%]">: 50 x 3 M</p>
            </div>
            <div className="flex">
              <p className="w-[30%] font-semibold">Sumber Dana</p>
              <p className="w-[70%]">
                : Bantuan Keuangan dari APBD Provinsi dan APBD Kabupaten/Kota
              </p>
            </div>
            <div className="flex">
              <p className="w-[30%] font-semibold">Tahun</p>
              <p className="w-[70%]">: 2023</p>
            </div>
            <div className="flex">
              <p className="w-[30%] font-semibold">Pelaksana</p>
              <p className="w-[70%]">: TPK Desa</p>
            </div>
            <div className="flex">
              <p className="w-[30%] font-semibold">Manfaat</p>
              <p className="w-[70%]">
                : Mempermudah akses ke rumah warga dan kebun masyarakat.
              </p>
            </div>
            <div className="flex">
              <p className="w-[30%] font-semibold">Keterangan</p>
              <p className="w-[70%]">: Selesai 100%.</p>
            </div>
          </div>

          <div className="w-full  mt-12 xl:px-20 md:px-16 ">
            {params.id === "1" ? (
              <DokDetailPembangunanComponent id={1}/>
            ) : params.id === "2" ? (
              <DokDetailPembangunanComponent id={2}/>
            ) : params.id === "3" ? (
              <DokDetailPembangunanComponent id={3}/>
            ) : (
              <div>--ksosng--</div>
            )}
          </div>
        </div>
      </div>
    </PagesWrapper>
  );
}
