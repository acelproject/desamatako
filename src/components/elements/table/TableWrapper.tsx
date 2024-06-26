"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { TbSelector } from "react-icons/tb";
import ShowEntries from "./ShowEntries";

export default function TableWrapper(props: {
  children: any;
  tableTitle: string;
  href: string;
  kodeKeluarga?: string;
  kepalaKeluarga?: string;
  textTambahData?: string;
  onClickAddData?:any;
}) {
  const {
    children,
    tableTitle,
    href,
    kodeKeluarga,
    kepalaKeluarga,
    textTambahData,
  } = props;

  const pathname = usePathname();

  return (
    <div className="w-full">
      <div className=" w-full flex bg-white border-b ">
        {/* <div className="flex items-center justify-center w-[60%] gap-2">
          <div className="flex items-center gap-2">
            <div className="text-sm italic text-slate-500">Pilih Tanggal</div>
            <div className="border text-slate-600 text-sm px-2 rounded-md">
              <input type="date" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm italic text-slate-500">s.d</div>
            <div className="border text-slate-600 text-sm px-2 rounded-md">
              <div>
                <input type="date" />
              </div>
            </div>
          </div>
          <div className="px-2 font-sm bg-primary rounded-md text-white">
            Filter
          </div>
        </div> */}
      </div>
      <div
        className={`w-full bg-primary rounded-t-sm flex items-center justify-between px-7 `}
      >
        <h1 className="text-lg font-semibold text-white py-3 ">{tableTitle}</h1>

        <Link
          href={href}
          className="flex items-center gap-1 hover:bg-white transition-all hover:text-primary py-1 px-2 text-sm text-white cursor-pointer rounded-md border  border-white"
          
        >
          <div className="font-bold">
            <FaPlus />
          </div>
          {textTambahData ? <div>{textTambahData}</div> : <div>Tambah data</div>}
        </Link>
      </div>

      <div
        className={`w-12/12 px-5 pb-5 border bg-white border-slate-100 relative ${
          pathname === "/admin/user" ? "pt-5" : ""
        }`}
      >
        {kodeKeluarga && (
          <div className="w-full bg-white border-b py-3 text-slate-700 font-semibold">
            <p>
              Kode Keluarga :{" "}
              <span className="font-medium">{kodeKeluarga}</span>{" "}
            </p>
            <p>
              Kepala Keluarga:{" "}
              <span className="font-medium">{kepalaKeluarga}</span>{" "}
            </p>
          </div>
        )}
        {/* show entries */}
        <ShowEntries />
        <div className="flex flex-col overflow-x-auto scrollbar-thin scrollbar-w-4 scrollbar-h-4 ">
          <div className=" sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8 ">
              <div
                className={` scrollbar-thumb-slate-300 scrollbar-track-slate-100  border-x border-t border-slate-200 rounded-sm `}
              >
                <table className=" text-left text-sm w-[100%]">
                  {children}
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-3">
          <div className="bg-slate-200 text-slate-900 text-sm flex items-center px-3 py-1 rounded-md hover:bg-primary hover:text-white cursor-pointer">
            Previous
          </div>
          <div className=" hover:bg-primary bg-primary text-white hover:text-white px-2 flex justify-center items-center rounded-sm cursor-pointer">
            1
          </div>
          <div className="bg-slate-200 text-slate-900 text-sm flex items-center px-3 py-1 rounded-md hover:bg-primary hover:text-white cursor-pointer">
            Next
          </div>
        </div>
      </div>
    </div>
  );
}
