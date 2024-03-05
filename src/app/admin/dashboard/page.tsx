"use client";

import {
  MdOutlineMarkEmailUnread,
  MdOutlineMarkEmailRead,
} from "react-icons/md";
import { RiMailSettingsLine } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
import { useState } from "react";

import React from "react";

const DashboardAdmin = () => {
  const [statusRevalidate, setStatusRevalidate] = useState("");
  const [statusRevalidateBg, setStatusRevalidateBg] = useState(false);
  const [showRivalidate, setShowRevalidate] = useState(false);

  const revalidate = async () => {
    setShowRevalidate(!showRivalidate);
    const res = await fetch(
      `http://localhost:3000/api/revalidate?tag=market&secret=desamatakomaroso2024`,
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatusRevalidate("Invalid Revalidate");
      setStatusRevalidateBg(false);
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatusRevalidate("Revalidate Success!");
        setStatusRevalidateBg(true);
      }
    }
  };
  return (
    <>
      <div className="w-full px-7">
        <h1 className="text-3xl font-semibold ">Dashboard</h1>
      </div>
      {/* <div className="w-3/12 px-7 mt-3">
          <div
            className={`p-2 mb-1 rounded-md ${
              showRivalidate ? "flex" : "hidden"
            } ${statusRevalidateBg ? "bg-green-400" : "bg-red-400"}`}
          >
            {statusRevalidate}
          </div>

          <button
            onClick={() => revalidate()}
            className="px-4 py-1 rounded-md bg-primary text-white"
          >
            Revalidate
          </button>
        </div> */}
      <div className="w-full ">
        <div className="flex gap-7 p-6">
          <div className="w-1/4 h-40 p-5 bg-white shadow-lg rounded-sm border border-slate-200 relative overflow-hidden">
            {/*surat masuk */}
            <div className="bg-slate-200 w-60 h-60 rounded-full absolute -top-28 -right-28 z-10"></div>
            <div className="mt-6">
              <div className="absolute right-2 top-3 z-20 pe-3 flex justify-end items-center text-7xl text-primary  rounded-full">
                <MdOutlineMarkEmailUnread />
              </div>
              <div className="leading-4">
                <div className="text-4xl font-semibold">11</div>
                <div className="text-sm font-medium text-slate-500">
                  Surat Masuk
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 h-40 p-5 bg-white shadow-lg rounded-sm border border-slate-200 relative overflow-hidden">
            {/*surat masuk */}
            <div className="bg-slate-200 w-60 h-60 rounded-full absolute -top-28 -right-28 z-10"></div>
            <div className="mt-6">
              <div className="absolute right-2 top-3 z-20 pe-3 flex justify-end items-center text-7xl text-primary  rounded-full">
                <RiMailSettingsLine />
              </div>
              <div className="leading-4">
                <div className="text-4xl font-semibold">9</div>
                <div className="text-sm font-medium text-slate-500">
                  Sedang diproses
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 h-40 p-5 bg-white shadow-lg rounded-sm border border-slate-200 relative overflow-hidden">
            {/*surat masuk */}
            <div className="bg-slate-200 w-60 h-60 rounded-full absolute -top-28 -right-28 z-10"></div>
            <div className="mt-6">
              <div className="absolute right-2 top-3 z-20 pe-3 flex justify-end items-center text-7xl text-primary  rounded-full">
                <MdOutlineMarkEmailRead />
              </div>
              <div className="leading-4">
                <div className="text-4xl font-semibold">15</div>
                <div className="text-sm font-medium text-slate-500">
                  Terselesaikan
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 h-40 p-5 bg-white shadow-lg rounded-sm border border-slate-200 relative overflow-hidden">
            {/*surat */}
            <div className="bg-slate-200 w-60 h-60 rounded-full absolute -top-28 -right-28 z-10"></div>
            <div className="mt-6">
              <div className="absolute right-2 top-3 z-20 pe-3 flex justify-end items-center text-7xl text-primary  rounded-full">
                <TbUsers />
              </div>
              <div className="leading-4">
                <div className="text-4xl font-semibold">3</div>
                <div className="text-sm font-medium text-slate-500">Admin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-ful mx-6 mt-2">
        <div className="bg-white px-6 pt-6 shadow-lg rounded-sm border border-slate-200 relative">
          <div className="w-full mb-6">
            <h1 className="text-2xl font-semibold text-slate-800">
              Data Penduduk
            </h1>
          </div>
          <div className="table w-full">
            <div className="table-header bg-slate-100 rounded-sm w-full flex justify-evenly px-4 py-5">
              <div className="w-full text-md font-medium text-slate-500 text-center uppercase">
                Kategori
              </div>
              <div className="w-full text-md font-medium text-slate-500 text-center uppercase">
                Laki-Laki
              </div>
              <div className="w-full text-md font-medium text-slate-500 text-center uppercase">
                Perempuan
              </div>
              <div className="w-full text-md font-medium text-slate-500 text-center uppercase">
                Jumlah
              </div>
            </div>
            <div className="table-body ">
              <div className="flex px-5 md:py-5 py-2 border-t border-t-slate-100 ">
                <div className="w-full text-md font-medium text-slate-900 text-center">
                  Balita
                </div>
                <div className="w-full text-md font-medium text-slate-900 text-center">
                  125 Jiwa
                </div>
                <div className="w-full text-md font-medium text-slate-900 text-center">
                  223 Jiwa
                </div>
                <div className="w-full text-md font-medium text-primary text-center">
                  667 Jiwa
                </div>
              </div>
              <div className="flex px-5 md:py-5 py-2 border-t border-t-slate-100 ">
                <div className="w-full text-md font-medium text-slate-900 text-center">
                  Anak-anak
                </div>
                <div className="w-full text-md font-medium text-slate-900 text-center">
                  125 Jiwa
                </div>
                <div className="w-full text-md font-medium text-slate-900 text-center">
                  223 Jiwa
                </div>
                <div className="w-full text-md font-medium text-primary text-center">
                  667 Jiwa
                </div>
              </div>
              <div className="flex px-5 md:py-5 py-2 border-t border-t-slate-100 ">
                <div className="w-full text-md font-medium text-slate-900 text-center">
                  Dewasa
                </div>
                <div className="w-full text-md font-medium text-slate-900 text-center">
                  125 Jiwa
                </div>
                <div className="w-full text-md font-medium text-slate-900 text-center">
                  223 Jiwa
                </div>
                <div className="w-full text-md font-medium text-primary text-center">
                  667 Jiwa
                </div>
              </div>
              <div className="flex px-5 md:py-5 py-2 border-t border-t-slate-100 ">
                <div className="w-full text-md font-medium text-slate-900 text-center">
                  Lansia
                </div>
                <div className="w-full text-md font-medium text-slate-900 text-center">
                  125 Jiwa
                </div>
                <div className="w-full text-md font-medium text-slate-900 text-center">
                  223 Jiwa
                </div>
                <div className="w-full text-md font-medium text-primary text-center">
                  667 Jiwa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
