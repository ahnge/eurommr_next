import Image from "next/image";
import { useState } from "react";
import { More } from "../icons/icons";
import { useInView } from "react-intersection-observer";

const SingleService = ({ num, title, body, url, blurUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { ref: numOneRef, inView: numOneInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={numOneRef}>
      <p
        className={`font-semibold text-5xl sm:text-[3.25rem] lgr:text-[3.81rem] text-eu_yel mb-2 lg:mb-8 transition-all duration-[1000ms] ${
          num === 0
            ? ""
            : num === 1
            ? "delay-300"
            : num === 2
            ? " delay-[600ms]"
            : "delay-[900ms]"
        } ${
          numOneInView
            ? " opacity-100 translate-x-0"
            : "opacity-0 -translate-x-3"
        } `}
      >
        0{num + 1}
      </p>
      <div className=" rounded-lg bg-white dark:bg-black shadow-lg overflow-hidden transition">
        <Image
          alt={title}
          src={url}
          placeholder="blur"
          blurDataURL={blurUrl}
          width={640}
          height={427}
        />

        <p
          className={` px-4 py-3 border-b-2 text-sm lg:text-base xlr:text-lg text-text_wm dark:text-text_dm ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {body}.
        </p>

        <div className="px-4 py-4 flex justify-between items-center">
          <h3 className=" font-medium text-sm sm:text-base xlr:text-xl text-text_wm dark:text-text_dm">
            {title}
          </h3>
          <div
            className={`rounded-full bg-db1 p-1 dark:bg-lb1 dark:text-black text-white cursor-pointer hover:bg-eu_yel dark:hover:bg-eu_yel dark:hover:text-white transition-all ${
              isOpen ? "rotate-180" : "rotate-0"
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
