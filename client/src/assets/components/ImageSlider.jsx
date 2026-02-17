import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "/images/chair1.png",
    "/images/chair2.png",
    "/images/chair3.png"
  ];

  const [index, setIndex] = useState(0);

  // Auto change image every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex gap-8 items-center justify-center gap-8 mb-[90px] items-baseline mt-[20px]">
      {/* Image */}
      <img
        src={images[index]}
        alt="Chair"
        className="w-[645px] h-[582px] object-cover rounded-xl transition-all duration-700"
      />

      {/* Dots */}
      <div className="flex flex-col gap-2 mt-4 self-center justify-center items-center">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i ? "bg-black scale-125" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
