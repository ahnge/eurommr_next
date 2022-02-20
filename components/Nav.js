import { Facebook, LeftArrow, Logo, LogoDark, RightArrow } from "./icons/icons";
import { useState, useEffect } from "react";
import { useGlobalcontext } from "./context";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dkm, mySetStates, myInViews, myStates } = useGlobalcontext();

  const [
    heroInView,
    aboutInView,
    serviceInView,
    projectsInView,
    contactInView,
  ] = myInViews;
  const [
    heroActive,
    aboutActive,
    serviceActive,
    projectsActive,
    contactActive,
  ] = myStates;
  const [
    setHeroActive,
    setAboutActive,
    setServiceActive,
    setProjectsActive,
    setContactActive,
  ] = mySetStates;

  useEffect(() => {
    mySetStates.forEach((ss) => {
      ss(false);
    });

    if (heroInView) {
      setHeroActive(true);
    } else if (aboutInView) {
      setAboutActive(true);
    } else if (serviceInView) {
      setServiceActive(true);
    } else if (projectsInView) {
      setProjectsActive(true);
    } else if (contactInView) {
      setContactActive(true);
    }
  }, [heroInView, aboutInView, serviceInView, projectsInView, contactInView]);

  return (
    <div
      className={`w-[256px] py-16 fixed bg-white/90 dark:bg-db2/95 backdrop-blur-sm h-screen top-0 transition-all rounded-tr-3xl flex flex-col items-center ${
        isOpen ? "left-0" : "-left-[256px]"
      } lg:left-0 lg:rounded-none lg:bg-white shadow-lg z-20`}
    >
      <div className="flex flex-col justify-between items-center h-full w-full">
        <div className=" w-[133px] xlr:w-[150px] h-auto">
          {dkm ? <LogoDark /> : <Logo />}
        </div>

        <ul className=" w-full">
          <li className=" w-full">
            <Link href="/#welcome">
              <a
                className={`font-light text-base leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-lb2 xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm dark:hover:bg-[#1C1C1C] ${
                  heroActive ? "bg-red-500" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </Link>
          </li>
          <li className=" w-full">
            <Link href="/#welcome">
              <a
                className={`font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-lb2 xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm dark:hover:bg-[#1C1C1C] ${
                  aboutActive ? "bg-red-500" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                About us
              </a>
            </Link>
          </li>
          <li className=" w-full">
            <Link href="/#welcome">
              <a
                className={`font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-lb2 xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm dark:hover:bg-[#1C1C1C] ${
                  serviceActive ? "bg-red-500" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </Link>
          </li>
          <li className=" w-full">
            <Link href="/#welcome">
              <a
                className={`font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-lb2 xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm dark:hover:bg-[#1C1C1C] ${
                  projectsActive ? "bg-red-500" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </Link>
          </li>
          <li className=" w-full">
            <Link href="/#welcome">
              <a
                className={`font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all hover:border-yellow-300 pl-14 hover:bg-lb2 xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm dark:hover:bg-[#1C1C1C] ${
                  contactActive ? "bg-red-500" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </a>
            </Link>
          </li>
        </ul>

        <div className="flex flex-col items-center space-y-2">
          <Link href="/">
            <a className="flex space-x-1 items-center text-text_wm dark:text-text_dm  hover:text-yellow-600  font-normal transition dark:hover:text-yellow-400">
              <Facebook />
              <p className=" text-lg font-normal tracking-normal">
                Find us on facebook.
              </p>
            </a>
          </Link>
          <p className=" text-xs font-normal xlr:text-sm text-text_wm dark:text-text_dm ">
            2022&copy; All Rights Reserved.
          </p>
        </div>
      </div>

      <button
        className="absolute -right-7 bottom-32 py-5 px-1 text-center rounded-tr-lg rounded-br-lg bg-hover_l/95 backdrop-blur-sm lg:hidden dark:bg-black"
        onClick={() => setIsOpen((a) => !a)}
      >
        {isOpen ? <LeftArrow /> : <RightArrow />}
      </button>
    </div>
  );
};

export default Nav;
