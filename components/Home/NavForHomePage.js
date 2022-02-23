import Link from "react-scroll/modules/components/Link";
import { useGlobalcontext } from "../context";
import { useState, useEffect } from "react";

const NavForHomePage = () => {
  const { setIsOpen, mySetStates, myInViews, myStates } = useGlobalcontext();

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
    <nav className="w-full">
      <ul className=" w-full">
        <li className=" w-full">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className={`font-light text-base leading-[26px] py-3 block w-full border-l-8  transition-all pl-14 xlr:py-5 xlr:tracking-wide  hover:bg-hover hover:border-yellow-400 hover:text-white cursor-pointer ${
              heroActive
                ? " bg-active border-yellow-400 text-text_dm"
                : "bg-transparent border-transparent text-text_wm dark:text-text_dm"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li className=" w-full">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={200}
            className={`font-light text-base leading-[26px] py-3 block w-full border-l-8  transition-all pl-14 xlr:py-5 xlr:tracking-wide  hover:bg-hover hover:border-yellow-400 hover:text-white cursor-pointer ${
              aboutActive
                ? " bg-active border-yellow-400 text-text_dm"
                : "bg-transparent border-transparent text-text_wm dark:text-text_dm"
            }`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
        </li>
        <li className=" w-full">
          <Link
            to="services"
            smooth={true}
            duration={500}
            className={`font-light text-base leading-[26px] py-3 block w-full border-l-8  transition-all pl-14 xlr:py-5 xlr:tracking-wide  hover:bg-hover hover:border-yellow-400 hover:text-white cursor-pointer ${
              serviceActive
                ? " bg-active border-yellow-400 text-text_dm"
                : "bg-transparent border-transparent text-text_wm dark:text-text_dm"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
        </li>
        <li className=" w-full">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={`font-light text-base leading-[26px] py-3 block w-full border-l-8  transition-all pl-14 xlr:py-5 xlr:tracking-wide  hover:bg-hover hover:border-yellow-400 hover:text-white cursor-pointer ${
              projectsActive
                ? " bg-active border-yellow-400 text-text_dm"
                : "bg-transparent border-transparent text-text_wm dark:text-text_dm"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li className=" w-full">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`font-light text-base leading-[26px] py-3 block w-full border-l-8  transition-all pl-14 xlr:py-5 xlr:tracking-wide  hover:bg-hover hover:border-yellow-400 hover:text-white cursor-pointer ${
              contactActive
                ? " bg-active border-yellow-400 text-text_dm"
                : "bg-transparent border-transparent text-text_wm dark:text-text_dm"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavForHomePage;
