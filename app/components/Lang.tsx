import React from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

const Lang = () => {
  return (
    <section id="component" className="md:flex flex-col hidden" >
      <div className="flex justify-between my-4">
        <h1>Profil Dili</h1>
        <Link href={""}>
          <Image src="/pencil.png" alt={""} height={35} width={35}></Image>
        </Link>
      </div>

      <div className="flex gap-5">
        <Button type={"submit"} title={"Türkçe"} background={"purple"}></Button>
        <Button
          type={"submit"}
          title={"İngilizce"}
          background={"white"}
        ></Button>
      </div>
    </section>
  );
};

export default Lang;
