import React from "react";
import "../../index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from "../../IMG/photo1.jpeg";
import photo2 from "../../IMG/photo2.jpeg";
import photo3 from "../../IMG/photo3.jpeg";
import photo4 from "../../IMG/photo4.jpeg";
import photo5 from "../../IMG/photo5.jpeg";

const Transitions = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-carouselBackgroundImg h-max">
      <div className="max-w-6xl mx-auto px-4">
        <div className="basis-full flex justify-center pt-[10vh] pb-[11vh] sm:mt-[3vh] mb-[3vh] lg:mt-[6vh] mb-[3vh]">
          <p className="font-bold text-white text-center sm:text-xl lg:text-4xl ">
            Przemiany moich podopiecznych
          </p>
        </div>
        <div className="basis-full px-2 py-5">
          <Slider {...settings}>
            {imgs.map((entry) => (
              <img src={entry.img} alt="" className="px-2"></img>
            ))}
          </Slider>
        </div>
        <div className="basis-full flex flex-row justify-center py-[10vh]">
          <a href="#" className="">
            <button
              type="button"
              className="motion-safe:hover:-translate-y-0.5 motion-safe:transition bg-pColor text-white font-semibold p-4"
            >
              ZACZNIJ SWOJĄ PRZEMIANĘ
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

const imgs = [
  { img: photo1 },
  { img: photo2 },
  { img: photo3 },
  { img: photo4 },
  { img: photo5 },
];

export default Transitions;
