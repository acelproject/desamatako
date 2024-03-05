import Image from "next/image";
import React from "react";
import mapSketch from "../../../../../public/assets/img/map-desa.jpg";

const SketsaImg = () => {
  return (
    <div className="w-full px-20 gap-10 mt-10 ">
      <Image src={mapSketch} alt="Map Desa" className="w-11/12 mx-auto" />
    </div>
  );
};

export default SketsaImg;
