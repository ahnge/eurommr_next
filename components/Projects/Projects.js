import Image from "next/image";
import buildUrl from "cloudinary-build-url";

const Projects = ({ data }) => {
  const { id } = data.data[0];
  const { title, location, description, video } = data.data[0].attributes;
  const Arr = data.data[0].attributes.multiMedia.data;

  const filteredArr = Arr.map((ele) => {
    const { width, height, hash, url } = ele.attributes;
    return { width, height, hash, url };
  });

  const myUrls = filteredArr.map((obj) => {
    const blurSrc = buildUrl(`${obj.hash}`, {
      cloud: {
        cloudName: "ddwguc7vu",
      },
      transformations: {
        quality: 1,
      },
    });

    return { src: obj.url, blurSrc, width: obj.width, height: obj.height };
  });

  return (
    <>
      <div className=" px-6 mt-6 sm:px-10 md:mt-16 xl:px-16">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="flex-1 md:self-end">
            <p className=" font-semibold text-eu_yel text-5xl mb-5 md:hidden">
              {id.length > 1 ? `${id}` : `0${id}`}
            </p>
            {video.data && (
              <video
                src={video.data.attributes.url}
                controls
                className=" rounded-md mx-auto max-w-sm w-full"
              ></video>
            )}
          </div>

          <div className="flex-1 flex flex-col mt-5 px-5 md:mt-0 mx-auto">
            <p className=" hidden font-semibold text-eu_yel text-5xl sm:text-6xl mb-5 md:block text-left">
              {id.length > 1 ? `${id}` : `0${id}`}
            </p>
            <h2 className=" text-center font-semibold text-base sm:text-lg leading-6 text-text_wm dark:text-text_dm md:text-left lgr:text-xl">
              {title}
            </h2>
            <p className=" text-center font-light text-sm sm:text-base mt-4 md:text-left max-w-sm md:self-start lgr:text-lg text-text_wm dark:text-text_dm">
              {description}
            </p>
          </div>
        </div>

        <div className="columns-2 space-y-3 md:columns-3 md:gap-5 md:space-y-5 lgr:columns-4 gap-3 mt-9 md:mt-20 grid-flow-row">
          {myUrls.map((obj, index) => {
            const { src, blurSrc, width, height } = obj;
            return (
              <a
                href={src}
                target="_blank"
                key={index}
                className="block break-inside-avoid hover:scale-95 transition"
              >
                <Image
                  alt="Imgs"
                  src={src}
                  width={width}
                  height={height}
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL={blurSrc}
                  className=" rounded-md"
                />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Projects;
