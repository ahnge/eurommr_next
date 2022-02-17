import { buildUrl } from "cloudinary-build-url";
import ProfileImg from "./ProfileImg";

const About = () => {
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
    <div className=" bg-lb2 pt-14 pb-16 dark:bg-db2 transition">
      <div className=" pl-7 py-2 border-l-[12px] border-yellow-400">
        <h3 className=" font-semibold text-2xl sm:text-[1.75rem] lgr:text-[2.44rem] xlr:text-[2.44rem] leading-[40px] text-text_wm dark:text-text_dm transition">
          About Us
          <span className=" bg-yellow-600 dark:bg-yellow-400 rounded-full w-2 ml-1 h-2 inline-block"></span>
        </h3>
        <h3 className=" uppercase font-medium text-lg sm:text-[1.375rem] lgr:[1.94rem] leading-10 text-text_wm dark:text-text_dm tracking-tight transition">
          who we are
        </h3>
      </div>
      <div className="w-full grid grid-flow-row grid-cols-2 lg:grid-cols-4 mt-[53px] px-8 gap-5">
        {myUrls.map((urlObj, index) => {
          return (
            <ProfileImg
              key={index}
              src={urlObj.src}
              blurSrc={urlObj.blurSrc}
              name={urlObj.name}
              role={urlObj.role}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
