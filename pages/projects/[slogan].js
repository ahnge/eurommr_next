import DL from "../../components/Home/DL";
import Nav from "../../components/Nav";
import Link from "next/link";
import Projects from "../../components/Projects/Projects";
import { useGlobalcontext } from "../../components/context";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://strapi-eurommr.herokuapp.com/api/projects");
  const resObj = await res.json();

  const slogans = resObj.data.map((bg) => {
    return {
      params: { slogan: bg.attributes.slogan },
    };
  });

  return {
    paths: slogans,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slo = context.params.slogan;

  const res = await fetch(
    `https://strapi-eurommr.herokuapp.com/api/projects?filters[slogan][$eq]=${slo}&populate=multiMedia,video,photograph`
  );
  const resObj = await res.json();

  const secondRes = await fetch(
    "https://strapi-eurommr.herokuapp.com/api/projects"
  );
  const secondResObj = await secondRes.json();

  return {
    props: {
      data: resObj,
      secondData: secondResObj.data,
    },
  };
};

const ProjectPage = ({ data, secondData }) => {
  const { setIsOpen } = useGlobalcontext();

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Head>
        <title>Eurommr | Projects</title>
        <meta
          name="description"
          content="Here at EUROMMR, We provides Architecture Design and Construction serveices mainly for residential market. We offer a wide range of expert home innovation and building services across Taunggyi, Mandalay and Yangon. If you are planning a construction project or would like to know more about us, please get in touch."
        />
        <meta
          name="keywords"
          content="Eurommr, Construction, Architecture Firm Myanmar, Architecture, Construction Myanmar "
        />
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <div
        className=" backdrop-blur-xl min-h-screen w-full lg:pl-64 py-10 transition bg-lb1 dark:bg-db2"
        onClick={handleClick}
      >
        <Projects data={data} />
        <div className="px-10 flex justify-end mt-10">
          <Link href={"/#projects"}>
            <a className="px-6 py-2 bg-yellow-400 rounded-md capitalize shadow-md text-black border-2 border-yellow-400 hover:border-black dark:border-yellow-400 hover:bg-db1 hover:text-white transition">
              Back
            </a>
          </Link>
        </div>
      </div>
      <DL />
      <Nav data={secondData} />
    </>
  );
};

export default ProjectPage;
