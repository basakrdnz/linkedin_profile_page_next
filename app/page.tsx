import AddFriends from "./components/AddFriends";
import { Analysis } from "./components/Analysis";
import DropDown from "./components/DropDown";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Lang from "./components/Lang";

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
          <AddFriends></AddFriends>
          <DropDown></DropDown>
        </div>
      </div>

    </>
  );
}
