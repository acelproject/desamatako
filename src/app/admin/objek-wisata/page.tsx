"use client";
import TableThead from "@/components/elements/table/TableThead";
import TableTh from "@/components/elements/table/TableTh";
import TableTd from "@/components/elements/table/TableTd";
import { FaRegEye, FaRegEdit, FaPlus } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { useEffect, useState } from "react";
import ShowEntries from "@/components/elements/table/ShowEntries";
import TambahDataObjekWisata from "./TambahData";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Pagination from "@/components/elements/Pagination";

import dynamic from "next/dynamic";

const TableTbody = dynamic(
  () => import("@/components/elements/table/TableTbody"),
  {
    ssr: false,
  }
);

// const PER_PAGE = 1;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DataPendudukAdmin() {
  const [showAddData, setShowAddData] = useState(false);
  const closeShowAddData = () => {
    setShowAddData(false);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [fillteredObjek, setFillteredObjek] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [paginatedData, setPaginatedData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [notFound, setNotFound] = useState(false);
  const [perPages, setPerPages] = useState(1);
  const [showEntries, setShowEntries] = useState(false);

  // fetch data with SWR
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/objek-wisata`,
    fetcher
  );

  const objekWisata: any = { data: data };

  // search & filter data
  const handleSearch = (e: any) => {
    // setSearchQuery(e.target.value);

    if (searchQuery === "") {
      setFillteredObjek([]);
      pagination(fillteredObjek, currPage);
      setNotFound(true)
      console.log(fillteredObjek);
    } else {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filltered = objekWisata.data.objekWisata?.filter(
        (objek: any) =>
          objek.wisata?.toLowerCase().includes(lowercaseQuery) ||
          objek.lokasi?.toLowerCase().includes(lowercaseQuery) ||
          objek.pengelola?.toLowerCase().includes(lowercaseQuery)
      );
      console.log(filltered);
      setFillteredObjek(filltered);
      paginationFiltered(filltered, currPage);
      setNotFound(false)
    }
  };
  
  const handleCountEntries =(value:number)=>{
    setPerPages(value)
    paginationFiltered(objekWisata.data?.objekWisata, currPage);
    setFillteredObjek(objekWisata.data?.objekWisata);
  }
  // Pagination fungtion
  const paginationFiltered = (data: any, currPage = 1) => {
    setTotalPages(Math.ceil(data?.length / perPages));
    const startIndex = (currPage - 1) * perPages;

    const endIndex = startIndex + perPages;

    setPaginatedData(data?.slice(startIndex, endIndex));
  };
  // Pagination fungtion
  const pagination = (data: any, currPage = 1) => {
    setTotalPages(Math.ceil(data?.objekWisata?.length / perPages));
    const startIndex = (currPage - 1) * perPages;

    const endIndex = startIndex + perPages;

    setPaginatedData(data?.objekWisata?.slice(startIndex, endIndex));
  };





  useEffect(() => {
    pagination(objekWisata.data, currPage);
    paginationFiltered(objekWisata.data?.objekWisata, currPage);
    setFillteredObjek(objekWisata.data?.objekWisata);
  }, [objekWisata.data, objekWisata.data?.objekWisata,perPages]);

  const handlePrevPage = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
      pagination(objekWisata.data, currPage - 1);
      paginationFiltered(fillteredObjek, currPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currPage < totalPages) {
      setCurrPage(currPage + 1);
      pagination(objekWisata.data, currPage + 1);
      paginationFiltered(fillteredObjek, currPage + 1);
    }
  };

  // delete data
  const router = useRouter();
  const removeObjekWisata = async ({
    id,
    wisata,
  }: {
    id: string;
    wisata: string;
  }) => {
    const confirmed = confirm(`Yakin ingin menghapus ${wisata}?`);

    if (confirmed) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/objek-wisata?id=${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <>
      <TambahDataObjekWisata
        showAddData={showAddData}
        setShowAddData={closeShowAddData}
        // setAddedNotif={()=>setAddedNotif}
      />

      <div className="w-full px-7 mb-6">
        <h1 className="text-2xl font-semibold">Objek Wisata</h1>
      </div>
      <div className="w-ful mx-6 mt-2">
        <div className="w-full">
          <div className=" w-full flex bg-white border-b "></div>
          <div
            className={`w-full bg-primary rounded-t-sm flex items-center justify-between px-7 `}
          >
            <h1 className="text-lg font-semibold text-white py-3 ">
              Tabel Objek Wisata
            </h1>

            <div
              className="flex items-center gap-1 hover:bg-white transition-all hover:text-primary py-1 px-2 text-sm text-white cursor-pointer rounded-md border  border-white"
              onClick={() => setShowAddData(true)}
            >
              <div className="font-bold">
                <FaPlus />
              </div>
              <div className="mt-[1px]">Tambah Data</div>
            </div>
          </div>

          <div
            className={`w-12/12 px-5 pb-5 border bg-white border-slate-100 relative`}
          >
            {/* <div className="my-2">
              {addedNotif===true && (
                <div className="bg-red-500">Berhasil Ditambahkan!</div>
              )}
            </div> */}
            {/* show entries */}
            <ShowEntries
              handleSearch={handleSearch}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleCountEntries={handleCountEntries}
              perPages={perPages}
              setShowEntries={setShowEntries}
              showEntries={showEntries}
            />

            <div className="flex flex-col overflow-x-auto scrollbar-thin scrollbar-w-4 scrollbar-h-4 ">
              <div className=" sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8 ">
                  <div
                    className={` scrollbar-thumb-slate-300 scrollbar-track-slate-100  border-x border-t border-slate-200 rounded-sm `}
                  >
                    <table className=" text-left text-sm w-[100%]">
                      <TableThead>
                        <TableTh>No</TableTh>
                        <TableTh>nama Wisata</TableTh>
                        <TableTh>lokasi</TableTh>
                        <TableTh>pengelola</TableTh>
                        <TableTh>foto 1</TableTh>
                        <TableTh>foto 2</TableTh>
                        <TableTh>foto 3</TableTh>
                        <TableTh>Aksi</TableTh>
                      </TableThead>
                      {objekWisata.data?.objekWisata.length ||
                      fillteredObjek?.length !== 0 ? (
                        paginatedData?.map((item: any, i: any) => (
                          <TableTbody key={i}>
                            <TableTd>{i + 1}</TableTd>
                            <TableTd>{item.wisata}</TableTd>
                            <TableTd>{item.lokasi}</TableTd>
                            <TableTd>{item.pengelola}</TableTd>
                            <TableTd>{item.img1}</TableTd>
                            <TableTd>{item.img2}</TableTd>
                            <TableTd>{item.img3}</TableTd>
                            <TableTd>
                              <div className="flex gap-2 text-slate-600 text-lg">
                                <Link
                                  href={`/admin/objek-wisata/detail/${item._id}`}
                                  className="hover:text-primary transition-all text-yellow-600"
                                  id={item._id}
                                  // onClick={() => handleEditData(item._id)}
                                >
                                  <FaRegEdit />
                                </Link>
                                <div
                                  className="hover:text-primary transition-all text-red-600"
                                  onClick={() =>
                                    removeObjekWisata({
                                      id: item._id,
                                      wisata: item.wisata,
                                    })
                                  }
                                >
                                  <GoTrash />
                                </div>
                              </div>
                            </TableTd>
                          </TableTbody>
                        ))
                      ) : fillteredObjek.length !== 0 ? (
                        fillteredObjek.map((item: any, i: any) => (
                          <TableTbody key={i}>
                            <TableTd>{i + 1}</TableTd>
                            <TableTd>{item.wisata}</TableTd>
                            <TableTd>{item.lokasi}</TableTd>
                            <TableTd>{item.pengelola}</TableTd>
                            <TableTd>{item.img1}</TableTd>
                            <TableTd>{item.img2}</TableTd>
                            <TableTd>{item.img3}</TableTd>
                            <TableTd>
                              <div className="flex gap-2 text-slate-600 text-lg">
                                <Link
                                  href={`/admin/objek-wisata/detail/${item._id}`}
                                  className="hover:text-primary transition-all text-yellow-600"
                                  id={item._id}
                                  // onClick={() => handleEditData(item._id)}
                                >
                                  <FaRegEdit />
                                </Link>
                                <div
                                  className="hover:text-primary transition-all text-red-600"
                                  onClick={() =>
                                    removeObjekWisata({
                                      id: item._id,
                                      wisata: item.wisata,
                                    })
                                  }
                                >
                                  <GoTrash />
                                </div>
                              </div>
                            </TableTd>
                          </TableTbody>
                        ))
                      ) : isLoading ? (
                        <TableTbody>
                          <TableTd>Memuat ...</TableTd>
                          <TableTd>Memuat ...</TableTd>
                          <TableTd>Memuat ...</TableTd>
                          <TableTd>memuat ...</TableTd>
                          <TableTd>Memuat gambar ...</TableTd>
                          <TableTd>Memuat gambar ...</TableTd>
                          <TableTd>Memuat gambar ...</TableTd>
                          <TableTd>
                            <div className="flex gap-2 text-slate-600 text-lg">
                              <div className="hover:text-primary transition-all text-yellow-600">
                                <FaRegEdit />
                              </div>
                              <div className="hover:text-primary transition-all text-red-600">
                                <GoTrash />
                              </div>
                            </div>
                          </TableTd>
                        </TableTbody>
                      ) : (
                        ""
                      )}
                    </table>

                    {objekWisata.data?.objekWisata.length === 0  && (
                      <div className="w-full py-5 flex justify-center items-center text-slate-400 text-sm italic">Masih Kosong ...</div>
                    )}
                    {notFound === true && (
                      <div className="w-full py-5 flex justify-center items-center text-slate-400 text-sm italic">Data Tidak Ada ...</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Pagination
              page={currPage}
              totalPage={totalPages}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
