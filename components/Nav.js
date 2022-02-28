import { Facebook, LeftArrow, Logo, RightArrow } from "./icons/icons";
import { useGlobalcontext } from "./context";
import Link from "react-scroll/modules/components/Link";
import { useRouter } from "next/router";
import NavForHomePage from "./Home/NavForHomePage";
import NavForProjectsPage from "./Projects/NavForProjectsPage";

const Nav = ({ data }) => {
  const { isOpen, setIsOpen } = useGlobalcontext();
  const router = useRouter();

  return (
    <div
      className={`w-[256px] py-16 fixed bg-white/90 dark:bg-db2/95 backdrop-blur-sm h-screen top-0 transition-all rounded-tr-3xl flex flex-col items-center ${
        isOpen ? "left-0" : "-left-[256px]"
      } lg:left-0 lg:rounded-none lg:bg-white shadow-xl z-20 border-b-[24px] border-eu_yel`}
    >
      <div className="flex flex-col justify-between items-center h-full w-full">
        <div className=" w-[133px] xlr:w-[150px] h-auto">
          <Logo />
        </div>

        <div className=" w-1/2 h-[2px] bg-eu_yel mx-auto rounded-sm"></div>

        {router.route === "/" ? (
          <NavForHomePage />
        ) : (
          <NavForProjectsPage data={data} />
        )}

        <div className=" w-1/2 h-[2px] bg-eu_yel mx-auto rounded-sm"></div>

        <div className="flex flex-col items-center space-y-2">
          <Link to="/" className="cursor-pointer">
            <a className="flex space-x-1 items-center text-text_wm dark:text-text_dm  hover:text-yellow-600  font-normal transition dark:hover:text-yellow-400">
              <Facebook />
              <p className=" text-sm tracking-normal">Find us on facebook.</p>
            </a>
          </Link>
        </div>
      </div>

      <button
        className="absolute -right-7 bottom-32 py-5 px-1 text-center rounded-tr-lg rounded-br-lg bg-hover_l/95 backdrop-blur-sm lg:hidden bg-active/80 dark:bg-black"
        onClick={() => setIsOpen((a) => !a)}
      >
        {isOpen ? <LeftArrow /> : <RightArrow />}
      </button>
    </div>
  );
};

export default Nav;
