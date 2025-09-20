import React, { useState, useEffect } from "react";
import { asserts } from "../assets/assets"; // make sure you have multiple images here

const Hero = ({ blurAmount = "blur-md" }) => {

  const productImages = [
  { src: asserts.img1, name: "Aluminium Profile" },
  { src: asserts.img2, name: "MS Square Tube " },
  { src: asserts.img3, name: "ABS Pipe & joints " },
  //{ src: asserts.img4, name: "panel steel" },
];


  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change image every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [productImages.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % productImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 h-[250px] sm:h-[320px] lg:h-[450px] overflow-hidden">
      {/* Background image with adjustable blur */}
      <div
        className={`absolute inset-0 bg-center bg-cover`}
        style={{
          backgroundImage: `url(${asserts.background})`,
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Product Section */}
      <div className="relative w-full max-w-[1100px] mx-auto flex items-center justify-center z-10">
        {/* Foreground Product Image */}
        <img
          src={productImages[currentIndex].src}
          alt={productImages[currentIndex].name}
          className="rounded-xl shadow-lg w-full max-w-[1100px] h-[200px] sm:h-[350px] lg:h-[400px] object-cover transition-all duration-700"
        />

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white 
                     p-1 sm:p-2 rounded-full text-xs sm:text-sm md:text-base"
        >
          ◀
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white 
                     p-1 sm:p-2 rounded-full text-xs sm:text-sm md:text-base"
        >
          ▶
        </button>

        {/* Purple Label */}
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 rounded-md bg-purple-700 
                        px-2 py-1 sm:px-3 sm:py-1.5 text-white text-xs sm:text-sm lg:text-base">
          {productImages[currentIndex].name}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="mt-3 sm:mt-5 flex justify-center space-x-2 z-10">
        {productImages.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`block h-2 w-2 sm:h-3 sm:w-3 rounded-full cursor-pointer ${
              idx === currentIndex ? "bg-purple-700" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
