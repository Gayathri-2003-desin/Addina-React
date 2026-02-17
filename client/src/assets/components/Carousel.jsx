import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Eye, Heart, ShoppingBag } from "lucide-react";

const products = [
  {
    src: "/images/product1.png",
    title: "Chair Pillow",
    price: "USD 120.00",
    discount: "15% Off",
  },
  {
    src: "/images/product2.png",
    title: "Alexander Roll Arm Sofa",
    price: "USD 350.00",
    discount: "10% Off",
  },
  {
    src: "/images/product3.png",
    title: "Brasslegged Armchair",
    price: "USD 290.00",
    discount: "30% Off",
  },
  {
    src: "/images/product4.png",
    title: "Leather Chair",
    price: "USD 200.00",
    discount: "10% Off",
  },
  {
    src: "/images/product5.png",
    title: "Modern Lounge Chair",
    price: "USD 330.00",
    discount: "15% Off",
  },
];

export default function ProductCarousel() {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };


  const loopProducts = [...products, ...products];

  return (
    <div className="relative  overflow-hidden ">

      
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-20"
      >
        <ChevronLeft size={30} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-20"
      >
        <ChevronRight size={30} />
      </button>

      {/* CAROUSEL TRACK */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 25}%)` }}
      >

        {loopProducts.map((item, i) => (
          <div key={i} className="w-1/4 flex-shrink-0 p-4">

            {/* PRODUCT CARD */}
            <div className="w-full">

              {/* IMAGE BOX WITH HOVER EFFECTS */}
              <div className="relative bg-[#f5f1e6] p-6  group overflow-hidden">

                {/* DISCOUNT BADGE */}
                <div className="absolute top-4 left-4 bg-[#b18b5e] text-white text-xs px-3 py-1 rounded-full">
                  {item.discount}
                </div>

                {/* MAIN PRODUCT IMAGE */}
                <img
                  src={item.src}
                  alt="product"
                  className="w-full py-10 transition-transform duration-300 group-hover:scale-105"
                />

                {/* 3 ICONS ON HOVER */}
                <div
                  className="
                    absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                >
                  <button className="w-10 h-10 rounded-full bg-[#b18b5e] flex items-center justify-center text-white">
                    <ShoppingBag size={18} />
                  </button>

                  <button className="w-10 h-10 rounded-full bg-[#b18b5e] flex items-center justify-center text-white">
                    <Eye size={18} />
                  </button>

                  <button className="w-10 h-10 rounded-full bg-[#b18b5e] flex items-center justify-center text-white">
                    <Heart size={18} />
                  </button>
                </div>

              </div>

              {/* TEXT BELOW IMAGE */}
              <h3 className="text-[20px] font-semibold mt-4">{item.title}</h3>

              {/* STAR RATING */}
              <div className="flex gap-1 text-[#b18b5e] text-xl mt-1">★ ★ ★ ★ ★</div>

              {/* PRICE */}
              <p className="mt-1 text-gray-600 font-medium">{item.price}</p>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
