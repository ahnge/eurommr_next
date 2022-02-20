import Image from "next/image";
import buildUrl from "cloudinary-build-url";
import Link from "next/link";
import { useState } from "react";

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
        className="mx-auto cursor-pointer"
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
            isHover ? "w-full" : "w-1/2"
          }`}
        ></div>
        <h2 className=" font-medium text-sm text-text_wm dark:text-text_dm text-center mt-2 sm:text-lg  xlr:text-3xl">
          {title}
        </h2>
        <p className=" font-normal text-[0.8125rem] text-text_wm tracking-widest dark:text-text_dm text-center mt-1 sm:text-base xlr:text-xl">
          {location}
        </p>
      </div>
    </Link>
  );
};

export default SingleProject;
