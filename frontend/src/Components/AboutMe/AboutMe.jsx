import React from 'react';
import '../../index.css';
import face from '../../IMG/face.jpeg';

const AboutMe = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-row flex-wrap mt-[15vh] mb-[3vh]">
        <div className="basis-1/2">
          <img src={face} alt="" className="h-[45vh] shadow-3xl"></img>
        </div>
        <div className="basis-1/2">
          <h1 className="text-3xl font-bold mb-10">
            Dlaczego warto mi zaufać?
          </h1>
          <p className="text-justify font-small">
            Jestem trenerem personalnym z ponad 10-letnim doświadczeniem, który
            pomaga swoim podopiecznym osiągać cele, o jakich marzą. Specjalizuję
            się w treningu siłowym, poprawie kondycji i treningach
            funkcjonalnych. <br />
            <br />
            Każdy plan treningowy zawiera ćwiczenia, które bez problemu będziesz
            w stanie wykonać po zapoznaniu się z moimi instrukcjami. Nie musisz
            martwić się jeśli coś będzie nie jasne, ponieważ możesz zawsze
            skontaktować się ze mną poprzez komunikator Messenger. <br />
            <br />
            Moje plany dietetyczne są oparte na precyzyjnie obliczonej liczbie
            kalorii, dzięki czemu wspierają fizjologiczne procesy organizmu.
            Każdy jadłospis jest skonstruowany tak, aby dostarczał niezbędnych
            składników odżywczych, był smaczny i łatwy w przygotowaniu.
            <br />
            <br /> Moja wiedza i pasja sprawiają, że jestem tu, aby motywować i
            wspierać Cię na każdym kroku – Twoje sukcesy są dla mnie największą
            satysfakcją.
          </p>
        </div>
        <div className="grid grid-cols-2 w-full h-[15vh]">
          <div className="flex justify-center items-center col-start-2">
            <a href="#" className="col-start-2 ">
              <button
                type="button"
                className="motion-safe:hover:-translate-y-0.5 motion-safe:transition bg-pColor text-white font-semibold p-4 mr-5"
              >
                ROZPOCZNIJ WSPÓŁPRACE
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
