import Modal from "@/components/layouts/modals";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import link1 from "../../../../../public/assets/img/garuda.png";
import link2 from "../../../../../public/assets/img/tojo-una-una.png";
import link3 from "../../../../../public/assets/img/sulteng.png";

type DetailLinksProps = {
  params: { id: string };
};
const LinksDetail = (props: DetailLinksProps) => {
  const { params } = props;
  return (
    <>
      {params.id === "1" && (
        <Modal>
          <div className="flex gap-10">
            <div className="">
              <Link href={`/landing-page/detail-links/${1}`} className="">
                <Image
                  src={link1}
                  alt="Indonesia"
                  className="w-16 mx-auto transition-all duration-150 delay-150 hover:-translate-y-2 "
                />
              </Link>
            </div>

            <div className="">
              <Link
                href={`/landing-page/detail/links`}
                className=" "
                target="_blank"
              >
                <Image
                  src={link3}
                  alt="Sulteng"
                  className="w-16 mx-auto transition-all duration-150 delay-150 hover:-translate-y-2"
                />
              </Link>
            </div>
            <div className="">
              <Link
                href={`landing-page/links-detail/3`}
                className=" "
                target="_blank"
              >
                <Image
                  src={link2}
                  alt="Tojo Una-una"
                  className="w-16 mx-auto transition-all duration-150 delay-150 hover:-translate-y-2"
                />
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default LinksDetail;
