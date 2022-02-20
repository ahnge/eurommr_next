import { Facebook, LeftArrow, Logo, LogoDark, RightArrow } from "./icons/icons";
import { useState, useRef } from "react";
import { useGlobalcontext } from "./context";
import Link from "react-scroll/modules/components/Link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { dkm } = useGlobalcontext();

  const homeTag = useRef();
  const aboutTag = useRef();
  const servicesTag = useRef();
  const projectsTag = useRef();
  const contactTag = useRef();
  const LinksArr = [
    homeTag.current,
    aboutTag.current,
    servicesTag.current,
    projectsTag.current,
    contactTag.current,
  ];

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
            <Link
              ref={homeTag}
              onClick={() => setIsOpen(false)}
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer font-light text-base leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all  pl-14  xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm bg-transparent hover:bg-hover hover:text-white hover:border-yellow-400"
            >
              <a>Home</a>
            </Link>
          </li>
          <li className=" w-full">
            <Link
              ref={aboutTag}
              onClick={() => setIsOpen(false)}
              to="about"
              spy={true}
              smooth={true}
              offset={420}
              duration={500}
              className="cursor-pointer font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all  pl-14  xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm bg-transparent hover:bg-hover hover:text-white hover:border-yellow-400"
            >
              <a>About us</a>
            </Link>
          </li>
          <li className=" w-full">
            <Link
              ref={servicesTag}
              onClick={() => setIsOpen(false)}
              to="services"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              className="cursor-pointer font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all  pl-14  xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm bg-transparent hover:bg-hover hover:text-white hover:border-yellow-400"
            >
              <a>Services</a>
            </Link>
          </li>
          <li className=" w-full">
            <Link
              ref={projectsTag}
              onClick={() => setIsOpen(false)}
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer font-light text-lg leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all  pl-14  xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm bg-transparent hover:bg-hover hover:text-white hover:border-yellow-400"
            >
              <a>Projects</a>
            </Link>
          </li>
          <li className=" w-full">
            <Link
              ref={contactTag}
              onClick={() => setIsOpen(false)}
              to="contact"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              className="cursor-pointer font-light text-base leading-[26px] py-3 block w-full border-l-8 border-transparent transition-all  pl-14  xlr:py-5 xlr:tracking-wide text-text_wm dark:text-text_dm bg-transparent hover:bg-hover hover:text-white hover:border-yellow-400"
            >
              <a>Contact</a>
            </Link>
          </li>
        </ul>

        <div className="flex flex-col items-center space-y-2">
          <Link to="/">
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
