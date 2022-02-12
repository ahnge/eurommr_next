import { DownArrow } from "../icons/icons";

const Hero = () => {
  return (
    <div className="w-full pt-[270px] sm:pt-[190px] h-screen bg-hero-section bg-cover border-b-[24px] border-yellow-400">
      <div className="pl-8 sm:pl-12 lg:pl-32">
        <h1 className=" font-semibold text-3xl leading-[50px] lgr:leading-[61px] sm:text-5xl sm:leading-[60px] sm:mb-4 lgr:text-[3.815rem]">
          Design for your <br />
          Future.
        </h1>
        <DownArrow />
      </div>
    </div>
  );
};

export default Hero;
