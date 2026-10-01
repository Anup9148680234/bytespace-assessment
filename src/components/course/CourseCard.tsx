import { Link } from "react-router-dom";
import { Avatars } from "../ui/Avatars";
import type { Course } from "../../data/courses";

export const CourseCard = ({ c }: { c: Course }) => (
  <Link
    to="/course/1"
    className="block rounded-3xl border border-gray-300 bg-white p-4"
  >
    <div className={`relative h-[195px] rounded-2xl bg-gradient-to-br ${c.g}`}>
      <div className="absolute bottom-2 left-3 flex gap-2 text-xs text-gray-700">
        {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/50 px-3 py-1.5 backdrop-blur"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
    <div className="mt-4 flex items-center justify-between gap-2 font-head text-xl font-medium">
      <span className="truncate">{c.title}</span>
      <span className="font-sans text-base font-normal text-gray-500">
        4.5 ★
      </span>
    </div>
    <p className="text-xs text-gray-500">
      by <span className="text-brand">purepearl studio</span>
    </p>
    <div className="mt-4 flex items-center gap-3">
      <span className="rounded-full bg-gray-100 px-3 py-2 text-xs">
        Beginner
      </span>
      <Avatars />
    </div>
    <p className="mt-3 font-head text-xl font-semibold text-brand">
      $25
      <span className="font-sans text-xs font-normal text-gray-500">
        /lifetime
      </span>
    </p>
  </Link>
);
