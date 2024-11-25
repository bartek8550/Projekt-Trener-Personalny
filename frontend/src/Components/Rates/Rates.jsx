import React from "react";
import "../../index.css";
import kom1photo from "../../IMG/kom1.png";
import kom2photo from "../../IMG/kom2.png";
import comment1 from "../../IMG/comment1.png";
import comment2 from "../../IMG/comment2.png";

const Rates = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-row flex-wrap mb-[3vh] sm:mb-[10vh]  ">
        <div className="basis-full flex justify-center sm:mt-[3vh] mb-[3vh] lg:mt-[10vh] mb-[3vh] ">
          <p className="font-bold text-center sm:text-xl lg:text-4xl ">
            Tak mnie oceniają podopieczni!
          </p>
        </div>
        <div className="basis-full flex flex-wrap flex-row mb-[2vh] sm:mt-[3vh] mb-[7vh] lg:mt-[7vh] mb-[15vh] ">
          <div className="basis-1/2 flex flex-col items-center p-1">
            <img
              src={comment1}
              alt=""
              className="mb-4 p-1 w-[30vw] sm:w-[20vw]"
            ></img>
            <div className="flex flex-row flex-wrap justify-center items-center">
              <h1 className="font-medium mb-2 mx-2 text-[7px] sm:hidden">
                Aleksander
                <br />
                Niesłuchowski
              </h1>

              <h1 className="hidden sm:inline font-medium mb-2 mx-2 text-[10px] lg:text-[21px]">
                Aleksander Niesłuchowski
              </h1>
              <img
                src={kom1photo}
                alt=""
                className="mx-2 max-h-10 md:max-h-14 lg:max-h-28"
              />
            </div>
          </div>
          <div className="basis-1/2 flex flex-col items-center p-1">
            <img
              src={comment2}
              alt=""
              className="mb-4 p-1 w-[30vw] sm:w-[20vw]"
            ></img>

            <div className="flex flex-row flex-wrap justify-center items-center">
              <h1 className="font-medium mb-2 mx-2 text-[7px] sm:hidden">
                Katarzyna
                <br />
                Zielińska
              </h1>

              <h1 className="hidden sm:inline font-medium mb-2 mx-2 text-[10px] lg:text-[20px]">
                Katarzyna Zielińska
              </h1>
              <img
                src={kom2photo}
                alt=""
                className="mx-2 max-h-10 md:max-h-14 lg:max-h-28"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rates;
