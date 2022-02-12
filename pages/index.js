import Hero from "../components/Home/Hero";
import Welcome from "../components/Home/Welcome";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className=" bg-zinc-700 min-h-screen w-full lg:pl-64 lgr:pl-[361px]">
      <Nav />
      <Hero />
      <Welcome />
    </div>
  );
}
