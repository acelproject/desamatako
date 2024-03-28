"use client";

import React, { MouseEventHandler, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
type AddDataProps = {
  showAddData: Boolean;
  setShowAddData: any;
};
const TambahDataPembangunan = ({
  showAddData,
  setShowAddData,
}: AddDataProps) => {
  const overlay = useRef(null);

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      setShowAddData(false);
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
      <div className="absolute w-6/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-7 bg-white rounded-lg">
        <div className="px-7 mb-5 flex justify-between items-center">
          <h1 className="font-semibold text-2xl">Tambah Data Pembangunan</h1>
          <div onClick={() => setShowAddData(false)}>
            <IoClose className="text-lg" />
          </div>
        </div>
        <div className=" mx-7 flex flex-col gap-3">
          <div className="flex gap-5">
            <div className="w-[50%] flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="font-semibold">
                  Pembangunan
                </label>
                <input
                  type="text"
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
                  id="nama"
                  className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="font-semibold">
                  Anggaran
                </label>
                <input
                  type="text"
                  id="nama"
                  className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="font-semibold">
                  Volume
                </label>
                <input
                  type="text"
                  id="nama"
                  className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="font-semibold">
                  Sumber Dana
                </label>
                <input
                  type="text"
                  id="nama"
                  className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="font-semibold">
                  Tahun
                </label>
                <input
                  type="text"
                  id="nama"
                  className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                />
              </div>
            </div>
            <div className="w-[50%] flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="font-semibold">
                  Pelaksana
                </label>
                <input
                  type="text"
                  id="nama"
                  className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="font-semibold">
                  Manfaat
                </label>
                <input
                  type="text"
                  id="nama"
                  className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="font-semibold">
                  Keterangan
                </label>
                <input
                  type="text"
                  id="nama"
                  className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="font-semibold">
                  Foto 0%
                </label>
                <input
                  type="file"
                  id="nama"
                  className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="font-semibold">
                  Foto 50%
                </label>
                <input
                  type="file"
                  id="nama"
                  className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="font-semibold">
                  Foto 100%
                </label>
                <input
                  type="file"
                  id="nama"
                  className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-between">
            <button
              className="bg-slate-100 shadow px-4 py-[7px] mt-[-1px] flex gap-1 text-slate-800 border items-center rounded-full"
              onClick={() => setShowAddData(false)}
            >
              <div>Close</div>
            </button>
            <button className="bg-primary px-4 py-[7px] flex gap-1 mt-[-1px] text-white items-center rounded-full">
              <div>Save</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahDataPembangunan;
