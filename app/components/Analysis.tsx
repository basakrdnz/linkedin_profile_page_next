import Image from "next/image";
import React from "react";

export const Analysis = () => {
  return (
    <section id="component" className="flex flex-col gap-2">
      <h1>Analizler</h1>
      <div className="flex gap-2 pb-4">
        <Image
          src="/icons8-round-64.png"
          alt={""}
          width={25}
          height={10}
        ></Image>
        <p>Sana özel</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-3">
          <Image
            src="/icons8-ok-64.png"
            alt={""}
            width={50}
            height={10}
            className="p-1"
          ></Image>
          <div>
            <h2 className="hover:font-medium hover:underline">
              <a href="">37 profil görüntülemesi</a>
            </h2>
            <p>Profilinize kimlerin baktığını keşfedin.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Image
            src="/icons8-synchronize-64.png"
            alt={""}
            width={50}
            height={10}
            className="p-1"

          ></Image>
          <div>
            <h2 className="hover:font-medium hover:underline">
              <a href="">161 gönderi gösterimi</a>
            </h2>
            <p>Gönderileriniz ile etkileşim kuran kişileri görün.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Image
            src="/icons8-cursor-64.png"
            alt={""}
            width={50}
            height={10}
            className="p-1"

          ></Image>
          <div>
            <h2 className="hover:font-medium hover:underline">
              <a href="">37 profil görüntülemesi</a>
            </h2>
            <p>Arama sonuçlarında ne kadar sık göründüğünüzü görün.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
