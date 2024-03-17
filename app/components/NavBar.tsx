import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NAV_LİNKS } from "../constants";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <section className="text-gray-600 bg-white shadow-sm m-10" id="component" >
      <nav className="flex flex-col justify-around container gap-5">
        <div className="flex flex-col gap-5">
          <Link href={"/"} className="">
            <Image
              src="/icons8-linkedin-64.png"
              alt="main logo"
              width={80}
              height={50}
              id="logo"
            ></Image>
          </Link>
          <SearchBar></SearchBar>
        </div>
        <div className="flex gap-5 ">
          <ul className="grid grid-rows-5 my-auto">
            {NAV_LİNKS.map((icon, index) => (
              <li key={index}>
                <a href=""><Image src={icon.icon} alt="Icon" width={50} height={50} /></a>
              </li>
            ))}
          </ul>
          <ul className="grid grid-rows-5 my-auto gap-6">
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
