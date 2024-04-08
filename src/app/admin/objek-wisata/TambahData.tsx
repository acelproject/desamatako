"use client";

import { headers } from "next/headers";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
type AddDataProps = {
  showAddData: Boolean;
  setShowAddData: any;
  // setAddedNotif:any;
};
const TambahDataObjekWisata = ({
  showAddData,
  setShowAddData,
  // setAddedNotif
}: AddDataProps) => {
  const overlay = useRef(null);

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      setShowAddData(false);
    }
  };


  const router=useRouter()


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = {
      wisata: e.target.wisata.value,
      lokasi: e.target.lokasi.value,
      pengelola: e.target.pengelola.value,
      img1: e.target.img1.value,
      img2: e.target.img2.value,
      img3: e.target.img3.value,
    };
    if (!res.wisata) {
      alert("wisata kosong");
      return;
    }
    if (!res.lokasi) {
      alert("Lokasi kosong");
      return;
    }
    if (!res.pengelola) {
      alert("pengelola kosong");
      return;
    }
    if (!res.img1) {
      alert("gambar 1 kosong");
      return;
    }
    if (!res.img2) {
      alert("gambar 2 kosong");
      return;
    }
    if (!res.img3) {
      alert("gambar 3 kosong");
      return;
    }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/objek-wisata`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body:JSON.stringify(res)
      });

      if (response.ok) {
        setShowAddData(false);
        window.location.reload()
        router.refresh()
      }else{
        throw new Error("Ada yang salah")
      }
    } catch (error) {
      alert(error)
      return
    }
  };

  return (
    <div
      ref={overlay}
      className={`fixed z-[999999] left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 ${
        showAddData ? "flex" : "hidden"
      }`}
      onClick={close}
    >
      <div className="absolute w-4/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-7 bg-white rounded-lg">
        <div className="px-7 mb-5 flex justify-between items-center">
          <h1 className="font-semibold text-2xl">Tambah Data Objek Wisata</h1>
          <div onClick={() => setShowAddData(false)}>
            <IoClose className="text-lg" />
          </div>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className=" mx-7 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold">
                Nama Wisata
              </label>
              <input
                type="text"
                name="wisata"
                id="nama"
                className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold">
                Lokasi
              </label>
              <input
                type="text"
                name="lokasi"
                id="nama"
                className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold">
                Pengelola
              </label>
              <input
                type="text"
                name="pengelola"
                id="nama"
                className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold">
                Foto 1
              </label>
              <input
                type="file"
                name="img1"
                id="nama"
                className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold">
                Foto 2
              </label>
              <input
                type="file"
                name="img2"
                id="nama"
                className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold">
                Foto 3
              </label>
              <input
                type="file"
                name="img3"
                id="nama"
                className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
              />
            </div>

            <div className="mt-5 flex justify-between">
              <button
                className="bg-slate-100 shadow px-4 py-[7px] mt-[-1px] flex gap-1 text-slate-800 border items-center rounded-full"
                onClick={() => setShowAddData(false)}
              >
                <div>Close</div>
              </button>
              <button
                type="submit"
                className="bg-primary px-4 py-[7px] flex gap-1 mt-[-1px] text-white items-center rounded-full"
              >
                <div>Save</div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahDataObjekWisata;
