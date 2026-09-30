import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Share2, Play, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Nav,
  Btn,
  Pill,
  Avatars,
  CourseCard,
  Footer,
  Logo,
  courses,
} from "./ui";

import { H2 } from "./components/H2";

const cats = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const Grid = ({ n = 6 }: { n?: number }) => (
  <div className="grid gap-6 md:grid-cols-3">
    {Array.from({ length: n }, (_, i) => (
      <CourseCard key={i} c={courses[i % 6]} />
    ))}
  </div>
);
const Filters = () => (
  <div className="flex justify-between">
    <div className="flex gap-3">
      {["Filter", "Level", "Category"].map((f) => (
        <span
          key={f}
          className="rounded-full border border-gray-300 px-5 py-2.5"
        >
          {f}
        </span>
      ))}
    </div>
    <span className="rounded-full border border-gray-300 px-5 py-2.5">
      Most relevant
    </span>
  </div>
);

export function Home() {
  const paths = [
    "Design",
    "Development",
    "IT & Software",
    "Business",
    "Marketing",
    "Photography",
  ];
  return (
    <>
      <section className="grid-bg relative overflow-hidden text-center text-white">
        <div className="relative z-10">
          <Nav />
        </div>
        <div className="wrap relative z-10 pb-[360px] pt-12">
          <h1 className="font-head text-[56px] font-semibold leading-tight">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p className="mt-6 text-sm opacity-90">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
          <div className="mx-auto mt-10 flex max-w-[520px] items-center gap-3 rounded-full bg-white/0">
            <label className="flex h-12 flex-1 items-center gap-2 rounded-full bg-white px-4 text-gray-500">
              <Search size={16} />
              <input
                placeholder="Course, topic, creator"
                className="w-full outline-none"
              />
            </label>
            <Btn>Search</Btn>
          </div>
        </div>
        {/* Drop your exported hero photo at /public/hero.png */}
        <div className="absolute -bottom-[260px] left-1/2 z-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-volt" />
        <img
          src="/hero.png"
          alt=""
          className="absolute bottom-0 left-1/2 z-[5] h-[330px] -translate-x-1/2"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <div className="absolute bottom-24 right-[26%] z-10 rounded-2xl bg-volt p-4 text-left text-ink">
          <p className="text-xs">Learning Progress</p>
          <p className="font-head text-4xl font-semibold">55%</p>
        </div>
      </section>
      <div className="bg-gray-100 py-12">
        <div className="wrap flex justify-between font-head text-xl font-semibold text-gray-500">
          {Array(5)
            .fill("Logoipsum")
            .map((l, i) => (
              <span key={i}>◐ {l}</span>
            ))}
        </div>
      </div>
      <section className="wrap py-20 text-center">
        <H2>
          Discover Your Passion,
          <br />
          Build Your Skills
        </H2>
        <p className="mx-auto mt-5 max-w-[800px] text-sm text-gray-500">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts.
        </p>
        <div className="mx-auto my-8 flex max-w-[1000px] flex-wrap justify-center gap-3">
          {[...cats, "Film & Video", "Crafts", "Data Science", "+ More"].map(
            (c, i) => (
              <Pill key={c} on={!i}>
                {c}
              </Pill>
            ),
          )}
        </div>
        <div className="text-left">
          <Grid />
        </div>
      </section>
      <section className="wrap text-center">
        <h2 className="font-head text-3xl font-semibold">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-6">
          {paths.map((p) => (
            <div
              key={p}
              className="rounded-2xl border border-gray-300 px-4 py-8"
            >
              <div className="mx-auto mb-3 h-9 w-9 rounded-lg bg-volt" />
              {p}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-24 bg-gradient-to-b from-lime-50 to-white py-24">
        <div className="wrap grid items-center gap-12 md:grid-cols-2">
          <div>
            <H2>Your Path to Professional Growth Starts Here!</H2>
            <p className="mt-6 text-sm text-gray-600">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey.
            </p>
            <div className="mt-8 flex gap-12">
              {[
                ["12K", "Students"],
                ["70+", "Courses"],
                ["16", "Creators"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-head text-3xl font-semibold text-brand">
                    {n}
                  </p>
                  <p className="text-sm text-gray-500">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[340px] rounded-3xl bg-gradient-to-br from-indigo-100 to-lime-100" />
        </div>
        <div className="wrap mt-24 grid items-center gap-12 md:grid-cols-2">
          <div className="h-[340px] rounded-3xl bg-gradient-to-br from-lime-100 to-indigo-100" />
          <div>
            <H2>Create &amp; Manage Courses Easily.</H2>
            <p className="mt-5 text-sm">
              <b className="text-brand">ByteSpace</b> supports individuals or
              entities in the creation, publication, and administration of
              educational courses.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((t) => (
                <li key={t}>
                  <span className="mr-2 text-brand">●</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="grid-bg py-24 text-center text-white">
        <div className="wrap">
          <H2>
            Unlock Your Potential as a<br />
            Creator with ByteSpace
          </H2>
          <p className="mx-auto mt-6 max-w-[800px] text-sm">
            Register now and become part of a community comprising over 10,000
            local and international creators.
          </p>
          <Btn className="mt-8">Join as Creator</Btn>
        </div>
      </section>
      <section className="bg-gradient-to-b from-lime-100 to-white py-20">
        <div className="wrap">
          <div className="grid gap-10 md:grid-cols-2">
            <H2>
              Discover What Our
              <br />
              Community Is Saying
            </H2>
            <p className="text-sm text-gray-600">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Sarah M.", "Enthusiastic Learner"],
              ["James L.", "Lifelong Learner"],
              ["Alex B.", "Inspired Creator"],
            ].map(([n, r]) => (
              <div
                key={n}
                className="rounded-3xl border border-gray-200 bg-white p-8"
              >
                <div className="mb-4 h-12 w-12 rounded-full bg-amber-300" />
                <p className="font-medium">{n}</p>
                <p className="mb-3 text-sm text-brand">{r}</p>
                <p className="text-sm text-gray-600">
                  "ByteSpace has transformed my approach to learning. The
                  diverse range of courses provided by creators exceeded my
                  expectations."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export function Courses() {
  return (
    <>
      <section className="grid-bg pb-12 text-center text-white">
        <Nav />
        <h1 className="font-head text-[40px] font-semibold">
          Find Your Next Course
        </h1>
        <div className="mx-auto mt-8 flex max-w-[640px] gap-3">
          <label className="flex h-12 flex-1 items-center gap-2 rounded-full bg-white px-4 text-gray-500">
            <Search size={16} />
            <input placeholder="Search" className="w-full outline-none" />
          </label>
          <Btn>Courses ⌄</Btn>
        </div>
      </section>
      <div className="wrap space-y-6 py-12">
        <Filters />
        <div className="flex flex-wrap gap-3">
          {cats.map((c, i) => (
            <Pill key={c} on={!i}>
              {c}
            </Pill>
          ))}
        </div>
        <Grid n={18} />
        <div className="flex items-center justify-center gap-6 pt-6">
          <ChevronLeft className="rounded-full border p-2" size={40} />
          {[1, 2, 3, 4, 5].map((n) => (
            <span key={n} className={n === 1 ? "text-gray-400" : "font-medium"}>
              {n}
            </span>
          ))}
          <ChevronRight className="rounded-full border p-2" size={40} />
        </div>
      </div>
      <Footer />
    </>
  );
}

const lessons = [
  ["01", "Introduction to Digital Assets", "12 mins"],
  ["02", "Design Principles for Impacts", "21 mins"],
  ["03", "Advanced Techniques in Digital Creation", "16 mins"],
];
const points = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];
const modules = [
  "Introduction to Digital Assets",
  "Design Principles for Impact",
  "User-Centric Design Strategies",
  "Interactive Media and Engagement",
  "Project Showcase and Critique",
  "Optimizing Digital Assets for Various Platforms",
];
const reviewers = [
  "PurePearl Studio",
  "Albert Flores",
  "Cody Fisher",
  "Brooklyn Simmons",
];

export function Course() {
  const [tab, setTab] = useState("About");
  const h3 = "mb-3 mt-8 font-head text-xl font-medium";
  return (
    <>
      <div className="relative">
        <div className="grid-bg absolute inset-x-0 top-0 h-[560px]" />
        <div className="relative text-white">
          <Nav />
          <div className="wrap">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="font-head text-[34px] font-semibold">
                  Build Digital Asset: A Comprehensive Guide
                </h1>
                <p className="font-head text-lg font-medium">
                  Unlock the Power of Digital Creation with Expert Guidance
                </p>
                <p className="mt-4">
                  by{" "}
                  <Link to="/creators/purepearl" className="text-volt">
                    purepearl studio
                  </Link>
                </p>
              </div>
              <Btn className="flex items-center gap-2 !px-5 !py-2">
                <Share2 size={16} />
                Share
              </Btn>
            </div>
            <div className="mt-4 flex gap-4 text-sm text-ink">
              {["Intermediate", "★ 4.8 (172 reviews)", "199 Students"].map(
                (t) => (
                  <span key={t} className="rounded-full bg-white px-5 py-2.5">
                    {t}
                  </span>
                ),
              )}
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-[1fr_380px]">
              <div>
                <div className="mb-24 grid h-[360px] place-items-center rounded-3xl bg-gradient-to-b from-gray-100 to-gray-300">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-black/30 text-white">
                    <Play fill="white" />
                  </span>
                </div>
                <div className="text-ink">
                  <div className="flex gap-3">
                    {["About", "Lesson", "Reviews"].map((t) => (
                      <button key={t} onClick={() => setTab(t)}>
                        <Pill on={tab === t}>{t}</Pill>
                      </button>
                    ))}
                  </div>
                  {tab === "About" && (
                    <>
                      <h3 className={h3}>Description</h3>
                      <p className="text-sm leading-7 text-gray-600">
                        Embark on an enlightening exploration into the world of
                        digital creation with our comprehensive course, "Build
                        Digital Assets: A Comprehensive Guide." From
                        foundational concepts to mastering advanced techniques,
                        this guide is meticulously curated to empower you.
                      </p>
                      <h3 className={h3}>Sneak Peak</h3>
                      <div className="grid grid-cols-4 gap-4">
                        {[
                          "from-stone-300 to-stone-500",
                          "from-slate-700 to-slate-900",
                          "from-emerald-200 to-slate-300",
                          "from-fuchsia-500 to-zinc-800",
                        ].map((g) => (
                          <div
                            key={g}
                            className={`h-[118px] rounded-xl bg-gradient-to-br ${g}`}
                          />
                        ))}
                      </div>
                      <h3 className={h3}>Key Points</h3>
                      <ul className="space-y-3 text-sm">
                        {points.map((p) => (
                          <li key={p}>
                            <span className="mr-2 text-brand">✔</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {tab === "Lesson" && (
                    <>
                      <h3 className={h3}>Explore the Modules</h3>
                      <p className="text-sm text-gray-600">
                        Immerse yourself in the course content as we break down
                        each module into comprehensive lessons.
                      </p>
                      <h3 className={h3}>Lesson List</h3>
                      <div className="space-y-5">
                        {modules.map((m, i) => (
                          <div key={m} className="flex gap-4">
                            <span className="h-16 w-16 shrink-0 rounded-2xl bg-volt" />
                            <div>
                              <p className="font-medium">
                                Module {i + 1}: {m}
                              </p>
                              <p className="text-sm text-gray-600">
                                Master the principles that drive impactful
                                designs with hands-on experiences.
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <h3 className={h3}>Lesson Progress Tracking</h3>
                      <div className="rounded-2xl border border-gray-300 p-4">
                        <p className="text-sm">Learning Progress</p>
                        <p className="font-head text-3xl font-semibold">55%</p>
                        <div className="mt-2 h-1.5 rounded bg-gray-200">
                          <div className="h-full w-[55%] rounded bg-volt" />
                        </div>
                      </div>
                    </>
                  )}
                  {tab === "Reviews" && (
                    <>
                      <h3 className={h3}>What Learners Are Saying</h3>
                      <div className="flex gap-8 rounded-2xl border border-gray-300 p-8">
                        <div className="grid h-[104px] w-24 place-items-center rounded-lg bg-volt text-center">
                          <div>
                            <p className="text-xs">Ratings</p>
                            <p className="font-head text-4xl font-semibold">
                              4.7
                            </p>
                          </div>
                        </div>
                        <div className="flex-1 space-y-2.5">
                          {[720, 120, 21, 12, 16].map((n, i) => (
                            <div key={i} className="flex items-center gap-4">
                              <div className="h-1.5 flex-1 rounded bg-gray-200">
                                <div
                                  className="h-full rounded bg-volt"
                                  style={{ width: `${Math.max(n / 8, 3)}%` }}
                                />
                              </div>
                              <span className="w-28 text-gray-600">★★★★★</span>
                              <span className="w-8 text-sm">{n}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <h3 className={h3}>Individual Reviews:</h3>
                      <div className="mb-5 flex gap-3">
                        {["All rating", "★ 5", "★ 4", "★ 3", "★ 2", "★ 1"].map(
                          (r, i) => (
                            <Pill key={r} on={!i}>
                              {r}
                            </Pill>
                          ),
                        )}
                      </div>
                      <div className="space-y-5">
                        {reviewers.map((r) => (
                          <div
                            key={r}
                            className="rounded-2xl border border-gray-300 p-7"
                          >
                            <div className="flex justify-between">
                              <div className="flex items-center gap-3">
                                <span className="h-10 w-10 rounded-full bg-stone-500" />
                                <div>
                                  <p>{r}</p>
                                  <p className="text-sm text-gray-500">
                                    UI/UX Designer
                                  </p>
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">
                                a year ago
                              </span>
                            </div>
                            <p className="my-3 text-gray-600">★★★★★</p>
                            <p className="text-sm text-gray-600">
                              "The course provided me with a comprehensive
                              understanding of digital asset creation. Highly
                              recommended!"
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <aside className="self-start rounded-3xl border border-gray-200 bg-white p-8 text-ink">
                <h3 className="font-head text-xl font-medium">
                  112 Lessons (24 hours)
                </h3>
                <div className="mt-4 space-y-3 text-sm">
                  {lessons.map(([n, t, m]) => (
                    <div key={n} className="flex gap-3">
                      <span>{n}</span>
                      <span className="flex-1">{t}</span>
                      <span className="text-brand">{m}</span>
                    </div>
                  ))}
                  <p className="text-gray-500">99 more videos</p>
                </div>
                <p className="mt-6 text-sm text-gray-600">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>
                <p className="mt-4 font-head text-3xl font-semibold text-brand">
                  $25
                  <span className="font-sans text-sm font-normal text-gray-500">
                    /lifetime
                  </span>
                </p>
                <Btn className="mt-4 w-full">Enroll Now</Btn>
                <h3 className="mb-3 mt-6 font-head text-xl font-medium">
                  This course include
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {[
                    "Learning Resources",
                    "Quality Lesson Videos",
                    "Certificate of Completion",
                    "Private Consultation",
                  ].map((t) => (
                    <li key={t}>
                      <span className="mr-2 text-brand">▣</span>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-3 border-t pt-6">
                  <span className="h-10 w-10 rounded-full bg-stone-600" />
                  <div>
                    <p>PurePearl Studio</p>
                    <p className="text-sm text-gray-500">
                      Professional Creator
                    </p>
                  </div>
                </div>
                <Link
                  to="/creators/purepearl"
                  className="mt-5 inline-block rounded-full border border-gray-300 px-5 py-2 text-sm"
                >
                  See Full Profile
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export function Creator() {
  return (
    <>
      <section className="grid-bg text-white">
        <Nav />
        <div className="wrap pb-14 pt-4">
          <div className="flex items-center gap-6">
            <span className="h-24 w-24 rounded-2xl bg-rose-300" />
            <div>
              <div className="flex items-center gap-3">
                <h1 className="font-head text-4xl font-semibold">
                  PurePearl Studio
                </h1>
                <span className="rounded-full bg-volt px-5 py-1.5 text-ink">
                  Creator
                </span>
              </div>
              <p className="text-lg">Passionate UI/UX, Web designer</p>
            </div>
          </div>
          <p className="mt-10 leading-8">
            Welcome to the creative world of [Creator's Name]. Here, you'll
            discover the passion, expertise, and inspiration that drive my
            creative journey. Let's explore and learn together!
          </p>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-4 text-ink">
              <span className="rounded-full bg-white px-6 py-3">
                <b className="mr-2 font-normal text-brand">3</b>Products
              </span>
              <span className="rounded-full bg-white px-6 py-3">
                <b className="mr-2 font-normal text-brand">12</b>Followers
              </span>
            </div>
            <Btn>Follow</Btn>
          </div>
        </div>
      </section>
      <div className="wrap space-y-6 py-12">
        <Filters />
        <Grid />
      </div>
      <Footer />
    </>
  );
}

export function Auth({ mode }: { mode: "login" | "register" }) {
  const login = mode === "login";
  const Field = ({ l, p }: { l: string; p: string }) => (
    <label className="mt-5 block text-sm">
      {l}
      <input
        placeholder={p}
        type={l === "Password" ? "password" : "text"}
        className="mt-2 h-[52px] w-full rounded-xl border border-gray-300 bg-gray-50 px-5 text-base"
      />
    </label>
  );
  return (
    <div className="grid-bg min-h-screen">
      <div className="wrap grid gap-10 pt-8 md:grid-cols-[1fr_580px]">
        <div className="text-white">
          <Logo icon />
          <h2 className="mt-8 font-head text-xl font-medium">
            {login ? "Sign in with ease" : "Sign up and come in"}
          </h2>
          <p className="mt-4 max-w-[460px] text-lg leading-8">
            {login
              ? "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
              : "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"}
          </p>
          <div className="relative mt-24 h-[420px] max-w-[480px]">
            <div className="absolute left-16 top-0 w-[370px] rounded-3xl bg-white p-4 text-ink">
              <div className="h-[195px] rounded-2xl bg-gradient-to-br from-slate-800 to-cyan-700" />
              <p className="mt-4 font-head text-xl font-medium">
                the Power of Big Data
              </p>
              <p className="mt-3 font-head text-xl font-semibold text-brand">
                $25
              </p>
            </div>
            <div className="absolute bottom-0 left-28 rounded-2xl bg-volt p-5 text-ink">
              <p>Happy Students</p>
              <div className="mt-2">
                <Avatars />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 self-start rounded-3xl bg-white p-10 md:mt-0">
          <p className="text-brand">
            {login ? "Sign In" : "Create an Account"}
          </p>
          <h1 className="mt-1 font-head text-[44px] font-semibold leading-tight">
            {login ? (
              "Welcome Back"
            ) : (
              <>
                Welcome to
                <br />
                ByteSpace
              </>
            )}
          </h1>
          {!login && <Field l="Full Name" p="Jamie Davis" />}
          <Field l="Email" p="designer@example.com" />
          <Field l="Password" p="********" />
          <div className="mt-6 text-right">
            <Btn>{login ? "Sign In" : "Continue"}</Btn>
          </div>
          {login && (
            <>
              <div className="my-10 flex items-center gap-4 text-gray-500">
                <hr className="flex-1" />
                or
                <hr className="flex-1" />
              </div>
              <div className="flex justify-center gap-4">
                {["f", "G"].map((s) => (
                  <span
                    key={s}
                    className="grid h-[72px] w-[72px] place-items-center rounded-2xl border border-gray-300 text-3xl font-bold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </>
          )}
          <p className="mt-16 text-center text-gray-500">
            {login ? (
              <>
                New user?{" "}
                <Link to="/register" className="text-brand">
                  Create an account
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link to="/login" className="text-brand">
                  Login
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export function NotFound() {
  return (
    <>
      <section className="grid-bg relative pb-32 text-center text-white">
        <Nav />
        <div className="relative">
          <div className="bg-gradient-to-b from-volt to-transparent bg-clip-text font-head text-[420px] font-bold leading-none text-transparent">
            404
          </div>
          <h1 className="relative -mt-40 font-head text-[64px] font-semibold leading-tight">
            The page you are looking
            <br />
            for doesn't exist
          </h1>
          <p className="mt-8 text-lg">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link to="/">
            <Btn className="mt-10">Back to Home</Btn>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
