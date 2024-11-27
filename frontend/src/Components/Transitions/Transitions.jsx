import React, { useEffect, useState } from 'react';
import '../../index.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo1 from '../../IMG/photo1.jpeg';
import photo2 from '../../IMG/photo2.jpeg';
import photo3 from '../../IMG/photo3.jpeg';
import photo4 from '../../IMG/photo4.jpeg';
import photo5 from '../../IMG/photo5.jpeg';

const Transitions = () => {
  const [slides, setSlides] = useState(3);
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlides(1);
      } else if (window.innerWidth < 768) {
        setSlides(2);
      } else {
        setSlides(3);
      }
    };
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => {
      window.removeEventListener('resize', updateSlides);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-carouselBackgroundImg h-max">
      <div className="max-w-6xl mx-auto px-4">
        <div className="basis-full flex justify-center pt-[10vh] pb-[11vh] sm:mt-[3vh] mb-[3vh] lg:mt-[6vh] mb-[3vh]">
          <p className="font-bold text-white text-center text-3xl lg:text-4xl ">
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
              className=" flex items-center justify-center
    motion-safe:hover:-translate-y-0.5 
    motion-safe:transition 
    bg-pColor text-white font-medium
    text-[0.85rem] h-[3.3rem] w-[12.5rem]           
    sm:text-[0.85rem] sm:h-[3.5rem] sm:w-[13rem]
    lg:text-[0.95rem] lg:h-[3.5rem] lg:w-[15rem]
    "
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
