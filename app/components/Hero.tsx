import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="component">
      <div className="flex flex-col relative ">
        <div className="">
          <Image
            src="/background_image.jpg"
            alt={"background image"}
            width={900}
            height={300}
            className="z-0 shadow-md rounded-3xl"
          ></Image>
          <div className="ml-5 rounded-full w-48 h-48 bg-purple-200 -mt-32 z-20 absolute"><Image src={""} alt={""}></Image></div>
        <Link href={""} className="absolute right-8 mt-6 z-20"><Image src="/pencil.png" alt={""} height={20} width={20}></Image></Link>
        </div>
        <div className="flex flex-col mt-20">
          <div className="flex">
            <div className="flex gap-5">
              <h1>Başak Karadeniz</h1>

              <div className="  m-auto w-auto px-4 rounded-lg border-4 border-dotted border-blue-500 ">
                <Link href={"/"}>Hemen doğrula</Link>
              </div>
            </div>
            <div className="flex gap-2">
              <Image
                src="/ted_niversitesi_logo.jpg"
                alt={""}
                width={30}
                height={30}
                className="rounded-full"
              ></Image>
              <h2 className="m-auto">Ted Universitesi</h2>
            </div>
          </div>
          <div>
            <h2>Bilgisayar Mühendisi</h2>
          </div>
          <div className="flex gap-4 ">
            <p>Ankara,Türkiye</p>
            <Link href={""} className="text-blue-600 font-medium">
              İletişim Bilgileri
            </Link>
          </div>
          <div>
            <Link href={""} className="text-blue-600 font-medium">
              147 bağlantı
            </Link>
          </div>
          <div className="flex">
            <Button type={"submit"} title={"Açık"} background={"blue"}></Button>
            <Button
              type={"submit"}
              title={"Profil bölümü ekle"}
              background={"white"}
            ></Button>
            <Button
              type={"submit"}
              title={"Daha Fazla"}
              background={"gray"}
            ></Button>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
