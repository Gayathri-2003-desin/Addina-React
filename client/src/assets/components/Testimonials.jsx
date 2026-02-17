import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      name: "Jerome Bell",
      role: "Web Designer",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus."
    },
    {
      name: "Annette Black",
      role: "Dog Trainer",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus."
    },
    {
      name: "Ralph Edwards",
      role: "UI/UX Designer",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus."
    },
    {
      name: "Albert Flores",
      role: "Marketing Expert",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus."
    },
  ];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  // Show 3 reviews at a time
  const visibleReviews = [
    reviews[index],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  return (
    <div className="relative w-full px-[100px] ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleReviews.map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex self-start items-start">
         <div>
            <div className="text-yellow-400 text-xl mb-3">
              {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
            </div>

           
            <h2 className="font-bold text-xl">{item.name}</h2>
            <p className="text-gray-600 mb-4">{item.role}</p>

            <p className="text-gray-700">{item.text}</p>
          </div>
            {/* Quote icon */}
            <div className="text-yellow-700 text-7xl font-bold mt-4 text-right">”</div>
          </div>
         </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={prevSlide}
          className="p-4 border border-yellow-600 rounded-full hover:bg-yellow-600 text-white hover:text-white transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 border border-yellow-600 rounded-full hover:bg-yellow-600 text-white hover:text-white transition"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

