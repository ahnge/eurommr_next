import DL from "../../components/Home/DL";
import Nav from "../../components/Nav";
import Link from "next/link";
import Projects from "../../components/Projects/Projects";

export const getStaticPaths = async () => {
  const res = await fetch("https://strapi-eurommr.herokuapp.com/api/services");
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
    `https://strapi-eurommr.herokuapp.com/api/services?filters[slogan][$eq]=${slo}&fields=title,slogan&populate=project_photos`
  );
  const resObj = await res.json();

  return {
    props: {
      data: resObj,
    },
  };
};

const ProjectPage = ({ data }) => {
  return (
    <div className=" bg-lb2 dark:bg-db2 min-h-screen w-full lg:pl-64 xlr:pl-[400px] py-10 transition">
      <Nav />
      <DL />
      <Projects data={data} />
      <div className="px-10 flex justify-end mt-10">
        <Link href={"/"}>
          <a className="px-6 py-2 bg-yellow-400 rounded-md capitalize shadow-md text-black border-2 border-yellow-400 hover:border-black dark:border-yellow-400 hover:bg-db1 hover:text-white transition">
            Back
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
