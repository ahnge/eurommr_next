import DL from "../../components/Home/DL";
import Nav from "../../components/Nav";
import buildUrl from "cloudinary-build-url";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const index = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, []);

  const { title, slogan } = data.data[0].attributes;
  const Arr = data.data[0].attributes.project_photos.data;

  const filteredArr = Arr.map((ele) => {
    const { width, height, hash } = ele.attributes;
    return { width, height, hash };
  });

  const myUrls = filteredArr.map((obj) => {
    const src = buildUrl(`${obj.hash}`, {
      cloud: {
        cloudName: "ddwguc7vu",
      },
    });

    const blurSrc = buildUrl(`${obj.hash}`, {
      cloud: {
        cloudName: "ddwguc7vu",
      },
      transformations: {
        quality: 1,
      },
    });

    return { src, blurSrc, width: obj.width, height: obj.height };
  });

  return (
    <div className=" bg-lb2 dark:bg-db2 min-h-screen w-full lg:pl-64 xlr:pl-[400px] py-10 transition">
      <Nav />
      <DL />
      <h2 className=" text-text_wm dark:text-text_dm text-lg px-10">{title}</h2>
      <div className="grid grid-cols-1 px-6 mt-6 gap-5 sm:grid-cols-2">
        {myUrls.map((obj, index) => {
          const { src, blurSrc, width, height } = obj;
          return (
            <div
              key={index}
              className="rounded-lg shadow-lg h-52 overflow-hidden hover:scale-105 transition relative"
            >
              <Image
                alt="Imgs"
                src={src}
                layout="fill"
                placeholder="blur"
                blurDataURL={blurSrc}
                objectFit="cover"
                objectPosition="center top"
              />
            </div>
          );
        })}
      </div>
      <div className="px-10 flex justify-end mt-10">
        <Link href={"/"}>
          <a className="px-6 py-2 bg-yellow-400 rounded-md capitalize shadow-md text-black border-2 border-yellow-400 hover:border-black dark:border-yellow-400 hover:bg-db1 hover:text-white transition">
            Back
          </a>
        </Link>
      </div>
    </div>
  );
};

export default index;

export const getStaticPaths = async () => {
  const res = await fetch("https://strapi-eurommr.herokuapp.com/api/services");
  const resObj = await res.json();

  const slogans = resObj.data.map((bg) => {
    return {
      params: { slogan: bg.attributes.slogan },
    };
  });

  return {
    paths: slogans,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const slo = context.params.slogan;

  const res = await fetch(
    `https://strapi-eurommr.herokuapp.com/api/services?filters[slogan][$eq]=${slo}&fields=title,slogan&populate=project_photos`
  );
  const resObj = await res.json();

  return {
    props: {
      data: resObj,
    },
  };
};
