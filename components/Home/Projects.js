import SingleProject from "./SingleProject";

const Projects = ({ data }) => {
  return (
    <div className=" bg-lb2 dark:bg-db2 pt-14 pb-16 lgr:pt-24 transition">
      <h2 className=" font-semibold text-2xl tracking-tight text-text_wm dark:text-text_dm text-center sm:text-[1.75rem] lgr:text-[2.44rem]">
        Our{" "}
        <span className=" font-medium text-lg uppercase tracking-wider sm:text-[1.375rem] lgr:text-[1.95rem]">
          Projects
        </span>
        <span className=" bg-yellow-600 dark:bg-yellow-400 rounded-full w-2 ml-1 h-2 inline-block"></span>
      </h2>
      <div className="grid grid-cols-2 grid-flow-row px-8 gap-4 mt-8 sm:gap-6 xl:grid-cols-4 lg:mt-10 xl:mt-14 xlr:mt-16">
        {data.map((obj) => {
          const { id } = obj;
          const { title, location } = obj.attributes;
          const { url, hash } = obj.attributes.service_media.data.attributes;
          return (
            <SingleProject
              key={id}
              id={id}
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
