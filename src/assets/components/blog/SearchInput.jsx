import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="relative w-full max-w-xl">
      {/* INPUT */}
      <input
        type="text"
        placeholder="Enter your keywords..."
        className="w-full h-14 pl-5 pr-14 text-gray-700 
                   border border-gray-300 bg-white
                   focus:outline-none focus:border-gray-400"
      />

      {/* ICON */}
      <Search
        size={22}
        className="absolute right-5 top-1/2 -translate-y-1/2 
                   text-gray-500 cursor-pointer"
      />
    </div>
  );
};

export default SearchInput;
