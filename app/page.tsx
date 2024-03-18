import { Analysis } from "./components/Analysis";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Lang from "./components/Lang";
import DropDown from "./components/DropDown";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div>
          <Hero></Hero>
          <Analysis></Analysis>
        </div>
        <div>
          <Lang></Lang>
          <DropDown></DropDown>
        </div>
      </div>

    </>
  );
}
