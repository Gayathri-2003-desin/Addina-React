import React, { useEffect, useState } from "react";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden ">
      
      {/* IMAGE */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${images[current]})` }}
      />

      {/* PREVIOUS */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white w-16 h-16 text-4xl  flex items-center justify-center self-center  shadow"
      >
        ‹
      </button>

      {/* NEXT */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white w-16 h-16 text-4xl  flex items-center justify-center self-center  shadow"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
