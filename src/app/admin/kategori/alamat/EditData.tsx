"use client";
import React, { MouseEventHandler, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
type AddDataProps = {
  showEditData: Boolean;
  setShowEditData: any;
};
const EditDataAlamat = ({ showEditData, setShowEditData }: AddDataProps) => {
  const overlay = useRef(null);

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      setShowEditData(false);
    }
  };

  const [levelUser, setLevelUser] = useState(false);
  const [levelUserText, setLevelUserText] = useState(`Admin`);
  return (
    <div
      ref={overlay}
      className={`fixed z-[999999] left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 ${
        showEditData ? "flex" : "hidden"
      }`}
      onClick={close}
    >
      <div className="absolute w-4/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-7 bg-white rounded-lg">
        <div className="px-7 mb-5 flex justify-between items-center">
          <h1 className="font-semibold text-2xl">Edit Data</h1>
          <div onClick={() => setShowEditData(false)}>
            <IoClose className="text-lg" />
          </div>
        </div>
        <div className=" mx-7 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="nama" className="font-semibold">
              Alamat
            </label>
            <input
              type="text"
              id="nama"
              className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
              value={`Jln.Trans Sulawesi, Desa Matako`}
            />
          </div>

          <div className="mt-5 flex justify-between">
            <button
              className="bg-slate-100 shadow px-4 py-[7px] mt-[-1px] flex gap-1 text-slate-800 border items-center rounded-full"
              onClick={() => setShowEditData(false)}
            >
              <div>Close</div>
            </button>
            <button className="bg-primary px-4 py-[7px] flex gap-1 text-white items-center rounded-full">
              <div>Save</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDataAlamat;
