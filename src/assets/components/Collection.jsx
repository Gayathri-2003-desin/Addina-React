import React from 'react'
import { Eye, Heart, ShoppingBag } from "lucide-react";

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
    title: "Alexander Sofa",
    price: "USD 150.00",
    discount: "15% Off",
  },

    {
    src: "/images/product6.png",
    title: "Stylish Grey Chair",
    price: "USD 150.00",
    discount: "NEW",
  },

      {
    src: "/images/product7.png",
    title: "Chair Nobody Armchair",
    price: "USD 80.00",
    discount: "15% Off",
  },

        {
    src: "/images/product8.png",
    title: "Realistic Sofa",
    price: "USD 49.00",
    discount: "NEW",
  },
];

const Collection = () => {
  return (
    <div className="mx-[100px] ">

      {/* SECTION TITLE */}
      <h5 className="font-semibold uppercase bg-[rgba(177,139,94,0.15)] px-[16px] py-[6px] text-[16px] inline-block text-[#b18b5e]">
        THIS MONTH
      </h5>
<div className='flex justify-between items-center'>
      <h1 className="text-black text-[52px] font-bold mt-3">Trendy Collection</h1>

      {/* FILTER OPTIONS */}
      <div className="flex gap-3 mt-2">
        <p>All Collection</p>
        <p>New In</p>
        <p>Top Rated</p>
        <p>Tensing Items</p>
      </div>
</div>
      {/* PRODUCT LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">

        {products.map((item, index) => (
          <div key={index} className="w-full">

            {/* IMAGE CARD */}
            <div className="relative bg-[#f5f1e6] p-6 group overflow-hidden ">

              {/* DISCOUNT */}
              <div className="absolute top-4 left-4 bg-[#b18b5e] text-white text-xs px-3 py-1 rounded-full">
                {item.discount}
              </div>

              {/* PRODUCT IMAGE */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full py-10 transition-transform duration-300 group-hover:scale-105"
              />

              {/* ICONS */}
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

            {/* TEXT */}
            <h3 className="text-[20px] font-semibold mt-4">{item.title}</h3>
            <div className="flex gap-1 text-[#b18b5e] text-xl mt-1">★ ★ ★ ★ ★</div>
            <p className="mt-1 text-gray-600 font-medium">{item.price}</p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Collection;
