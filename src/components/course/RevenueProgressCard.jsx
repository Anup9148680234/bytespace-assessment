export const RevenueProgressCard = ({
  className = "",
}) => {
  return (
    <div
      className={`
        absolute z-10
        w-[216px] h-[131px]
        rounded-[14px]
        bg-[#003BE2]
        px-4 pt-[17px] pb-4
        text-left text-white
        ${className}
      `}
    >
      <p className="text-[13px] leading-[18px] font-normal">
        Total Revenue
      </p>

      <p className="text-[11px] text-gray-300 leading-[18px] font-normal">
        July 1-28
      </p>


      <p className="font-head mt-px mb-[9px] text-[28px] leading-[52px] font-semibold tracking-[-1.5px]">
        $120.29
      </p>

      <div className="h-[7px] w-full overflow-hidden rounded-full bg-[#f1f1f1]">
        <div className="h-full w-[55%] rounded-full bg-volt" />
      </div>
    </div>
  );
};

export default RevenueProgressCard;