import Image from "next/image";
import React from "react";
import companyNameLogo from "../../../public/images/companyNameLogo.png";
import TvsMobility from "../../../public/images/tvsMobility.png";
import BodyContent from "../bodyContent/bodyContent";

const Navbar = () => {
  return (
    <div className="px-5">
      <div className="bg-slate-100 flex flex-col py-[3.4rem]  sticky top-0 z-50 "></div>
      {/* <div className="bg-red-300 flex flex-col py-2  sticky top-24 z-50"></div> */}

      <div className="bg-white flex flex-col py-2 rounded-[20px] sticky top-12 -mt-16 z-50">
        <div className="flex items-center justify-between px-5">
          <Image
            className="rounded-md h-12 w-28"
            alt="company logo"
            src={companyNameLogo}
            height={0}
            width={0}
          />
          <p className="ml-8 font-bold">BIAS CUTTER</p>
          <Image
            className="rounded-md"
            alt="company logo"
            src={TvsMobility}
            height={150}
            width={150}
          />
        </div>
      </div>
      <BodyContent />
    </div>
  );
};

export default Navbar;
