import React from 'react';
import '../../index.css';

const AboutMeFigures = () => {
  return (
    <div>
      <div>
        <hr className="border-1 border-[#000000]"></hr>
      </div>
      <div className="flex flex-row max-w-6xl mx-auto px-1 mt-[3vh] mb-[3.5vh]">
        <div className="basis-1/3 flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold lg:text-4xl xl:text-5xl">10</p>
          <p className="text-center text-pColor font-bold text-[10px] mt-1 px-1 sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
            LAT DOŚWIADCZENIA TRENINGOWEGO
          </p>
        </div>
        <div className="basis-1/3 flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold lg:text-4xl xl:text-5xl">676</p>
          <p className="text-center text-pColor font-bold text-[10px] mt-1 px-1 sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
            PODOPIECZNYCH KTÓRZY MI ZAUFALI
          </p>
        </div>
        <div className="basis-1/3 flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold lg:text-4xl xl:text-5xl">100%</p>
          <p className="text-center text-pColor font-bold text-[10px] mt-1 px-1 sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
            ZADOWOLENIA PODOPIECZNYCH
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeFigures;
