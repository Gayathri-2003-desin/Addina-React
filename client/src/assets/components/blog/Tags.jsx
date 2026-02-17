const tags = [
  "Technology",
  "Food",
  "Personality",
  "Life Style",
  "Travel",
  "Nature",
];

const Tags = () => {
  return (
    <div className="w-full max-w-sm  p-6 ">
      {/* TITLE */}
      <h2 className="text-2xl font-semibold mb-6">Tags</h2>

      {/* TAGS */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <button
            key={index}
            className="px-4 py-2 border border-gray-300 
                        text-gray-600 text-sm
                       hover:border-gray-400 hover:text-white hover:bg-[#b88b5a]
                       transition"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
