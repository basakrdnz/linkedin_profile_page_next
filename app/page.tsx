import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Lang from "./components/Lang";

export default function Home() {
  return (
    <>
      <div className="flex gap-10 justify-center m-10">
        <div>
          <Hero></Hero>
          <Footer></Footer>
        </div>
        <div>
          <Lang></Lang>
        </div>
      </div>
    </>
  );
}
