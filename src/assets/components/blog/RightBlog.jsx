import React from "react";
import SearchInput from "./SearchInput";
import CategoryList from "./CategoryList";
import RecentPost from "./RecentPost";
import Tags from "./Tags";

const RightBlog = () => {
  return (
    // 🔹 Entire sidebar is sticky
    <div className="sticky top-24 flex flex-col gap-9">
      
      {/* SEARCH */}
      <div className="bg-[#f6f6f6] p-8 flex flex-col gap-5">
        <SearchInput />
      </div>

      {/* CATEGORY */}
      <div className="bg-[#f6f6f6] p-8 flex flex-col gap-5">
        <CategoryList />
      </div>

      {/* RECENT POSTS */}
      <div className="bg-[#f6f6f6] p-8 flex flex-col gap-5">
        <RecentPost />
      </div>

      {/* TAGS */}
      <div className="bg-[#f6f6f6] p-8 flex flex-col gap-5">
        <Tags />
      </div>

    </div>
  );
};

export default RightBlog;
