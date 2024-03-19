import React from "react";
import students from "../constants";
import Image from "next/image";
import Button from "./Button";

const AddFriends = () => {
  return (
    <section id="component" className="flex flex-col gap-8">
      <div>
      <h1>Tanıyor olabileceğiniz kişiler</h1>
      <p>Okulunuzdan</p>
      </div>
      {students.map((student, index) => {
        //ilk 6i göstersin diye örnek
        if (index < 6) {
          return (
            <div className="flex gap-4">
              <Image
                key={index}
                src={student.image}
                alt={""}
                height={30}
                width={30}
                className="h-10 w-10"
              />
              <div>
              <h2 className="font-medium">{student.name} {student.surname} </h2>
              <p className="text-md">{student.school}</p>
              <div className="my-2"><Button type={"submit"} title={"Bağlantı kur"} background={"white"}></Button></div>
              
              </div>
            </div>
          );
        }
        return null;
      })}
    </section>
  );
};

export default AddFriends;
