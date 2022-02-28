import { buildUrl } from "cloudinary-build-url";
import { useGlobalcontext } from "../context";
import ProfileImg from "./ProfileImg";
import Welcome from "./Welcome";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { aboutRef } = useGlobalcontext();

  let options = {
    threshold: 1,
    triggerOnce: true,
  };

  const { ref: aboutTitleRef, inView: aboutTitleInView } = useInView(options);
  const { ref: whoWeAreRef, inView: whoWeAreInView } = useInView(options);
  const { ref: aboutBoxRef, inView: aboutBoxInView } = useInView(options);

  const myArray = [
    {
      url: "temp_propfile_swnwih",
      name: "pyae phyoe naing",
      role: "architect",
    },
    {
      url: "girl_profile_ormwoh",
      name: "a girl",
      role: "project manager",
    },
    {
      url: "smiler_profile_xoh7x4",
      name: "hat guy",
      role: "architect",
    },
    {
      url: "hat_profile_an2bqb",
      name: "joker",
      role: "civil engineer",
    },
  ];

  const myUrls = myArray.map((ele) => {
    const src = buildUrl(`${ele.url}`, {
      cloud: {
        cloudName: "ddwguc7vu",
      },
    });

    const blurSrc = buildUrl(`${ele.url}`, {
      cloud: {
        cloudName: "ddwguc7vu",
      },
      transformations: {
        quality: 1,
      },
    });

    return { src, blurSrc, name: ele.name, role: ele.role };
  });

  return (
    <div ref={aboutRef} id="about">
      <Welcome />
      <div className=" bg-lb2 py-[70px] dark:bg-db2 transition">
        <div
          className={`pl-7 md:pl-12 py-2 border-l-[12px] border-eu_yel transition-all duration-1000 ${
            aboutBoxInView
              ? " opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3"
          }`}
          ref={aboutBoxRef}
        >
          <h3
            className={` font-semibold text-2xl sm:text-[1.75rem] lgr:text-[2.44rem] xlr:text-[2.44rem] leading-[40px] text-text_wm dark:text-text_dm transition-all duration-1000 delay-300 ${
              aboutTitleInView
                ? " opacity-100 translate-x-0"
                : "opacity-0 -translate-x-3"
            }`}
            ref={aboutTitleRef}
          >
            About Us
            <span className=" bg-yellow-600 dark:bg-eu_yel rounded-full w-2 ml-1 h-2 inline-block"></span>
          </h3>
          <h3
            className={` uppercase font-medium text-lg sm:text-[1.375rem] lgr:[1.94rem] leading-10 text-text_wm dark:text-text_dm tracking-tight transition-all duration-[1000ms] delay-500 ${
              whoWeAreInView
                ? " opacity-100 translate-x-0"
                : "opacity-0 -translate-x-3"
            }`}
            ref={whoWeAreRef}
          >
            who we are
          </h3>
        </div>
        <div className="w-full grid grid-flow-row grid-cols-2 xl:grid-cols-4 mt-[70px] px-8 gap-5 sm:gap-10 sm:px-10 md:gap-14 md:px-14 xl:gap-5 xlr:gap-10 xlr:px-32">
          {myUrls.map((urlObj, index) => {
            return (
              <ProfileImg
                key={index}
                src={urlObj.src}
                blurSrc={urlObj.blurSrc}
                name={urlObj.name}
                role={urlObj.role}
                id={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
