"use client"

import Image from "next/image";
import Link from "next/link";
import React, { MouseEventHandler, useRef } from "react";
import link1 from "../../../../../public/assets/img/garuda.png";
import link2 from "../../../../../public/assets/img/kemendes.png";
import link3 from "../../../../../public/assets/img/kemenparekraf.png";
type DetailLinksProps = {
  params?: number;
  linksDetail?: boolean;
  setLinksDetail?: any;
};
const LinksDetail = (props: DetailLinksProps) => {
  const { params, linksDetail, setLinksDetail } = props;

  const overlay = useRef(null);

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      setLinksDetail(!linksDetail);
    }
  };
  return (
    <div
      ref={overlay}
      className={`fixed z-[999999] left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 ${
        linksDetail ? "flex" : "hidden"
      }`}
      onClick={close}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg">
        <div className={`flex gap-10 `}>
          {params === 1 && (
            <>
              <div className="">
                <Link href={`https://www.indonesia.go.id/`} className="">
                  <Image
                    src={link1}
                    alt="Indonesia"
                    className="w-16 mx-auto transition-all duration-150 delay-150 hover:-translate-y-2 "
                  />
                </Link>
              </div>

              <div className="">
                <Link
                  href={`https://www.kemendesa.go.id/`}
                  className=" "
                  target="_blank"
                >
                  <Image
                    src={link2}
                    alt="Kemendesa"
                    className="w-16 mx-auto transition-all duration-150 delay-150 hover:-translate-y-2"
                  />
                </Link>
              </div>
              <div className="">
                <Link
                  href={`https://kemenparekraf.go.id/`}
                  className=" "
                  target="_blank"
                >
                  <Image
                    src={link3}
                    alt="Kemenparekraf"
                    className="w-16 mx-auto transition-all duration-150 delay-150 hover:-translate-y-2"
                  />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinksDetail;
