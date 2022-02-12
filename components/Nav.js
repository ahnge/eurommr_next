import {
  Facebook,
  Insta,
  LeftArrow,
  Logo,
  RightArrow,
  Twitter,
} from "./icons/icons";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-60 lg:w-64 fixed bg-white/90 backdrop-blur-sm h-screen top-0 transition-all rounded-tr-3xl flex flex-col items-center pt-16 ${
        isOpen ? "left-0" : "-left-60"
      } lg:left-0 lg:rounded-none lg:bg-white lgr:w-[361px]`}
    >
      <Logo />

      <ul className=" mt-20 w-full">
        <li className=" w-full">
          <a
            href="#welcome"
            className=" font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-bgBlur lg:text-xl"
          >
            Home
          </a>
        </li>
        <li className=" w-full">
          <a
            href="#welcome"
            className=" font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-bgBlur lg:text-xl"
          >
            About us
          </a>
        </li>
        <li className=" w-full">
          <a
            href="#welcome"
            className=" font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-bgBlur lg:text-xl"
          >
            Services
          </a>
        </li>
        <li className=" w-full">
          <a
            href="#welcome"
            className=" font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-bgBlur lg:text-xl"
          >
            Projects
          </a>
        </li>
        <li className=" w-full">
          <a
            href="#welcome"
            className=" font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-bgBlur lg:text-xl"
          >
            Contact us
          </a>
        </li>
      </ul>

      <button
        className="absolute -right-7 bottom-32 py-5 px-1 text-center rounded-tr-lg rounded-br-lg bg-bgBlur/80 backdrop-blur-sm lg:hidden"
        onClick={() => setIsOpen((a) => !a)}
      >
        {isOpen ? <LeftArrow /> : <RightArrow />}
      </button>

      <div className="flex mt-32 space-x-6">
        <Twitter />
        <Facebook />
        <Insta />
      </div>

      <p className=" mt-4 font-normal text-xs leading-6 tracking-wider">
        2022&copy; All Rights Reserved.
      </p>
    </div>
  );
};

export default Nav;
