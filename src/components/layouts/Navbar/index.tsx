"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import logo from "../../../../public/assets/img/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { signIn, signOut, useSession } from "next-auth/react";

let submenus = [
  {
    id: 1,
    title: "SEJARAH",
    href: "/sejarah",
  },
  {
    id: 2,
    title: "VISI & MISI",
    href: "/visi-misi",
  },
  {
    id: 3,
    title: "STRUKTUR ORGANISASI",
    href: "/struktur-organisasi",
  },
  {
    id: 4,
    title: "RPJM DESA",
    href: "/rpjm",
  },
  {
    id: 5,
    title: "POTENSI DESA",
    href: "/potensi-desa",
  },
  {
    id: 6,
    title: "TPD",
    href: "/tpd",
  },
];
let menus = [
  // {
  //   id: 1,
  //   label: "Beranda",
  //   href: "/",
  //   delayAnimated: 0,
  //   navType: "beranda",
  //   display: "hidden",
  // },
  // {
  //   id: 2,
  //   label: "Profil Desa",
  //   delayAnimated: 0.1,
  //   navType: "profildesa",
  //   href: "/profil-desa",
  //   submenu: {
  //     menu1: {
  //       title: "SEJARAH",
  //       href: "sejarah",
  //     },
  //     menu2: {
  //       title: "VISI & MISI",
  //       href: "visi-misi",
  //     },
  //     menu3: "STRUKTUR ORGANISASI",
  //     menu4: "RPJM DESA",
  //     menu5: "DATA DASAR KELUARGA",
  //     menu6: "POTENSI DESA",
  //     menu7: "TPD",
  //   },
  //   display: "block",
  // },
  // {
  //   id: 3,
  //   label: "Pembangunan",
  //   href: "/pembangunan",
  //   delayAnimated: 0.2,
  //   navType: "pembangunan",
  //   display: "hidden",
  // },
  {
    id: 4,
    label: "Objek Wisata",
    href: "/objek-wisata",
    delayAnimated: 0.3,
    navType: "objek",
    display: "hidden",
  },
  {
    id: 5,
    label: "Pembuatan Surat",
    href: "/pembuatan-surat",
    delayAnimated: 0.5,
    navType: "surat",
    display: "hidden",
  },
];

