import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NAV_LİNKS } from "../constants";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <section className="text-gray-600 bg-white shadow-sm m-10 h-screen" id="component">
      <nav className="flex flex-col justify-around container gap-5">
        <div className="flex flex-col gap-5">
          <Link href={"/"} className="w-auto">
            <Image
              src="/icons8-linkedin-64.png"
              alt="main logo"
              width={90}
              height={50}
              id="logo"
            ></Image>
          </Link>
          
           <SearchBar></SearchBar>
        </div>
        <div className="p-3 w-auto">
          <ul className="flex flex-col gap-5 ">
            {NAV_LİNKS.map((link, index) => (
              <li key={index}>
                <a href={link.href}>
                  <div className="grid grid-cols-2 rounded-xl  hover:border-y-2 hover:bg-purple-50 px-4    ">
                    <Image src={link.icon} alt="Icon" width={50} height={50} className="min-w-12" />
                    <div className="my-auto opacity-60 transition-opacity duration-400 hover:opacity-100 font-semibold  ">
                      {link.label}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          {/* problem yaşadığım için iç içe aldım */}
          {/* <ul className="grid grid-rows-5 my-auto gap-5 text-lg">
            {NAV_LİNKS.map((link, index) => (
              <li className="hover:font-bold" key={index}>
                <a href={link.href}>{link.label} </a>
              </li>
            ))}
            </ul>*/}
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
