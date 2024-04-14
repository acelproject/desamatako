"use client";

import Link from "next/link";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import ShowEntries from "./table/ShowEntries";
import useSWR from "swr";

// const getSuratMasuk = async () => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/surat-masuk`,
//       {
//         cache: "no-store",
//       }
//     );

//     if (!res.ok) {
//       throw new Error("Gagal memuat data!");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(`Error : ${error}`);
//   }
// };
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Table(props: { title: string }) {
  const [tabs, setTabs] = useState(1);
  const { title } = props;

  // const { suratMasuk } = await getSuratMasuk();
  const { data, error ,isLoading} = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/surat-masuk`,
    fetcher
  );

  const permohonanSurat: any = { data: data?.suratMasuk };

  console.log(permohonanSurat);

  const suratMasuk = permohonanSurat.data?.filter(
    (surat: any) => surat.status === "masuk"
  );
  const suratDiProses = permohonanSurat.data?.filter(
    (surat: any) => surat.status === "diproses"
  );
  console.log(suratMasuk);

  const [searchQuery, setSearchQuery] = useState("");
  const [fillteredObjek, setFillteredObjek] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [paginatedData, setPaginatedData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [notFound, setNotFound] = useState(false);
  const [perPages, setPerPages] = useState(1);
  const [showEntries, setShowEntries] = useState(false);

  return (
    <div className="">
      <div className="flex bg-white border-b ">
        <div className="w-[40%] flex relative top-0 font-medium text-slate-700 bg-white h-12 z-0 rounded-t-sm">
          <div
            className={` px-4 py-3 relative cursor-pointer ${
              tabs === 1
                ? "h-14 -top-0 overflow-hidden z-10 rounded-t-md border-r border-r-slate-200 bg-white"
                : ""
            }`}
            onClick={() => setTabs(1)}
          >
            <div
              className={`absolute w-full h-[3px] bg-primary -top-0 left-0 ${
                tabs === 1 ? "flex" : "hidden"
              }`}
            ></div>
            <span className={`${tabs === 1 ? "text-primary" : ""}`}>
              Surat Masuk
            </span>
          </div>
          <div
            className={` px-4 py-3 relative cursor-pointer ${
              tabs === 2
                ? "h-14 -top-0 overflow-hidden z-10 rounded-t-md border-x border-r-slate-200 bg-white"
                : ""
            }`}
            onClick={() => setTabs(2)}
          >
            {" "}
            <div
              className={`absolute w-full h-[3px] bg-primary -top-0 left-0 ${
                tabs === 2 ? "flex" : "hidden"
              }`}
            ></div>
            <span className={`${tabs === 2 ? "text-primary" : ""}`}>
              Surat Diproses
            </span>
          </div>
          <div
            className={` px-3 py-3 relative cursor-pointer ${
              tabs === 3
                ? "h-14 -top-0 overflow-hidden z-10 rounded-t-md border-x border-r-slate-200 bg-white"
                : ""
            }`}
            onClick={() => setTabs(3)}
          >
            {" "}
            <div
              className={`absolute w-full h-[3px] bg-primary -top-0 left-0 ${
                tabs === 3 ? "flex" : "hidden"
              }`}
            ></div>
            <span className={`${tabs === 3 ? "text-primary" : ""}`}>
              Surat Selesai
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white px-6 py-6 shadow-lg rounded-sm border-b border-b-slate-200 relative">
        <div className="w-full bg-primary rounded-t-sm">
          <h1 className="text-xl font-semibold text-white py-3 px-7 ">
            {tabs === 1 && "Surat Masuk"}
            {tabs === 2 && "Surat Diproses"}
            {tabs === 3 && "Surat Selesai"}
          </h1>
        </div>
        <div className="px-5 pb-5 border border-slate-100">
          <ShowEntries 
          // handleSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          // handleCountEntries={handleCountEntries}
          perPages={perPages}
          setShowEntries={setShowEntries}
          showEntries={showEntries}
          />

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-x border-t border-slate-200 rounded-sm">
                  <table className="min-w-full text-left text-sm ">
                    <thead className="border-b  bg-slate-100 text-slate-600 uppercase dark:border-neutral-500 dark:bg-neutral-600">
                      <tr>
                        <th scope="col" className="px-6 py-4 font-semibold ">
                          No
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold ">
                          Waktu
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold ">
                          Nama
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold ">
                          NIK
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold ">
                          no.wa
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold ">
                          Jenis Surat
                        </th>
                        <th scope="col" className="px-6 py-4 font-semibold ">
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    {tabs === 1 &&
                      suratMasuk?.length > 0 ?
                      suratMasuk?.map((item: any, i: any) => (
                        <tbody key={i}>
                          <tr className="border-b dark:bg-neutral-700 font-normal">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {i + 1}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item.createdAt}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item.nama}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item.nama}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item.noWa}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item.surat}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Link
                                href={`/admin/permohonan-surat/${item._id}/${item.jenisSurat}`}
                              >
                                <span className="text-slate-600 hover:text-primary text-lg">
                                  <FaRegEye />
                                </span>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      )): ("")}
                    {tabs === 2 &&
                      suratDiProses?.length &&
                      suratDiProses?.map((item: any, i: any) => (
                        <tbody key={i}>
                          <tr className="border-b dark:bg-neutral-700 font-normal">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {i + 1}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item.createdAt}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item.nama}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item.nama}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item.noWa}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {item.surat}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Link
                                href={`/admin/permohonan-surat/${item._id}/${item.jenisSurat}`}
                              >
                                <span className="text-slate-600 hover:text-primary text-lg">
                                  <FaRegEye />
                                </span>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                  </table>
                  {isLoading && (
                    <div className="w-full py-5 border-b flex justify-center items-center text-slate-400 text-sm italic">
                    Memuat ...
                  </div>
                  )}
                  {tabs === 1 && suratMasuk?.length < 1 &&(
                    <div className="w-full py-5 border-b flex justify-center items-center text-slate-400 text-sm italic">
                      Masih Kosong ...
                    </div>
                  )}
                  {notFound === true && (
                    <div className="w-full py-5 flex justify-center items-center text-slate-400 text-sm italic">
                      Data Tidak Ada ...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-3">
            <div className="bg-slate-200 text-slate-900 text-sm flex items-center px-3 py-1 rounded-md hover:bg-primary hover:text-white cursor-pointer">
              Previous
            </div>
            <div className="text-slate-800 hover:bg-primary hover:text-white px-2 flex justify-center items-center rounded-sm cursor-pointer">
              1
            </div>
            <div className="bg-slate-200 text-slate-900 text-sm flex items-center px-3 py-1 rounded-md hover:bg-primary hover:text-white cursor-pointer">
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
