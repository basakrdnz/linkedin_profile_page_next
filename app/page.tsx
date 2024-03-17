import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Lang from "./components/Lang";

export default function Home() {
  return (
    <>
      <div className="flex gap-10 justify-center my-10">
        <div className="">
          <Hero></Hero>
         
          <Footer></Footer>
        </div>
        <div className="">
          <Lang></Lang>
          

        </div>
      </div>
    </>
  );
}
