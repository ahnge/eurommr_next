import { useGlobalcontext } from "../context";
import SingleProject from "./SingleProject";
import { useInView } from "react-intersection-observer";

const Projects = ({ data }) => {
  const { projectRef } = useGlobalcontext();

  const { ref: projectTitleRef, inView: projectTitleInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      className=" bg-lb2 dark:bg-db2 py-[70px] lgr:pt-24 transition"
      ref={projectRef}
      id="projects"
    >
      <h2
        className={`font-semibold text-2xl tracking-tight text-text_wm dark:text-text_dm text-center sm:text-[1.75rem] lgr:text-[2.44rem] transition-all duration-1000 ${
          projectTitleInView
            ? " opacity-100 translate-x-0"
            : "opacity-0 -translate-x-3"
        }`}
        ref={projectTitleRef}
      >
        Our{" "}
        <span className=" font-medium text-lg uppercase tracking-wider sm:text-[1.375rem] lgr:text-[1.95rem]">
          Projects
        </span>
        <span className=" bg-yellow-600 dark:bg-yellow-400 rounded-full w-2 ml-1 h-2 inline-block"></span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row px-8 sm:px-10 gap-10 mt-[70px] md:gap-14 md:px-14 lgr:grid-cols-4 xlr:gap-10 xlr:px-32">
        {data.map((obj) => {
          const { id } = obj;
          const { title, location, slogan } = obj.attributes;
          const { url, hash, width, height } =
            obj.attributes.mainMedia.data.attributes;
          return (
            <SingleProject
              key={id}
              slogan={slogan}
              title={title}
              location={location}
              url={url}
              hash={hash}
              width={width}
              height={height}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
