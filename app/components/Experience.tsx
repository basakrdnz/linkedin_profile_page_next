import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ExperienceProps {
  image: any;
  title: string;
  company: string;
  time: string;
  exp: string;
}

const ExperienceItem = ({
  image,
  title,
  company,
  time,
  exp,
}: ExperienceProps) => {
  return (
    <div>
      <div className="flex gap-4 py-6">
        <Image src={image} key={image} alt={""} width={80} height={30} className="max-h-20 w-auto"></Image>
        <div>
          <h2 className="text-xl font-semibold hover:underline"><a href="">{title}</a></h2>
          <p>{company}</p>
          <p className="font-thin">{time}</p>
          <div className="flex">
            <p className="from-neutral-500">{exp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="component">
        <div className="flex justify-between">
        <h1><a href="#">Deneyim</a></h1>
        <Link href={""} className="px-4"><Image src="/pencil.png" alt={""} height={35} width={35}></Image></Link>

        </div>
      <ExperienceItem
        image="/Graphic Design Club.jpg"
        title={"Summer Intern"}
        company={"Bronix Aş"}
        time={"2022-2024"}
        exp={"Web Geliştirme ve Mobil Uygulamalar"}
      ></ExperienceItem>
            <ExperienceItem
        image="/Graphic Design Club.jpg"
        title={"Summer Intern"}
        company={"Bronix Aş"}
        time={"2022-2024"}
        exp={"Web Geliştirme ve Mobil Uygulamalar"}
      ></ExperienceItem>
            <ExperienceItem
        image="/Graphic Design Club.jpg"
        title={"Summer Intern"}
        company={"Bronix Aş"}
        time={"2022-2024"}
        exp={"Web Geliştirme ve Mobil Uygulamalar"}
      ></ExperienceItem>
      
    </section>
  );
};
export default Experience;
