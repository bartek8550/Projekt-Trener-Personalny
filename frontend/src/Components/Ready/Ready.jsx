import React from "react";
import "../../index.css";

const Ready = () => {
  return (
    <div className="bg-gymBackgroundImg bg-center h-max">
      <div className="max-w-3xl mx-auto px-4">
        <div className="basis-full flex justify-center pt-[10vh] pb-[11vh]">
          <p className="font-bold text-white text-center text-2xl sm:text-3xl lg:text-5xl ">
            Gotowy, by zrobić pierwszy
            <br /> krok w stronę lepszej wersji
            <br /> siebie?
          </p>
        </div>
        <div className="basis-full flex flex-row justify-center items-center pb-[10vh]">
          <a href="#" className="">
            <button
              type="button"
              className=" flex items-center justify-center
    motion-safe:hover:-translate-y-0.5 
    motion-safe:transition 
    bg-white text-black font-medium
    text-[0.8rem] h-[2.5rem] w-[6rem]           
    sm:text-[0.85rem] sm:h-[2.8rem] sm:w-[8.5rem]
    lg:text-[1.10rem] lg:h-[3.2rem] lg:w-[12.0rem]
    "
            >
              ZACZYNAJMY!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ready;
