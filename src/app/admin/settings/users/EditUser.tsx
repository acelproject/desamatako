"use client";
import React, { MouseEventHandler, useRef, useState } from "react";
import { FaEdit, FaPlus, FaSave } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
type AddDataProps = {
  showEditData: Boolean;
  setShowEditData: any;
};
const EditUser = ({ showEditData, setShowEditData }: AddDataProps) => {
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
          <h1 className="font-semibold text-2xl">Edit User</h1>
          <div onClick={() => setShowEditData(false)}>
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
              value={`admin`}
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
              value={`sdAgatDDFTYjsk736r$3akjA1263DD3bksksmmmh$$nsggd`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Level User</div>
            <div
              className="border px-3 py-2 rounded-md focus:ring-2 transition-all flex justify-between items-center focus:border-primary outline-none relative"
              onClick={() => setLevelUser(!levelUser)}
            >
              <div className="text-[14px] text-slate-500">{levelUserText}</div>
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

export default EditUser;
