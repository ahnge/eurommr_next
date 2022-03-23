import Image from "next/image";
import buildUrl from "cloudinary-build-url";

const Projects = ({ data }) => {
  const { id } = data.data[0];
  const { title, description, video, photograph, multiMedia } =
    data.data[0].attributes;
  const renderImgsArr = multiMedia.data;
  const photographsArr = photograph.data;

  //getting the data I want for render images
  const filteredRenderImgsArr = renderImgsArr.map((ele) => {
    const { width, height, hash, url } = ele.attributes;
    return { width, height, hash, url };
  });

  const renderImgsUrl = filteredRenderImgsArr.map((obj) => {
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

  // getting the data I want for pohotographs
  const filteredPhotoraphsArr = photographsArr.map((obj) => {
    const { width, height, hash, url } = obj.attributes;
    return { width, height, hash, url };
  });

  const photographArr = filteredPhotoraphsArr.map((obj) => {
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
            <h2 className=" text-center font-semibold text-lg leading-6 text-text_wm dark:text-text_dm md:text-left lgr:text-xl">
              {title}
            </h2>
            <p className=" text-center font-light text-sm sm:text-base mt-4 md:text-left max-w-sm md:self-start lgr:text-lg text-text_wm dark:text-text_dm">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-9 md:mt-20">
          <h2 className="font-bold text-yellow-500 text-lg dark:text-eu_yel">
            Render Images
          </h2>
          <div className="columns-2 space-y-3 md:columns-3 mt-5 md:gap-5 md:space-y-5 lgr:columns-4 gap-3 grid-flow-row">
            {renderImgsUrl.map((obj, index) => {
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

        <div className="mt-9 md:mt-20">
          <h2 className="font-bold text-yellow-500 text-lg dark:text-eu_yel">
            Photographs
          </h2>
          <div className="columns-2 space-y-3 md:columns-3 mt-5 md:gap-5 md:space-y-5 lgr:columns-4 gap-3 grid-flow-row">
            {photographArr.map((obj, index) => {
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
      </div>
    </>
  );
};
export default Projects;
