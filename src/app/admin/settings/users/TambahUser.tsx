"use client";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler, useRef, useState } from "react";
import { FaPlus, FaSave } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
type AddDataProps = {
  showAddData: Boolean;
  setShowAddData: any;
};
const TambahUser = ({ showAddData, setShowAddData }: AddDataProps) => {
  const overlay = useRef(null);

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      setShowAddData(false);
    }
  };

  const [levelUser, setLevelUser] = useState(false);
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
          <h1 className="font-semibold text-2xl">Tambah User</h1>
          <div onClick={() => setShowAddData(false)}>
            <IoClose className="text-lg" />
          </div>
        </div>
        <div className=" mx-7 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="nama" className="font-semibold">
              Nama User
            </label>
            <input
              type="text"
              id="nama"
              className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
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
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Level User</div>
            <div
              className="border px-3 py-2 rounded-md focus:ring-2 transition-all flex justify-between items-center focus:border-primary outline-none relative"
              onClick={() => setLevelUser(!levelUser)}
            >
              <div className="text-[14px] text-slate-500">-- Level User --</div>
              <IoIosArrowDown />
              <div
                className={`${
                  levelUser ? "flex" : "hidden"
                } absolute top-9 w-full left-0 bg-slate-100 rounded-md overflow-hidden flex-col gap-2`}
              >
                <div className="px-3 py-1 hover:bg-primary text-black hover:text-white cursor-default">
                  admin
                </div>
                <div className="px-3 py-1 hover:bg-primary text-black hover:text-white cursor-default">
                  Petugas
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <button className="bg-primary px-4 py-[7px] flex gap-1 text-white items-center rounded-full">
              <div>
                <FaPlus />
              </div>
              <div>Tambah User</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahUser;
