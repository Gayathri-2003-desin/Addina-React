import React from "react";

const SkillBar = ({ title, percent }) => {
  return (
    <div className="w-full mb-8">
      {/* Title + Percentage */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-[20px] font-semibold text-[#2d2d2d]">{title}</h3>
        <span className="text-[18px] font-semibold text-[#b38b59]">
          {percent}%
        </span>
      </div>

      {/* Background line */}
      <div className="w-full h-[10px] bg-[#f4f1eb] rounded-full relative">
        {/* Filled bar */}
        <div
          className="h-full bg-[#b38b59] rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function ProgressSection() {
  return (
    <div className="w-full max-w-xl">
      <SkillBar title="Furniture" percent={70} />
      <SkillBar title="Handmade" percent={52} />
      <SkillBar title="Crafts" percent={80} />
    </div>
  );
}
