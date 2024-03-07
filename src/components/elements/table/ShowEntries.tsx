"use client"

import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import { TbSelector } from "react-icons/tb";

const ShowEntries = () => {
  const [showEntries, setShowEntries] = useState(false);
  const [countEntries, setcountShowEntries] = useState(10);

  const handleHideEntries = () => {
    setShowEntries(!showEntries);
  };
  const ref: any = useRef(null);
  const pathname = usePathname();
  return (
    <div
      className={`py-4 justify-between text-sm text-slate-700 ${
        pathname === "/admin/user" ? "hidden" : "flex"
      }`}
    >
      <div className={`gap-1 items-center flex `}>
        <div>Show</div>
        <button
          ref={ref}
          className={`btn-entries border relative flex gap-1 items-center justify-center rounded-md w-14 py-1  ${
            showEntries ? "focus:border-primary" : ""
          }`}
          onClick={() => handleHideEntries()}
        >
          <div>{countEntries}</div>
          <div>
            <TbSelector />
          </div>
          <div
            className={`absolute bg-white text-sm w-full rounded-md border -bottom-[84px] overflow-hidden ${
              showEntries ? "block" : "hidden"
            }`}
          >
            <div
              className="text-start ps-3 hover:bg-primary hover:text-white"
              onClick={() => setcountShowEntries(10)}
            >
              10
            </div>
            <div
              className="text-start ps-3 hover:bg-primary hover:text-white"
              onClick={() => setcountShowEntries(25)}
            >
              25
            </div>
            <div
              className="text-start ps-3 hover:bg-primary hover:text-white"
              onClick={() => setcountShowEntries(50)}
            >
              50
            </div>
            <div
              className="text-start ps-3 hover:bg-primary hover:text-white"
              onClick={() => setcountShowEntries(100)}
            >
              100
            </div>
          </div>
        </button>
        <div>entries</div>
      </div>
      <div className="flex gap-2">
        <div className="text-slate-500">Search :</div>
        <div>
          <input type="text" className="border" />
        </div>
      </div>
    </div>
  );
};

export default ShowEntries;
