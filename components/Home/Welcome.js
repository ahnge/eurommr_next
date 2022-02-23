import { useInView } from "react-intersection-observer";

const Welcome = () => {
  let options = {
    threshold: 1,
    triggerOnce: true,
  };
  const { ref: welcomeRef, inView: welcomeInView } = useInView(options);
  const { ref: titleRef, inView: titleInView } = useInView(options);
  const { ref: paraRef, inView: paraInView } = useInView(options);

  return (
    <div
      className="bg-lb1 dark:bg-db1 py-[70px] sm:pb-[144px] lg:pb-[70px] px-8 sm:px-10 md:px-14 transition"
      id="welcome"
    >
      <h3
        className={`font-medium text-2xl leading-[50px] text-text_wm dark:text-text_dm text-center tracking-wide sm:text-[1.75rem] lgr:text-[1.95rem] transition-all duration-[1000ms] ${
          welcomeInView
            ? " opacity-100 translate-x-0"
            : "opacity-0 -translate-x-3"
        }`}
        ref={welcomeRef}
      >
        Welcome to
      </h3>
      <h1
        className={`font-bold text-4xl sm:text-[2.5rem] lgr:text-5xl leading-[60px] text-text_wm dark:text-text_dm text-center xlr:text-[3.05rem] mt-4 transition-all duration-[1000ms] ${
          titleInView
            ? " opacity-100 translate-x-0"
            : "opacity-0 -translate-x-3"
        }`}
        ref={titleRef}
      >
        EUROMMR
        <span className=" bg-yellow-500 rounded-full w-2 ml-1 h-2 inline-block"></span>
      </h1>
      <p
        className={`font-normal mt-9 lgr:mt-10 text-sm leading-6 text-left text-text_wm dark:text-text_dm tracking-wider sm:text-base lg:text-center max-w-5xl mx-auto transition-all duration-1000 ${
          paraInView ? " opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
        }`}
        ref={paraRef}
      >
        Here at EUROMMR, We provides Architecture Design and Construction
        serveices mainly for residential market. We offer a wide range of expert
        home innovation and building services across{" "}
        <span className=" text-yellow-600 dark:text-yellow-400">Taunggyi</span>,
        <span className=" text-yellow-600 dark:text-yellow-400"> Mandalay</span>{" "}
        and{" "}
        <span className=" text-yellow-600 dark:text-yellow-400">Yangon</span>.
        If you are planning a construction project or would like to know more
        about us, please{" "}
        <a href="#welcome" className=" text-yellow-600 dark:text-yellow-400">
          get in touch
        </a>
        .
      </p>
    </div>
  );
};

export default Welcome;
