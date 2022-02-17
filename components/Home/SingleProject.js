import Image from "next/image";
import buildUrl from "cloudinary-build-url";
import Link from "next/link";

const SingleProject = ({ id, title, location, url, hash }) => {
  const blurUrl = buildUrl(hash, {
    cloud: {
      cloudName: "ddwguc7vu",
    },
    transformations: {
      quality: 1,
    },
  });

  return (
    <Link href={`/${id}`}>
      <div className="mx-auto">
        <Image
          width={346}
          height={288}
          src={url}
          placeholder="blur"
          blurDataURL={blurUrl}
        />
        <div className="w-1/2 h-1 bg-yellow-400 mx-auto mt-2 rounded-lg"></div>
        <h2 className=" font-medium text-sm text-text_wm dark:text-text_dm text-center mt-2 sm:text-lg xl:text-xl xlr:text-3xl">
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
