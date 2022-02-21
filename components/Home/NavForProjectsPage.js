import { useGlobalcontext } from "../context";
import Link from "next/link";

const NavForProjectsPage = () => {
  const { setIsOpen } = useGlobalcontext();

  return (
    <nav className="w-full">
      <ul className=" w-full">
        <li className=" w-full">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <a className="font-light text-base leading-[26px] py-3 block w-full border-l-8  transition-all pl-14 xlr:py-5 xlr:tracking-wide  hover:bg-hover hover:border-yellow-400 hover:text-white hover:dark:text-yellow-400 cursor-pointer bg-transparent border-transparent text-text_wm dark:text-text_dm">
              Home
            </a>
          </Link>
        </li>
        <li className=" w-full">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <a className="font-light text-base leading-[26px] py-3 block w-full border-l-8  transition-all pl-14 xlr:py-5 xlr:tracking-wide  hover:bg-hover hover:border-yellow-400 hover:text-white hover:dark:text-yellow-400 cursor-pointer bg-transparent border-transparent text-text_wm dark:text-text_dm">
              About Us
            </a>
          </Link>
        </li>
        <li className=" w-full">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <a className="font-light text-base leading-[26px] py-3 block w-full border-l-8  transition-all pl-14 xlr:py-5 xlr:tracking-wide  hover:bg-hover hover:border-yellow-400 hover:text-white hover:dark:text-yellow-400 cursor-pointer bg-transparent border-transparent text-text_wm dark:text-text_dm">
              Services
            </a>
          </Link>
        </li>
        <li className=" w-full">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <a className="font-light text-base leading-[26px] py-3 block w-full border-l-8  transition-all pl-14 xlr:py-5 xlr:tracking-wide  hover:bg-hover hover:border-yellow-400 hover:text-white hover:dark:text-yellow-400 cursor-pointer bg-transparent border-transparent text-text_wm dark:text-text_dm">
              Contact Us
            </a>
          </Link>
        </li>
        <li className=" w-full">
          <Link href="/#hero" onClick={() => setIsOpen(false)}>
            <a className="font-light text-base leading-[26px] py-3 block w-full border-l-8  transition-all pl-14 xlr:py-5 xlr:tracking-wide  hover:bg-hover hover:border-yellow-400 hover:text-white hover:dark:text-yellow-400 cursor-pointer bg-transparent border-transparent text-text_wm dark:text-text_dm">
              Home
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavForProjectsPage;
