import { FooterLogo } from "./icons/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Footer = () => {
  const [routeIsHome, setRouteIsHome] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.route === "/") {
      setRouteIsHome(true);
    } else {
      setRouteIsHome(false);
    }
  }, [router.route]);

  return (
    <div
      className={`w-full  transition lg:pl-64 ${
        routeIsHome ? "bg-lb2 dark:bg-db2" : "bg-lb-1 dark:bg-db1"
      }`}
    >
      <div className="py-8 flex flex-col space-y-6 justify-between items-center border-b-[24px] border-b-yellow-400 md:flex-row md:px-14">
        <FooterLogo />
        <p className=" text-text_wm font-light text-sm dark:text-text_dm">
          2022&copy; All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
