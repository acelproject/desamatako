"use client";

import Image from "next/image";
import { MdCategory, MdLogout, MdOutlineWidgets } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { FaPeopleRoof, FaHandsHoldingChild } from "react-icons/fa6";
import { AiFillProfile } from "react-icons/ai";
import { FaRegBuilding, FaUser } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { LiaUserTimesSolid } from "react-icons/lia";
import Logo from "../../../public/assets/img/logo.png";
import React, { useState } from "react";
import NavbarAdmin from "./navbar/page";

import Link from "next/link";
import Script from "next/script";
import { signOut } from "next-auth/react";

const menus = [
  {
    id: 1,
    title: "Dashboard",
    arrow: false,
    href: "/admin/dashboard",
    icon: <MdOutlineWidgets />,
  },
  {
    id: 2,
    title: "Permohonan Surat",
    arrow: false,
    href: "/admin/permohonan-surat",
    icon: <GrNotes />,
  },
  {
    id: 3,
    title: "Data Penduduk",
    arrow: false,
    href: "/admin/data-penduduk",
    icon: <FaPeopleRoof />,
  },
  {
    id: 4,
    title: "Data Kelahiran",
    arrow: false,
    href: "/admin/data-kelahiran",
    icon: <FaHandsHoldingChild />,
  },
  {
    id: 5,
    title: "Data Kematian",
    arrow: false,
    href: "/admin/data-kematian",
    icon: <LiaUserTimesSolid />,
  },

  {
    id: 6,
    title: "Profile Desa",
    arrow: true,
    href: "javascript: void(0)",
    icon: <AiFillProfile />,
  },
  {
    id: 7,
    title: "Pembangunan",
    href: "/admin/pembangunan",
    arrow: false,
    icon: <FaRegBuilding />,
  },
  {
    id: 8,
    title: "Objek Wisata",
    href: "/admin/objek-wisata",
    arrow: false,
    icon: <FaMountainSun />,
  },
  {
    id: 9,
    title: "Kategori",
    href: "javascript: void(0)",
    arrow: true,
    icon: <MdCategory />,
  },
  {
    id: 10,
    title: "User",
    href: "/admin/user",
    arrow: false,
    icon: <FaUser />,
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  // const [menuComponent, setMenuComponent] = useState(1);
  // console.log(menuComponent);

  const [fullScreen, setFullScreen] = useState(false);

  // const handleMenuClick = (e: any) => {
  //   // setDropDownActive(!dropDownActive)
  //   setMenuComponent(e);
  // };
  return (
    //sidebar

    <div className={`flex bg-slate-100 w-full relative`}>
      <div
        className={` ${
          fullScreen ? "w-[0%]" : "w-[21.5%] p-5"
        } transition-all  bg-slate-800  h-[100vh]`}
      >
        <div className=" w-full h-full overflow-auto scrollbar-none">
          {/* Title */}
          <div className="w-full mb-10">
            <div className="flex gap-3 items-center">
              <div>
                <Image src={Logo} alt="" className="w-8" />
              </div>
              <h1 className="text-2xl font-semibold text-white">
                Dashboard Admin
              </h1>
            </div>
          </div>

          {/* Menu */}
          <div className="w-ful">
            <h2 className=" text-gray-400 text-sm mb-4 px-4">MENU</h2>
            <ul className=" flex flex-col gap-2">
              {menus.map((menu) => (
                <div className="" key={menu.id}>
                  <ListMenu menu={menu} />
                </div>
              ))}
              <div
                className="flex text-gray-300 hover:text-white items-center justify-between gap-2 px-4 py-2 transition-all duration-150 hover:bg-slate-700 rounded-sm"
                onClick={() => signOut()}
              >
                <div className="flex  gap-2 ">
                  <span className="text-xl">
                    <MdLogout />
                  </span>
                  <span className="font-medium text-md">Logout</span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={` ${
          fullScreen ? "w-[100%]" : "w-[78.5%]"
        } transition-all relative overflow-x-hidden h-[100vh] `}
      >
        <NavbarAdmin setFullScreen={() => setFullScreen(!fullScreen)} />
        <div className="my-5 w-full">{children}</div>
      </div>
    </div>
  );
}

const ListMenu = ({ menu }: any) => {
  const [dropDownActive, setDropDownActive] = useState(false);

  return (
    <>
      {/* {menu.title==="profile Desa"?(
        )} */}
      <Link
        href={`${menu.href}`}
        className="flex text-gray-300 hover:text-white items-center justify-between gap-2 px-4 py-2 transition-all duration-150 hover:bg-slate-700 rounded-sm"
        onClick={() => setDropDownActive(!dropDownActive)}
      >
        <div className="flex  gap-2 ">
          <span className="text-xl">{menu.icon}</span>
          <span className="font-medium text-md">{menu.title}</span>
        </div>
        {menu.arrow && (
          <div
            className={`${
              dropDownActive ? "-rotate-90" : "rotate-0"
            } transition-all`}
          >
            <IoIosArrowDown />
          </div>
        )}
      </Link>
      {menu.title === "Profile Desa" && (
        <div
          className={`text-sm flex-col gap-1 px-12 pt-1 ${
            dropDownActive ? "flex" : "hidden"
          }`}
        >
          <Link href={`/admin/profil-desa/sejarah`}>
            <li className="hover:text-white text-gray-300 cursor-pointer">
              Sejarah
            </li>
          </Link>
          <li className="hover:text-white text-gray-300 cursor-pointer">
            Visi & Misi
          </li>
          <li className="hover:text-white text-gray-300 cursor-pointer">
            <Link href={`/admin/profil-desa/struktur-organisasi`}>
              Struktur Organisasi
            </Link>
          </li>
          <li className="hover:text-white text-gray-300 cursor-pointer">
            RPJM Desa
          </li>
          <li className="hover:text-white text-gray-300 cursor-pointer">
            Data Dasar Keluarga
          </li>
          <li className="hover:text-white text-gray-300 cursor-pointer">
            Potensi Desa
          </li>
          <li className="hover:text-white text-gray-300 cursor-pointer">
            Tingkat Perkembangan Desa
          </li>
        </div>
      )}
      {menu.title === "Kategori" && (
        <div
          className={`text-sm flex-col gap-1 px-12 pt-1 ${
            dropDownActive ? "flex" : "hidden"
          }`}
        >
          <li className="hover:text-white text-gray-300 cursor-pointer">
            Alamat
          </li>
          <li className="hover:text-white text-gray-300 cursor-pointer">
            Jenis Surat
          </li>
        </div>
      )}
    </>
  );
};
