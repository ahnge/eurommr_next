import { Facebook, LeftArrow, Logo, LogoDark, RightArrow } from "./icons/icons";
import { useState } from "react";
import { useGlobalcontext } from "./context";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dkm } = useGlobalcontext();

  return (
    <div
      className={`w-60 lg:w-64 fixed bg-white/90 dark:bg-db2/95 backdrop-blur-sm h-screen top-0 transition-all rounded-tr-3xl flex flex-col items-center pt-16 xlr:pt-24 ${
        isOpen ? "left-0" : "-left-60"
      } lg:left-0 lg:rounded-none lg:bg-white xlr:w-[400px] shadow-lg z-20`}
    >
      <div className=" w-[133px] xlr:w-[196px] h-auto">
        {dkm ? <LogoDark /> : <Logo />}
      </div>

      <ul className=" mt-20 w-full">
        <li className=" w-full">
          <Link href="/#welcome">
            <a
              className=" font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-lb2 lgr:text-xl xlr:text-3xl xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm dark:hover:bg-[#1C1C1C]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </Link>
        </li>
        <li className=" w-full">
          <Link href="/#welcome">
            <a
              className=" font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-lb2 lgr:text-xl xlr:text-3xl xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm dark:hover:bg-[#1C1C1C]"
              onClick={() => setIsOpen(false)}
            >
              About us
            </a>
          </Link>
        </li>
        <li className=" w-full">
          <Link href="/#welcome">
            <a
              className=" font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-lb2 lgr:text-xl xlr:text-3xl xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm dark:hover:bg-[#1C1C1C]"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
          </Link>
        </li>
        <li className=" w-full">
          <Link href="/#welcome">
            <a
              className=" font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-lb2 lgr:text-xl xlr:text-3xl xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm dark:hover:bg-[#1C1C1C]"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </Link>
        </li>
        <li className=" w-full">
          <Link href="/#welcome">
            <a
              className=" font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-lb2 lgr:text-xl xlr:text-3xl xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm dark:hover:bg-[#1C1C1C]"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </a>
          </Link>
        </li>
      </ul>

      <button
        className="absolute -right-7 bottom-32 py-5 px-1 text-center rounded-tr-lg rounded-br-lg bg-hover_l/95 backdrop-blur-sm lg:hidden dark:bg-black"
        onClick={() => setIsOpen((a) => !a)}
      >
        {isOpen ? <LeftArrow /> : <RightArrow />}
      </button>

      <div className="absolute bottom-10 py-5 flex flex-col items-center space-y-2">
        <Link href="/">
          <a className="flex space-x-1 items-center text-text_wm dark:text-text_dm  hover:text-yellow-600  font-normal transition dark:hover:text-yellow-400">
            <Facebook />
            <p className=" text-lg font-normal tracking-normal xlr:text-2xl">
              Find us on facebook.
            </p>
          </a>
        </Link>
        <p className=" text-xs font-normal xlr:text-sm text-text_wm dark:text-text_dm ">
          2022&copy; All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Nav;
