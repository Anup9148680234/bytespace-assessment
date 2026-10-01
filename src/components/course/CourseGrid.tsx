import { CourseCard } from "./CourseCard";
import { courses } from "../../data/courses";

export const CourseGrid = ({ n = 6 }: { n?: number }) => (
  <div className="grid gap-6 md:grid-cols-3">
    {Array.from({ length: n }, (_, i) => (
      <CourseCard key={i} c={courses[i % 6]} />
    ))}
  </div>
);
