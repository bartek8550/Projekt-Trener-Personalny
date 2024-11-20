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
          <p className="text-5xl font-semibold">10</p>
          <p className="text-pColor font-bold text-xs mt-1">
            LAT DOŚWIADCZENIA TRENINGOWEGO
          </p>
        </div>
        <div className="basis-1/3 flex flex-col justify-center items-center">
          <p className="text-5xl font-semibold">676</p>
          <p className="text-pColor font-bold text-xs mt-1">
            PODOPIECZNYCH KTÓRZY MI ZAUFALI
          </p>
        </div>
        <div className="basis-1/3 flex flex-col justify-center items-center">
          <p className="text-5xl font-semibold">100%</p>
          <p className="text-pColor font-bold text-xs mt-1">
            ZADOWOLENIA PODOPIECZNYCH
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeFigures;
