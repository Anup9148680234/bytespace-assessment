import { courses } from "../data/courses";
import { CourseCard } from "./course/CourseCard";

export const Grid = ({ n = 6 }: { n?: number }) => (
  <div className="grid gap-6 md:grid-cols-3">
    {Array.from({ length: n }, (_, i) => (
      <CourseCard key={i} c={courses[i % 6]} />
    ))}
  </div>
);
