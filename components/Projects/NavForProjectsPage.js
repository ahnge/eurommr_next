import { useGlobalcontext } from "../context";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NavForProjectsPage = ({ data }) => {
  const { setIsOpen } = useGlobalcontext();

  const router = useRouter();

  useEffect(() => {
    console.log(router.query.slogan);
  }, []);

  return (
    <nav className="w-full">
      <ul className=" w-full">
        {data.map((obj) => {
          return (
            <li className=" w-full" key={obj.id}>
              <Link
                href={`/projects/${obj.attributes.slogan}`}
                onClick={() => setIsOpen(false)}
              >
                <div
                  className={`font-light text-base leading-[26px] py-3 block w-full border-l-8  transition-all pl-14 xlr:py-5 xlr:tracking-wide  hover:bg-hover hover:border-yellow-400 hover:text-white hover:dark:text-yellow-400 cursor-pointer text-text_wm dark:text-text_dm ${
                    router.query.slogan === obj.attributes.slogan
                      ? "bg-active border-yellow-400 text-text_dm"
                      : "bg-transparent border-transparent text-text_wm dark:text-text_dm"
                  }`}
                >
                  {obj.attributes.title}
                </div>
              </Link>
            </li>
          );
        })}
        <li className=" w-full">
          <Link href="/#projects" onClick={() => setIsOpen(false)}>
            <div className="font-light text-base leading-[26px] py-3 block w-full border-l-8  transition-all pl-14 xlr:py-5 xlr:tracking-wide  hover:bg-hover hover:border-yellow-400 hover:text-white hover:dark:text-yellow-400 cursor-pointer bg-transparent border-transparent text-text_wm dark:text-text_dm">
              Back Home
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavForProjectsPage;
