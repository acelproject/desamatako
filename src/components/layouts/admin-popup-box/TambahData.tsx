"use client";

import React, { MouseEventHandler, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
type AddDataProps = {
  showAddData: Boolean;
  setShowAddData: any;
  children:React.ReactNode;
  h1:string;
};
const TambahDataPopUpBox = ({ showAddData, setShowAddData,h1,children }: AddDataProps) => {
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
      <div className="absolute w-4/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-7 bg-white rounded-lg">
        <div className="px-7 mb-5 flex justify-between items-center">
          <h1 className="font-semibold text-2xl">{h1}</h1>
          <div onClick={() => setShowAddData(false)}>
            <IoClose className="text-lg" />
          </div>
        </div>
        <form action="">
          <div className=" mx-7 flex flex-col gap-3">
            {children}
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
        </form>
      </div>
    </div>
  );
};

export default TambahDataPopUpBox;
