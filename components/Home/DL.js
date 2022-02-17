import { useEffect } from "react";
import { useGlobalcontext } from "../context";
import { Sun, Moon } from "../icons/icons";

const DL = () => {
  const { parentTag, dkm, setDkm } = useGlobalcontext();

  useEffect(() => {
    if (parentTag) {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        parentTag.classList.add("dark");
        console.log("darkreder");
        setDkm(true);
      } else {
        parentTag.classList.remove("dark");
        console.log("lightreder");
        setDkm(false);
      }
    }
  }, [parentTag]);

  const handleDarkMood = () => {
    if (parentTag.classList.contains("dark")) {
      parentTag.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDkm(false);
    } else {
      parentTag.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDkm(true);
    }
  };

  return (
    <div
      className={`fixed p-3 rounded-full top-9 right-9  cursor-pointer z-20 shadow-xl transition bg-black dark:bg-white`}
      onClick={handleDarkMood}
    >
      {dkm ? <Sun /> : <Moon />}
    </div>
  );
};

export default DL;
