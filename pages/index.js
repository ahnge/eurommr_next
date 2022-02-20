import Hero from "../components/Home/Hero";
import Nav from "../components/Nav";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import DL from "../components/Home/DL";
import Projects from "../components/Home/Projects";
import Contact from "../components/Home/Contact";

export default function Home({ data }) {
  return (
    <div className=" bg-white dark:bg-black min-h-screen w-full lg:pl-64">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Projects data={data} />
      <Contact />
      <DL />
    </div>
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
