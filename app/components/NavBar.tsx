import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NAV_LİNKS } from "../constants";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <section className="text-gray-600 bg-white shadow-sm">
      <nav className="flex justify-around container m-auto">
        <div className="flex gap-5">
          <Link href={"/"} className="my-auto">
            <Image
              src="/blue_linkedin_icon.png"
              alt="main logo"
              width={50}
              height={50}
              id="logo"
            ></Image>
          </Link>

          <SearchBar></SearchBar>
        </div>
        <div className="flex flex-col ">
          <ul className="grid grid-cols-5 gap-10">
            {NAV_LİNKS.map((icon, index) => (
              <li key={index} className="flex m-auto">
                <img src={icon.icon} alt="Icon" width={40} height={40} />
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-5 text-center gap-10">
            {NAV_LİNKS.map((link, index) => (
              <li className="hover:font-bold" key={index}>
                <a href={link.href}>{link.label} </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
