import React from "react";
import "../../index.css";
import logoTP from "../../IMG/logoTP3.png";
import contactIcon from "../../IMG/contactIcon.png";
import contactIcon2 from "../../IMG/contactIcon2.png";

const Footer = () => {
  return (
    <div className="bg-mainColor bg-center h-max">
      <div className="max-w-4xl mx-auto pt-[6vh] pb-[5vh] text-white">
        <div className="flex flex-row">
          <div className="basis-1/2 flex flex-col justify-center mx-5">
            <div className="flex flex-wrap items-start justify-center mx-2 my-2">
              <img src={logoTP} className="w-[60px] h-[60px] mx-2"></img>
              <h1 className="text-2xl font-medium mx-2">
                Trener <br /> Personalny
              </h1>
            </div>
            <div>
              <p className="text-center text-[0.89rem]">
                Serdecznie zapraszam do zapoznania się z materiałami, które
                przygotowałem. Znajdziesz tam wiele praktycznych wskazówek i
                inspiracji z zakresu treningu, diety i kształtowania sylwetki.
                Jestem pewien, że te informacje pomogą Ci stawiać kolejne kroki
                na drodze do wymarzonej formy!
              </p>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col justify-center mx-5">
            <div className="flex flex-wrap items-start justify-center mx-2 my-2">
              <img src={contactIcon2} className="w-[60px] h-[60px] mx-2"></img>
              <h1 className="text-2xl font-medium mx-2">
                Dane <br /> kontaktowe
              </h1>
            </div>
            <div>
              <p className="text-center text-[0.89rem]">
                Moi podopieczni mogą liczyć na pełne wsparcie – w każdej chwili
                możecie napisać do mnie maila lub skontaktować się przez media
                społecznościowe, na przykład przez wiadomość na Instagramie.
                Jestem tu, by odpowiadać na pytania, rozwiewać wątpliwości i
                pomóc Wam osiągnąć najlepsze efekty!
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-center">
          <div className="col-start-2 flex flex-row justify-center items-center">
            <img src={contactIcon} className="w-[35px] h-[35px] mx-2"></img>
            <p className="text-[15px]">kontakt@trenerpersonalny.pl</p>
          </div>
        </div>
      </div>
      <hr className="border-1 border-[#8E00E2]"></hr>
      <div className="flex justify-center text-white text-[12px] py-2">
        <p>2024 © Trener Personalny. Wszelkie prawa zastrzeżone</p>
      </div>
    </div>
  );
};

export default Footer;
