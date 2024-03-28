import React from "react";
import { FaImage, FaSave } from "react-icons/fa";
import { MdOutlineDataset } from "react-icons/md";
import exampleImg from "../../../../../public/assets/img/gallery-perangkat/4.jpg";
import Image from "next/image";

const BiodataUsers = () => {
  return (
    <div className="w-full">
      <div className="mx-5 my-4 font-semibold text-2xl">Biodata</div>
      <div className="flex mx-5 gap-5">
        <div className="bg-white border shadow-md rounded-md w-[40%] overflow-hidden">
          <div className="bg-primary flex gap-2 items-center px-5 py-3 text-white">
            <div>
              <FaImage />
            </div>
            <div>Foto Profil</div>
          </div>
          <div className="my-5 mx-5">
            <div className="overflow-hidden rounded-md p-1 border w-max ">
              <Image
                src={exampleImg}
                alt=""
                width={150}
                height={300}
                className="rounded-md"
              ></Image>
            </div>
            <div className="my-5 flex gap-3">
              <input
                type="file"
                className="text-slate-500 w-[70%] py-1 px-3 border rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-white border shadow-md rounded-md w-[60%] overflow-hidden">
          <div className="bg-primary flex gap-2 items-center px-5 py-3 text-white">
            <div>
              <MdOutlineDataset className="text-lg" />
            </div>
            <div>Biodata</div>
          </div>
          <div className="my-5 mx-5 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold">
                Nama User
              </label>
              <input
                type="text"
                id="nama"
                className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                value={`Admin`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="font-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                value={`admin`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="text"
                id="password"
                className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                value={`amkmkmkFRDearvcDE$Rrd##sankskahagSAAdfagSajwo`}
              />
            </div>

            <div>
              <button className="bg-primary px-4 py-[7px] flex gap-1 text-white items-center rounded-full">
                <div>
                  <FaSave />
                </div>
                <div>Simpan</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodataUsers;
