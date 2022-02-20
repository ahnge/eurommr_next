import Image from "next/image";

const ProfileImg = ({ src, blurSrc, name, role }) => {
  return (
    <div className="rounded-lg bg-white dark:bg-black  overflow-hidden shadow-lg hover:scale-105 transition">
      <div className="relative h-[150px] sm:h-[300px] ">
        <Image
          alt="profile pic"
          src={src}
          layout="fill"
          placeholder="blur"
          blurDataURL={blurSrc}
          objectFit="cover"
          objectPosition="center top"
          sizes="50vw"
        ></Image>
      </div>
      <div className=" py-4 px-2 relative sm:px-6">
        <h5 className=" font-semibold capitalize tracking-normal text-sm sm:text-lg lgr:text-xl xlr:text-2xl mb-2 text-left text-text_wm dark:text-text_dm">
          {name}
        </h5>
        <p className=" capitalize text-xs sm:text-sm xlr:text-base text-left text-yellow-600 dark:text-yellow-400 font-normal tracking-wider">
          {role}
        </p>
      </div>
    </div>
  );
};

export default ProfileImg;
