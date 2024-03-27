import Link from "next/link";
import React from "react";

const TambahData = () => {
  return (
    <div>
      <div className="ms-5 mb-5">
        <h1 className="font-semibold text-2xl">Tambah Data Penduduk</h1>
      </div>
      <div className="bg-white rounded-md border shadow-md mx-5 overflow-hidden pb-5">
        <h1 className="text-2xl font-semibold w-full bg-primary text-white px-4 py-3 mb-4">
          Tambah Data
        </h1>
        <div className="mx-5 flex flex-col gap-4">
          <div className="flex items-center ">
            <h2 className="text-md font-semibold w-[25%] ">
              {" "}
              <span className="before:content-['*'] before:text-red-500 before:absolute before:-top-2 before:-right-3 relative">
                Kode Keluarga ( Nomor KK )
              </span>
            </h2>
            <input
              type="text"
              className="border w-[75%] h-9 rounded-md transition-all px-3 outline-none focus:ring-[3px] ring-primary/40 focus:border-primary"
            />
          </div>
          <div className="flex items-center">
            <h2 className="text-md font-semibold w-[25%] ">
              <span className="before:content-['*'] before:text-red-500 before:absolute before:-top-2 before:-right-3 relative">
                Nama Kepala Keluarga
              </span>
            </h2>
            <input
              type="text"
              className="border w-[75%] h-9 rounded-md transition-all px-3 outline-none focus:ring-[3px] ring-primary/40 focus:border-primary"
            />
          </div>
          <div className="flex items-center">
            <h2 className="text-md font-semibold w-[25%] ">
              <span className="before:content-['*'] before:text-red-500 before:absolute before:-top-2 before:-right-3 relative">
                Alamat
              </span>
            </h2>
            <textarea
              className="border w-[75%] h-20 pt-2 rounded-md transition-all px-3 outline-none focus:ring-[3px] ring-primary/40 focus:border-primary"
              name="alamat"
              id="alamat"
              rows={10}
              placeholder="Masukan alamat lengkap ..."
            />
          </div>
          <div className="flex items-center">
            <h2 className="text-md font-semibold w-[25%] ">
              <span className="before:content-['*'] before:text-red-500 before:absolute before:-top-2 before:-right-3 relative">
                RT
              </span>
            </h2>
            <input
              type="text"
              className="border w-[7%] h-9 rounded-md transition-all px-3 outline-none focus:ring-[3px] ring-primary/40 focus:border-primary"
            />
          </div>
          <div className="flex items-center">
            <h2 className="text-md font-semibold w-[25%] ">
              <span className="before:content-['*'] before:text-red-500 before:absolute before:-top-2 before:-right-3 relative">
                RW
              </span>
            </h2>
            <input
              type="text"
              className="border w-[7%] h-9 rounded-md transition-all px-3 outline-none focus:ring-[3px] ring-primary/40 focus:border-primary"
            />
          </div>
          <div className="flex items-center">
            <h2 className="text-md font-semibold w-[25%] ">
              <span className="">Nama Dusun</span>
            </h2>
            <input
              type="text"
              className="border w-[75%] h-9 rounded-md transition-all px-3 outline-none focus:ring-[3px] ring-primary/40 focus:border-primary"
            />
          </div>
          <div className="flex items-center">
            <h2 className="text-md font-semibold w-[25%] ">
              <span className="before:content-['*'] before:text-red-500 before:absolute before:-top-2 before:-right-3 relative">
                Bulan
              </span>
            </h2>
            <input
              type="text"
              className="border w-[10%] h-9 rounded-md transition-all px-3 outline-none focus:ring-[3px] ring-primary/40 focus:border-primary"
            />
          </div>
          <div className="flex items-center">
            <h2 className="text-md font-semibold w-[25%] ">
              <span className="before:content-['*'] before:text-red-500 before:absolute before:-top-2 before:-right-3 relative">
                Tahun
              </span>
            </h2>
            <input
              type="text"
              className="border w-[10%] h-9 rounded-md transition-all px-3 outline-none focus:ring-[3px] ring-primary/40 focus:border-primary"
            />
          </div>
          <div className="flex items-center">
            <h2 className="text-md font-semibold w-[25%] ">
              <span className="">Nama Pengisi</span>
            </h2>
            <input
              type="text"
              className="border w-[50%] h-9 rounded-md transition-all px-3 outline-none focus:ring-[3px] ring-primary/40 focus:border-primary"
            />
          </div>
          <div className="flex items-center">
            <h2 className="text-md font-semibold w-[25%] ">
              <span className="">Pekerjaan</span>
            </h2>
            <input
              type="text"
              className="border w-[50%] h-9 rounded-md transition-all px-3 outline-none focus:ring-[3px] ring-primary/40 focus:border-primary"
            />
          </div>
          <div className="flex items-center">
            <h2 className="text-md font-semibold w-[25%] ">
              <span className="">Jabatan</span>
            </h2>
            <input
              type="text"
              className="border w-[50%] h-9 rounded-md transition-all px-3 outline-none focus:ring-[3px] ring-primary/40 focus:border-primary"
            />
          </div>
          <div className="flex items-center">
            <h2 className="text-md font-semibold w-[25%] ">
              <span className="">Sumber Data</span>
            </h2>
            <textarea
              className="border w-[75%] h-20 pt-2 rounded-md transition-all px-3 outline-none focus:ring-[3px] ring-primary/40 focus:border-primary"
              name="alamat"
              id="alamat"
              rows={10}
              placeholder=""
            />
          </div>
          <div className="flex items-center mt-5">
            <h3 className="font-semibold italic text-red-500">
              * Field Yang Wajib Di isi!
            </h3>
          </div>
          <hr />
          <div className="flex items-center mt-4 mb-3">
            <div className="flex gap-5 mx-auto">
              <Link
                href={`/admin/data-penduduk`}
                className="bg-slate-600 px-5 py-2 font-medium text-white rounded-md shadow-md"
              >
                Kembali
              </Link>
              <button className="bg-primary px-5 py-2 font-medium text-white rounded-md shadow-md">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahData;
