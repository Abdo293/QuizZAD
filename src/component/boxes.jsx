import React from "react";
import "./boxes.css";

export const Boxes = (props) => {
  return (
    <div className="container boxes rounded-xl mx-auto  mt-10 flex flex-col justify-center border border-[#780084] bg-white hover:bg-[#780084] w-[300px]">
      <img
        src={props.img}
        alt="boxes"
        className="rounded-t-xl max-w-full h-[200px]"
      />
      <section className="pl-3 pb-3">
        <p className="pt-3 text-xl">{props.title}</p>
        <p className="py-5 w-[90%] text-lg">{props.txt}</p>
        <a href="#" className="block text-[#780084] text-xl">
          Take Quiz
        </a>
      </section>
    </div>
  );
};
