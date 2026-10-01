import { Avatars } from "../ui/Avatars";

export const HappyStudents = () => {
  return (
    <div className="w-[208px] rounded-[24px] bg-white px-4 py-4">
      {/* Title */}
      <h3 className="font-head text-left text-[16px] font-medium leading-5 text-[#252525]">
        Happy Students
      </h3>

      {/* Rating */}
      <div className="mt-0.5 flex items-center gap-1 text-[12px] leading-4">
        <span className="text-[#252525]">4.5</span>

        <span className="text-[#9A9A9A]">(240)</span>

        <span className="text-[15px] leading-none text-[#C8FF00]">
          ★
        </span>
      </div>

      {/* Avatars */}
      <div className="mt-2 flex items-center">
        <div className="relative flex">
          <Avatars />
        </div>

        {/* Student count */}
        <div className="-ml-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C8FF00] text-[12px] font-medium text-[#252525]">
          2K+
        </div>
      </div>
    </div>
  );
};