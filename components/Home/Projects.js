import { useGlobalcontext } from "../context";
import SingleProject from "./SingleProject";

const Projects = ({ data }) => {
  const { projectRef } = useGlobalcontext();

  return (
    <div
      className=" bg-lb2 dark:bg-db2 py-[70px] lgr:pt-24 transition"
      ref={projectRef}
    >
      <h2 className=" font-semibold text-2xl tracking-tight text-text_wm dark:text-text_dm text-center sm:text-[1.75rem] lgr:text-[2.44rem]">
        Our{" "}
        <span className=" font-medium text-lg uppercase tracking-wider sm:text-[1.375rem] lgr:text-[1.95rem]">
          Projects
        </span>
        <span className=" bg-yellow-600 dark:bg-yellow-400 rounded-full w-2 ml-1 h-2 inline-block"></span>
      </h2>
      <div className="grid grid-cols-1 grid-flow-row px-8 gap-5 mt-[70px] xl:grid-cols-4 md:gap-14 md:px-14">
        {data.map((obj) => {
          const { id } = obj;
          const { title, location, slogan } = obj.attributes;
          const { url, hash } = obj.attributes.service_media.data.attributes;
          return (
            <SingleProject
              key={id}
              slogan={slogan}
              title={title}
              location={location}
              url={url}
              hash={hash}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
