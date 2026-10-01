import React from "react";


interface StatBlockProps {
  title: string;
  year: string | number;
  amount: string | number;
  change: string | number;
}

export const StatBlock: React.FC<StatBlockProps> = ({
  title,
  year,
  amount,
  change,
}) => {
  return (
    <div className="flex h-[135px] w-[135px] flex-col rounded-[18px] bg-[#073BCE] p-4 text-white">
      {/* Title */}
      <p className="text-[14px] font-medium leading-[18px]">
        {title}
      </p>

      {/* Year */}
      <p className="text-[10px] font-normal leading-[14px] text-white/80">
        {year}
      </p>

      {/* Amount */}
      <p className="mt-2 font-head text-[21px] font-bold leading-[26px] tracking-[-0.5px]">
        {amount}
      </p>

      {/* Change */}
      <div className="mt-auto">
        <span className="inline-flex h-[24px] items-center rounded-full bg-[#BFFF00] px-2.5 text-[10px] font-medium leading-none text-black">
          +{change}$
        </span>
      </div>
    </div>
  );
};