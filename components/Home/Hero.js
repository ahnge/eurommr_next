import { DownArrow } from "../icons/icons";
import Image from "next/image";
import buildUrl from "cloudinary-build-url";

const Hero = () => {
  const src = buildUrl("herosection_dxki02", {
    cloud: {
      cloudName: "ddwguc7vu",
    },
  });

  return (
    <div className="w-full h-screen border-b-[24px] border-yellow-400 relative">
      <Image
        src={src}
        alt="background pic"
        layout="fill"
        priority={true}
        objectFit="cover"
        objectPosition="center top"
      ></Image>
      <div className="relative z-10">
        <div className="pl-8 pt-48 sm:pl-12 lg:pl-32 text-white dark:text-text_wm transition z-10">
          <h1 className=" font-bold text-[1.95rem] leading-[50px] lgr:leading-[79px] sm:text-5xl sm:leading-[60px] sm:mb-4 lgr:text-[3.815rem] xlr:text-[5.96rem] xlr:leading-[110px] ">
            Design for your <br />
            Future.
          </h1>
          <DownArrow />
        </div>
      </div>
    </div>
  );
};

export default Hero;
