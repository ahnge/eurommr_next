const Projects = ({ data }) => {
  const { title } = data.data[0].attributes;
  const Arr = data.data[0].attributes.project_photos.data;

  const filteredArr = Arr.map((ele) => {
    const { width, height, hash } = ele.attributes;
    return { width, height, hash };
  });

  const myUrls = filteredArr.map((obj) => {
    const src = buildUrl(`${obj.hash}`, {
      cloud: {
        cloudName: "ddwguc7vu",
      },
    });

    const blurSrc = buildUrl(`${obj.hash}`, {
      cloud: {
        cloudName: "ddwguc7vu",
      },
      transformations: {
        quality: 1,
      },
    });

    return { src, blurSrc, width: obj.width, height: obj.height };
  });
  return (
    <>
      <h2 className=" text-text_wm dark:text-text_dm text-lg px-10">{title}</h2>
      <div className="grid grid-cols-1 px-6 mt-6 gap-5 sm:grid-cols-2">
        {myUrls.map((obj, index) => {
          const { src, blurSrc, width, height } = obj;
          return (
            <div
              key={index}
              className="rounded-lg shadow-lg h-52 overflow-hidden hover:scale-105 transition relative"
            >
              <Image
                alt="Imgs"
                src={src}
                layout="fill"
                placeholder="blur"
                blurDataURL={blurSrc}
                objectFit="cover"
                objectPosition="center top"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
