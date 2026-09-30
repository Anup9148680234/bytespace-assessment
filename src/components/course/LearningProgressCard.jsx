export const LearningProgressCard = ({
  className = "",
}) => {
  return (
    <div
      className={`
        absolute z-10
        w-[216px] h-[131px]
        rounded-[14px]
        bg-white
        px-4 pt-[17px] pb-4
        text-left text-[#252529]
        ${className}
      `}
    >
      <p className="text-[13px] leading-[18px] font-normal">
        Learning Progress
      </p>

      <p className="font-head mt-px mb-[9px] text-[48px] leading-[52px] font-semibold tracking-[-1.5px]">
        55%
      </p>

      <div className="h-[7px] w-full overflow-hidden rounded-full bg-[#f1f1f1]">
        <div className="h-full w-[55%] rounded-full bg-volt" />
      </div>
    </div>
  );
};

export default LearningProgressCard;