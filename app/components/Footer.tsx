import React from "react";
import { FOOTER_LINKS_ONE, FOOTER_LINKS_TW0 } from "../constants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex m-auto align-bottom p-16 justify-evenly bg-opacity-80 bg-white rounded-t-2xl">
      <div className="grid grid-cols-3 gap-4 ">
        {FOOTER_LINKS_ONE.map((link) => (
          <div className="mx-4">
            <Link href="" key={""} className="hover:underline">
              {link.links}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {FOOTER_LINKS_TW0.map((label) => (
          <div className="flex gap-3">
            <Image
              src={label.icon}
              alt={""}
              width={30}
              height={30}
              className="min-w-12 min-h-12"
            ></Image>
            <div className="flex flex-col">
              <Link href={"#"} className="hover:underline">
                <h2>{label.label}</h2>
              </Link>
              <h3>{label.text}</h3>
            </div>
          </div>
        ))}
      </div>
        <select name="lang" id="lang" className="flex h-12 w-52 px-4 rounded-xl border-2 border-gray-400 ">
          <option value="">Dil Seç</option>
          <option value="türkçe">Türkçe</option>
          <option value="almanca">Almanca</option>
          <option value="ingilizce">İngilizce</option>
        </select>
    </section>
  );
};

export default Footer;
