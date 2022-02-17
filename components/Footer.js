import Image from "next/image";
import buildUrl from "cloudinary-build-url";
import { FooterLogo } from "./icons/icons";

const Footer = () => {
  const url = buildUrl("herosection_dxki02", {
    cloud: {
      cloudName: "ddwguc7vu",
    },
  });

  return (
    <div className="w-full bg-lb2 dark:bg-db2 transition">
      <div className="py-8 flex justify-center border-b-[24px] border-b-yellow-400">
        <p className=" text-text_wm dark:text-text_dm">
          2022&copy; All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
