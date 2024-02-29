"use client"

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const dataKepalaDesa = [
  {
    id:1,
    nama: "PEDENGKA",
    masaJabatan: "Tahun 1901-1903",
    bg: "bg-gray-100",
  },
  {
    id:2,
    nama: "TIMBALINO",
    masaJabatan: "Tahun 1903-1906",
    bg: "bg-white",
  },
  {
    id:3,
    nama: "PEDENGKA",
    masaJabatan: "Tahun 1906-1909",
    bg: "bg-gray-100",
  },
  {
    id:4,
    nama: "TIMBALINO",
    masaJabatan: "Tahun 1909-1912",
    bg: "bg-white",
  },
  {
    id:5,
    nama: "WONCE",
    masaJabatan: "Tahun 1912-1922",
    bg: "bg-gray-100",
  },
];

export default function Apd() {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
    <div className="h-[800px]">
      <div className="flex flex-col px-14 w-full py-5 ">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5  ">
          <div
            className="py-2 inline-block min-w-full sm:px-6 lg:px-8 "
            ref={componentRef}
          >
            <Table />
          </div>
        </div>
      </div>

      <button onClick={handlePrint} className="bg-blue-500">
        Print
      </button>

      <p>sqsqs</p>
      <p>sqsqs</p>
      <p>sqsqs</p>
      <p>sqsqs</p>
      <p>sqsqs</p>
      <p>sqsqs</p>
      <p>sqsqs</p>
      <p>sqsqs</p>
      <p>sqsqs</p>
      <p>sqsqs</p>
    </div>
    </>
  );
}

const Table = () => {
  return (
    <div className="overflow-hidden ">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-white border-b">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Nama
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Masa Jabatan
            </th>
          </tr>
        </thead>
        <tbody>
          {dataKepalaDesa.map((data) => (
            <tr key={data.id} className={`${data.bg} border-b`}>
              <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                {data.nama}
              </td>
              <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                {data.masaJabatan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
