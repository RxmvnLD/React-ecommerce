import React, { useState, useEffect } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const imagesTest = [
  "https://m.media-amazon.com/images/I/61puPQNQaSS._AC_SL1000_.jpg",
  "https://m.media-amazon.com/images/I/71P5M+T7-zS._AC_SL1000_.jpg",
  "https://m.media-amazon.com/images/I/61B1a38XQfS._AC_SL1000_.jpg",
];
let count = 0;

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleOnNextClick = () => {
    count = (count + 1) % images.length;
    setCurrentImage(count);
  };

  const handleOnPrevClick = () => {
    count = (currentImage + images.length - 1) % images.length;
    setCurrentImage(count);
  };

  return (
    <>
      <div className="relative w-full select-none ">
        <div className="aspect-w-16 aspect-h-9"></div>
        <img src={images[currentImage]} alt="" />
        <div className="absolute z-10 flex items-center justify-between w-full px-3 py-2 text-3xl text-blue-500 transform -translate-y-1/2 top-1/2">
          <button onClick={handleOnPrevClick}>
            <MdArrowBackIos />
          </button>
          <button onClick={handleOnNextClick}>
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
