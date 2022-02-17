import Image from "next/image";
import { useState } from "react";
import { More } from "../icons/icons";

const SingleService = ({ num, title, body, url, blurUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <p className="font-semibold text-5xl sm:text-[3.25rem] lgr:text-[3.81rem] text-yellow-400 mb-2 lg:mb-8">
        0{num + 1}
      </p>
      <div className=" rounded-lg bg-white dark:bg-db2 shadow-lg overflow-hidden transition">
        <div className="relative h-36 xl:h-40 lgr:h-56 xlr:h-80">
          <Image
            alt="profile pic"
            src={url}
            layout="fill"
            placeholder="blur"
            blurDataURL={blurUrl}
            objectFit="cover"
            objectPosition="center top"
          />
        </div>

        <p
          className={` px-4 py-3 border-b-2 text-sm lg:text-base xlr:text-lg text-text_wm dark:text-text_dm ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {body}.
        </p>

        <div className="px-4 py-4 flex justify-between items-center">
          <h3 className=" font-medium text-sm sm:text-lg xl:text-xl xlr:text-2xl text-text_wm dark:text-text_dm">
            {title}
          </h3>
          <div
            className={`rounded-full bg-db1 p-1 dark:bg-lb1 dark:text-black text-white cursor-pointer hover:bg-yellow-400 dark:hover:bg-yellow-400 transition dark:hover:text-white ${
              isOpen ? " rotate-180" : ""
            }`}
            onClick={() => setIsOpen((s) => !s)}
          >
            <More />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
