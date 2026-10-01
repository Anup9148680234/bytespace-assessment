const grads = [
  "from-amber-200 to-rose-300",
  "from-slate-300 to-slate-500",
  "from-slate-800 to-cyan-700",
  "from-zinc-700 to-zinc-900",
  "from-emerald-100 to-slate-200",
  "from-yellow-200 to-orange-300",
];
// TODO: replace gradient `g` with real exported images: img: '/img/course-1.jpg'

export type Course = { id: number; title: string; g: string };
export const courses: Course[] = [
  "Learn Figma from Basic",
  "Build Digital Asset",
  "the Power of Big Data",
  "Balancing Productivity an…",
  "Mastering Money Manage…",
  "From Idea to Startup Succ…",
].map((title, i) => ({ id: i + 1, title, g: grads[i] }));
