const categories = [
  { name: "Business", count: 10 },
  { name: "Cleaning", count: 8 },
  { name: "Consultant", count: 24 },
  { name: "Creative", count: 37 },
  { name: "Technology", count: 103 },
];

const CategoryList = () => {
  return (
    <div className="w-full max-w-sm">
      {/* TITLE */}
      <h2 className="text-2xl font-semibold mb-6">Category</h2>

      {/* LIST */}
      <div className="flex flex-col gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between 
                       bg-white px-5 py-4  
                        "
          >
            {/* LEFT */}
            <div className="flex items-center gap-3 text-gray-500 hover:text-[#b88b5a]">
              <span className="text-lg">•</span>
              <span className="font-medium">{item.name}</span>
            </div>

            {/* RIGHT */}
            <span
              className="px-3 py-1 text-sm font-medium 
                         border rounded-full text-gray-500 hover:text-[#b88b5a]"
            >
              {item.count < 10 ? `0${item.count}` : item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
