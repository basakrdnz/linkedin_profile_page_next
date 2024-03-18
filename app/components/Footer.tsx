import React from "react";
import { FOOTER_LINKS_ONE } from "../constants";
import { link } from "fs";
import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <div className="grid grid-cols-3 align-bottom gap-2 " id="component">
        {FOOTER_LINKS_ONE.map((link) => (
          <div className="mx-10">
            <Link href="" key={""}>
              {link.links}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
