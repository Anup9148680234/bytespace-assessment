import React from "react";

interface SimpleCardProps {
    className: string;
  title: string;
  courseCount: number | string;
  studentCount: number | string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({
  className,
   title,
  courseCount,
  studentCount,
}) => {
  return (
    <div className={className}>
      {/* Title */}
      <h3 className="text-[16px] text-left font-medium leading-[20px] text-[#252525]">
        {title}
      </h3>

      {/* Meta information */}
      <div className="flex items-center gap-2 mt-0.5 text-[12px] leading-[16px] text-[#9297A3]">
        <span>{courseCount} Courses</span>

        <span className="text-[#C4C6CC]">•</span>

        <span>{studentCount}+ Students</span>
      </div>
    </div>
  );
};

export default SimpleCard;