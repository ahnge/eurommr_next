import buildUrl from "cloudinary-build-url";
import { useGlobalcontext } from "../context";
import SingleService from "./SingleService";

const Services = () => {
  const { serviceRef } = useGlobalcontext();

  const myArray = [
    {
      url: "archi_cyyby3",
      title: "Architecture Design",
      body: "We offer planing modern exterior or interior designs for your future home with realistic rendering",
    },
    {
      url: "construction_lvexfb",
      title: "Construction",
      body: "We offer planing modern exterior or interior designs for your future home with realistic rendering",
    },
    {
      url: "renovation_qry2wk",
      title: "Renovation",
      body: "We offer planing modern exterior or interior designs for your future home with realistic rendering",
    },
    {
      url: "furniture_jwmldj",
      title: "Custom Furnitures",
      body: "We offer planing modern exterior or interior designs for your future home with realistic rendering",
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

    return { src, blurSrc, title: ele.title, body: ele.body };
  });

  return (
    <div
      className=" bg-lb1 dark:bg-db1 py-[70px] lgr:pt-24 transition"
      ref={serviceRef}
      id="services"
    >
      <h2 className=" font-semibold text-2xl tracking-tight text-text_wm dark:text-text_dm text-center sm:text-[1.75rem] lgr:text-[2.44rem]">
        Services{" "}
        <span className=" font-medium text-lg uppercase tracking-wider sm:text-[1.375rem] lgr:text-[1.95rem]">
          we offer
        </span>
        <span className=" bg-yellow-600 dark:bg-yellow-400 rounded-full w-2 ml-1 h-2 inline-block"></span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5 gap-5 mt-[70px] px-8 sm:gap-10 sm:px-10 md:gap-14 md:px-14 xlr:gap-10 xlr:px-32">
        {myUrls.map((ele, index) => {
          return (
            <SingleService
              key={index}
              url={ele.src}
              blurUrl={ele.blurSrc}
              title={ele.title}
              body={ele.body}
              num={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
