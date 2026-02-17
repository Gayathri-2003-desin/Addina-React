import React, { useState } from "react";

const Pagination = ({ totalPages = 3 }) => {
  const [currentPage, setCurrentPage] = useState(3);

  return (
    <div className="flex items-center gap-4">
      {/* PAGE NUMBERS */}
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-12 h-12 rounded-full border 
              flex items-center justify-center text-lg font-medium hover:bg-[#b88b5a] hover:text-white
              ${
                isActive
                  ? "bg-[#b88b5a] text-white border-[#b88b5a]"
                  : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
              }`}
          >
            {page}
          </button>
        );
      })}

      {/* NEXT BUTTON */}
      <button
        onClick={() =>
          setCurrentPage((prev) =>
            prev < totalPages ? prev + 1 : prev
          )
        }
        className="w-12 h-12 rounded-full border border-gray-300 
                   flex items-center justify-center text-xl 
                   hover:border-gray-400 hover:bg-[#b88b5a] hover:text-white"
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;
