import Image from "next/image";
import buildUrl from "cloudinary-build-url";
import Link from "next/link";
import { useState } from "react";
import { DownArrow, rightArrow, RIghtDoubleArrow } from "../icons/icons";

const SingleProject = ({ slogan, title, location, url, hash }) => {
  const [isHover, setIsHover] = useState(false);

  const blurUrl = buildUrl(hash, {
    cloud: {
      cloudName: "ddwguc7vu",
    },
    transformations: {
      quality: 1,
    },
  });

  return (
    <Link href={`/projects/${slogan}`} passHref>
      <div
        className="mx-auto cursor-pointer relative"
        onMouseEnter={() => setIsHover((s) => !s)}
        onMouseLeave={() => setIsHover((s) => !s)}
      >
        <Image
          alt="project img"
          width={346}
          height={288}
          src={url}
          placeholder="blur"
          blurDataURL={blurUrl}
        />
        <div
          className={`h-1 bg-yellow-400 mx-auto mt-2 rounded-lg transition-all ${
            isHover ? "w-full" : "w-2/4"
          }`}
        ></div>
        <div className="flex justify-between items-center px-5 mt-2">
          <div>
            <h2 className=" font-semibold text-base text-text_wm dark:text-text_dm mt-2 sm:text-lg  xlr:text-xl">
              {title}
            </h2>
            <p className=" font-normal text-xs text-text_wm tracking-widest dark:text-text_dm mt-1 sm:text-base">
              {location}
            </p>
          </div>
          <RIghtDoubleArrow />
        </div>
      </div>
    </Link>
  );
};

export default SingleProject;
