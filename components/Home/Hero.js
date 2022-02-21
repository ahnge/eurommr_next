import { DownArrow } from "../icons/icons";
import Image from "next/image";
import buildUrl from "cloudinary-build-url";
import { useGlobalcontext } from "../context";
import Link from "react-scroll/modules/components/Link";

const Hero = () => {
  const { heroRef } = useGlobalcontext();

  const src = buildUrl("hero-bg_swza65", {
    cloud: {
      cloudName: "ddwguc7vu",
    },
  });

  return (
    <div
      className="w-full h-screen border-b-[24px] border-yellow-400 relative"
      ref={heroRef}
      id="hero"
    >
      <Image
        src={src}
        alt="background pic"
        layout="fill"
        priority={true}
        objectFit="cover"
        objectPosition="center top"
      ></Image>
      <div className="relative z-10">
        <div className="px-8 md:px-14 pt-64 sm:pl-12 lg:pl-32 text-text_dm dark:text-text_wm transition z-10">
          <h1 className=" font-bold text-[1.95rem] leading-[50px] lgr:leading-[79px] sm:text-5xl sm:leading-[60px] sm:mb-4 lgr:text-[3.815rem] xlr:text-[4.96rem] xlr:leading-[110px] tracking-tight">
            Design for your <br />
            Future.
          </h1>
          <Link
            to="welcome"
            smooth={true}
            duration={500}
            className="w-fit inline-block"
          >
            <DownArrow />
          </Link>
        </div>
      </div>
      <div className=" absolute top-0 left-0 bottom-0 right-0 bg-black/20 dark:bg-white/0"></div>
    </div>
  );
};

export default Hero;
