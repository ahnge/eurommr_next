import Hero from "../components/Home/Hero";
import Nav from "../components/Nav";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import DL from "../components/Home/DL";
import Projects from "../components/Home/Projects";
import Contact from "../components/Home/Contact";
import { useGlobalcontext } from "../components/context";
import Head from "next/head";

export default function Home({ data }) {
  const { setIsOpen } = useGlobalcontext();

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Head>
        <title>Eurommr | Home</title>
        <meta
          name="description"
          content="Here at EUROMMR, We provides Architecture Design and Construction serveices mainly for residential market. We offer a wide range of expert home innovation and building services across Taunggyi, Mandalay and Yangon. If you are planning a construction project or would like to know more about us, please get in touch."
        />
        <meta
          name="keywords"
          content="Eurommr, Construction, Architecture Firm Myanmar, Architecture, Construction Myanmar"
        />
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>

      <div
        className=" bg-white dark:bg-black min-h-screen w-full lg:pl-64"
        onClick={handleClick}
      >
        <Hero />
        <About />
        <Services />
        <Projects data={data} />
        <Contact />
        <DL />
      </div>
      <Nav />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://strapi-eurommr.herokuapp.com/api/services?populate=service_media&sort=publishedAt:desc"
  );
  const resObj = await res.json();

  return {
    props: {
      data: resObj.data,
    },
  };
};