export default function Navbar() {
  const [onHover, setOnHover] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  const pathName = usePathname();
  const route = useRouter();

  const [onScroll, setOnScroll] = useState(false);

  // const handleActive =(e:any)=>{
  //   setActiveMenu(e)
  // }

  const changeBg = () => {
    if (window.scrollY >= 1) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
  });

  const handleMouseEnter = (e: any) => {
    setOnHover(!onHover);
    if (e === 2) {
      setSubMenu(true);
      // setOnHoverSubMenu(e.target.textContent);
    } else {
      setSubMenu(false);
    }
  };
  const handleMouseLeave = (e: any) => {
    setOnHover(!onHover);
    setSubMenu(false);
  };

  const { status }:{status:string} = useSession();
  return (
    <div>
      {pathName === "/" ? (
        <div
          className={`w-full fixed top-0 transition-all duration-20 delay-100 ${
            onScroll ? "bg-[#343a40]" : "bg-transparent "
          }  h-auto items-center flex md:justify-between justify-evenly md:px-20 z-50`}
          id="top"
        >
          <div className=" py-3 flex gap-3 items-center ">
            <div
              className={`transition-all duration-20 delay-100 ${
                onScroll ? "w-8" : "md:w-14 w-10"
              }`}
            >
              <Image src={logo} alt="Logo Desa Matako" />
            </div>
            <div
              className={`w-[1px] bg-white transition-all duration-20 delay-100 ${
                onScroll ? "h-8" : " md:h-14 h-10"
              }`}
            ></div>
            <div className="-mt-1">
              <h1
                className={`font-bold text-white transition-all duration-20 delay-100 ${
                  onScroll ? "md:text-lg text-sm" : " md:text-3xl text-md"
                }`}
              >
                Desa Matako
              </h1>
              <p
                className={`text-gray-200 font-semibold transition-all duration-20 delay-100 ${
                  onScroll ? "md:text-xs text-[9px]" : "md:text-xs text-[10px] "
                }`}
              >
                Kec.Tojo Barat, Kab. Tojo Una-Una
              </p>
            </div>
          </div>
          <div>
            <ul className="md:flex hidden  gap-8 items-center">
              <div
                className={` relative flex justify-center h-8 items-center ${
                  pathName === `${`/`}` ? "text-white" : "text-gray-300"
                } `}
              >
                <Link href={`/`} className="flex justify-center">
                  {pathName === `/` && (
                    <motion.div
                      layoutId="bubble"
                      className={`bg-primary absolute w-1 h-1 ${
                        onScroll ? "bottom-[-3px]" : "-bottom-2"
                      } -bottom-2 ${onHover ? "" : " "}  rounded-full `}
                      transition={{ type: "spring", duration: 0.6 }}
                    ></motion.div>
                  )}
                  Beranda
                </Link>
              </div>
              <div
                className={` relative flex justify-center h-8 items-center cursor-pointer  text-gray-300 `}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-center">Profil Desa</div>
                <motion.div
                  className={`bg-black bg-opacity-50 backdrop-blur-sm absolute top-8 left-0 px-4  w-auto pt-5 text-white rounded-sm block ${
                    subMenu ? "block" : "hidden"
                  }`}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0,
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                >
                  {submenus.map((submenu) => (
                    <li
                      key={submenu.id}
                      className="mb-3 w-[210px] rounded-sm hover:bg-primary transition-all duration-200 delay-150 py-1 px-2 hover:text-white font-normal"
                    >
                      <Link href={`/profil-desa${submenu.href}`}>
                        {submenu.title}
                      </Link>
                    </li>
                  ))}
                </motion.div>
              </div>
              <div
                className={` relative flex justify-center h-8 items-center text-gray-300`}
              >
                <Link href={`/pembangunan`} className="flex justify-center">
                  Pembangunan
                </Link>
              </div>
              {menus.map((menu) => (
                <div key={menu.id}>
                  <div
                    className={` relative flex justify-center h-8 items-center ${
                      pathName === menu.href ? "text-white" : "text-gray-300"
                    } `}
                    onMouseEnter={() => handleMouseEnter(menu.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link href={`${menu.href}`} className="flex justify-center">
                      {pathName === menu.href && (
                        <motion.div
                          layoutId="bubble"
                          className={`bg-primary absolute  ${
                            onScroll ? "-bottom-1" : "-bottom-2"
                          } -bottom-2 ${
                            onHover ? "-bottom-3" : " -bottom-2"
                          }  rounded-full `}
                          transition={{ type: "spring", duration: 0.6 }}
                        ></motion.div>
                      )}
                      {menu.label}
                    </Link>
                  </div>
                </div>
              ))}
              <li className="text-white">
                {status === "authenticated" ? (
                  <button
                  onClick={() => signOut()}
                  className="bg-primary px-5 font-medium py-2 rounded-full uppercase"
                >
                  Logout
                </button>
                ):(
                  <button
                  onClick={() => signIn()}
                  className="bg-primary px-5 font-medium py-2 rounded-full uppercase"
                >
                  Login
                </button>
                )}
              </li>
            </ul>
            {/* menu bars */}
            <div className="sm:hidden flex">
              <FaBarsStaggered className="text-primary text-lg" />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`w-full fixed top-0 transition-all duration-20 delay-100 bg-[#343a40]  h-auto items-center flex md:justify-between justify-evenly md:px-20 z-50`}
        >
          <div className=" py-3 flex gap-3 items-center ">
            <div
              className={`transition-all duration-20 delay-100 ${
                onScroll ? "w-8" : "md:w-14 w-10"
              }`}
            >
              <Image src={logo} alt="Logo Desa Matako" />
            </div>
            <div
              className={`w-[1px] bg-white transition-all duration-20 delay-100 ${
                onScroll ? "h-8" : " md:h-14 h-10"
              }`}
            ></div>
            <div className="-mt-1">
              <h1
                className={`font-bold text-white transition-all duration-20 delay-100 ${
                  onScroll ? "md:text-lg text-sm" : " md:text-3xl text-md"
                }`}
              >
                Desa Matako
              </h1>
              <p
                className={`text-gray-200 font-semibold transition-all duration-20 delay-100 ${
                  onScroll ? "md:text-xs text-[9px]" : "md:text-xs text-[10px] "
                }`}
              >
                Kec.Tojo Barat, Kab. Tojo Una-Una
              </p>
            </div>
          </div>
          <div>
            <ul className="md:flex hidden gap-8 items-center">
              <div
                className={` relative flex justify-center h-8 items-center ${
                  pathName === `${`/`}` ? "text-white" : "text-gray-300"
                } `}
                // onMouseEnter={() => handleMouseEnter(2)}
                // onMouseLeave={handleMouseLeave}
              >
                <Link href={`/`} className="flex justify-center">
                  {pathName === `/` && (
                    <motion.div
                      layoutId="bubble"
                      className={`bg-primary absolute w-1 h-1  ${
                        onScroll ? "-bottom-1" : "-bottom-2"
                      } -bottom-2 ${
                        onHover ? " -bottom-3" : "-bottom-2"
                      }  rounded-full `}
                      transition={{ type: "spring", duration: 0.6 }}
                    ></motion.div>
                  )}
                  Beranda
                </Link>
              </div>
              <div
                className={` relative flex justify-center h-8 items-center cursor-pointer  ${
                  pathName === "/profil-desa/sejarah" ||
                  pathName === "/profil-desa/visi-misi" ||
                  pathName === "/profil-desa/struktur-organisasi" ||
                  pathName === "/profil-desa/rpjm" ||
                  pathName === "/profil-desa/ddk" ||
                  pathName === "/profil-desa/potensi-desa" ||
                  pathName === "/profil-desa/tpd"
                    ? "text-white"
                    : " text-gray-300"
                } `}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
                // onClick={() => handleActive()}
              >
                <div className="flex justify-center">
                  {pathName === "/profil-desa/sejarah" ||
                  pathName === "/profil-desa/visi-misi" ||
                  pathName === "/profil-desa/struktur-organisasi" ||
                  pathName === "/profil-desa/rpjm" ||
                  pathName === "/profil-desa/ddk" ||
                  pathName === "/profil-desa/potensi-desa" ||
                  pathName === "/profil-desa/tpd" ? (
                    <motion.div
                      layoutId="bubble"
                      className={`bg-primary absolute w-1 h-1 ${
                        onScroll ? "-bottom-[2px]" : "-bottom-2"
                      } -bottom-2 ${
                        onHover ? "-bottom-3" : " -bottom-2"
                      }  rounded-full `}
                      transition={{ type: "spring", duration: 0.6 }}
                    ></motion.div>
                  ) : (
                    <div></div>
                  )}
                  Profil Desa
                </div>
                <motion.div
                  className={`bg-black bg-opacity-50 backdrop-blur-sm absolute top-8 left-0 px-4  w-auto pt-5 text-white rounded-sm block ${
                    subMenu ? "block" : "hidden"
                  }`}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0,
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                >
                  {submenus.map((submenu) => (
                    <li
                      key={submenu.id}
                      className="mb-3 w-[200px] rounded-sm hover:bg-primary transition-all duration-200 delay-150 py-1 px-2 hover:text-white font-normal"
                      // onClick={() => setActiveMenu(submenu.id)}
                    >
                      <Link href={`/profil-desa${submenu.href}`}>
                        {submenu.title}
                      </Link>
                    </li>
                  ))}
                </motion.div>
              </div>
              <div
                className={` relative flex justify-center h-8 items-center ${
                  pathName === "/pembangunan" ||
                  pathName === "/pembangunan/1" ||
                  pathName === "/pembangunan/2" ||
                  pathName === "/pembangunan/3"
                    ? "text-white"
                    : "text-gray-300"
                } `}
                // onMouseEnter={() => handleMouseEnter(2)}
                // onMouseLeave={handleMouseLeave}
              >
                <Link href={`/pembangunan`} className="flex justify-center">
                  {pathName === `/pembangunan` ||
                  pathName === "/pembangunan/1" ||
                  pathName === "/pembangunan/2" ||
                  pathName === "/pembangunan/3" ? (
                    <motion.div
                      layoutId="bubble"
                      className={`bg-primary absolute w-1 h-1  ${
                        onScroll ? "-bottom-[2px]" : "-bottom-2"
                      } -bottom-2 ${
                        onHover ? "-bottom-3" : "-bottom-2"
                      }  rounded-full `}
                      transition={{ type: "spring", duration: 0.6 }}
                    ></motion.div>
                  ) : (
                    <div></div>
                  )}
                  Pembangunan
                </Link>
              </div>
              {menus.map((menu) => (
                <div key={menu.id}>
                  <div
                    className={` relative flex justify-center w-auto  h-8 items-center ${
                      pathName === menu.href || menu.label === "Pembangunan"
                        ? "text-white"
                        : "text-gray-300"
                    } `}
                    onMouseEnter={() => handleMouseEnter(menu.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link href={`${menu.href}`} className="flex justify-center">
                      {pathName === menu.href ||
                      menu.label === "Pembangunan" ? (
                        <motion.div
                          layoutId="bubble"
                          className={`bg-primary absolute w-1 h-1  ${
                            onScroll ? "bottom-[-3px]" : "-bottom-2"
                          } -bottom-2 ${
                            onHover ? "" : "-bottom-1"
                          }  rounded-full `}
                          transition={{ type: "spring", duration: 0.6 }}
                        ></motion.div>
                      ) : (
                        <div></div>
                      )}
                      {menu.label}
                    </Link>
                  </div>
                </div>
              ))}
              <li className="text-white">
                <button
                  onClick={() => route.push("/login")}
                  className="bg-primary px-5 font-medium py-2 rounded-full uppercase"
                >
                  Login
                </button>
              </li>
            </ul>
            {/* menu bars */}
            <div className="sm:hidden flex">
              <FaBarsStaggered className="text-primary text-lg" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
