import React from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

const Lang = () => {
  return (
    <section id="component">
      <div className="flex justify-between">
        <h1>Profil Dili</h1>
        <Link href={""} className="mt-3">
          <Image src="/pencil.png" alt={""} height={20} width={20}></Image>
        </Link>
      </div>

      <div className="flex gap-5">
        <Button type={"submit"} title={"Türkçe"} background={"blue"}></Button>
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
