import React from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { photoImages } from "./photoImages";

const PhotoSlider = ({ slides }) => {
  const [current, setCurrent] = React.useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-4xl mx-auto my-8">
      <div className="relative flex justify-center p-4">
        {photoImages.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                size={50}
                className="absolute left-[30px] top-[50%] text-white/70 cursor-pointer select-none z-[2]"
                onClick={prevSlide}
              />
              {index === current && (
                <Image
                  src={slide}
                  alt="#"
                  width="1440"
                  height="600"
                  style={{ objectFit: "cover" }}
                />
              )}
              <FaArrowCircleRight
                size={50}
                className="absolute right-[30px] top-[50%] text-white/70 cursor-pointer select-none z-[2]"
                onClick={nextSlide}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoSlider;
