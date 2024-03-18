"use client";
import Image from "next/image";
import React, { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="text-xl">
      <img
        src="/icons8-menu-64.png"
        alt=""
        className="fixed bottom-10 right-10 cursor-pointer"
        onClick={toggleDropdown}
      />

      <div className={`dropdown ${isOpen ? "open" : ""}`}>
        <div
          className="fixed bottom-20 right-4 p-4 mt-2 min-w-80 min-h-96
        "
        id="component"
        >
          <div className="flex mb-4 p-2"> 
            <h1>Mesajlaşma</h1>
            <button>
              <Image src={""} alt={""}></Image>
            </button>
            <button>
              <Image src={""} alt={""}></Image>
            </button>
          </div>
          <a
            href="#"
            className="block rounded-xl px-4 py-2 text-gray-800 hover:border-b-2 border-purple-500"
          >
            <div className="flex gap-3">
              <Image
                src="/person.jpg"
                alt={""}
                height={30}
                width={30}
                className="rounded-full"
              ></Image>
              <h2 className="my-auto">Başak Karadeniz</h2>
            </div>
          </a>
          <a
            href="#"
            className="block rounded-xl px-4 py-2 text-gray-800 hover:border-b-2 border-purple-500"
          >
            <div className="flex gap-3">
              <Image
                src="/person.jpg"
                alt={""}
                height={30}
                width={30}
                className="rounded-full"
              ></Image>
              <h2 className="my-auto">Başak Karadeniz</h2>
            </div>
          </a>
          <a
            href="#"
            className="block rounded-xl px-4 py-2 text-gray-800 hover:border-b-2 border-purple-500"
          >
            <div className="flex gap-3">
              <Image
                src="/person.jpg"
                alt={""}
                height={30}
                width={30}
                className="rounded-full"
              ></Image>
              <h2 className="my-auto">Başak Karadeniz</h2>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DropDown;
