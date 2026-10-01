import React from "react";

interface StatCardProps {
  title: string;
  period: string;
  amount: number | string;
  change: number | string;
  currency?: string;
  changePrefix?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  period,
  amount,
  change,
  currency = "$",
  changePrefix = "+",
}) => {
  return (
    <div className="w-[135px] h-[135px] rounded-[18px] bg-[#073BCE] p-4 text-white flex flex-col">
      {/* Title */}
      <p className="text-[14px] font-medium leading-[18px]">
        {title}
      </p>

      {/* Period */}
      <p className="text-[10px] font-normal leading-[14px] text-white/80">
        {period}
      </p>

      {/* Amount */}
      <p className="mt-2 text-[21px] font-bold leading-[26px] tracking-[-0.5px]">
        {currency}
        {typeof amount === "number"
          ? amount.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          : amount}
      </p>

      {/* Change */}
      <div className="mt-auto">
        <span className="inline-flex items-center rounded-full bg-[#B7FF00] px-2.5 py-1 text-[10px] font-semibold leading-none text-black">
          {changePrefix}
          {change}
        </span>
      </div>
    </div>
  );
};

export default StatCard;