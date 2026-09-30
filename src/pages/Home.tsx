import { Search } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { Pill } from "../components/ui/Pill";
import { SectionHeading } from "../components/common/SectionHeading";
import { CourseGrid } from "../components/course/CourseGrid";
import { cats } from "../data/categories";
// @ts-expect-error JavaScript component has no TypeScript declaration.
import { LearningProgressCard } from "../components/course/LearningProgressCard";

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
          <Navbar />
        </div>
        <div className="wrap relative z-10 pb-[360px] pt-16">
          <h1 className="font-head text-[72px] font-semibold leading-tight">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p className="mt-6 text-md font-light opacity-90">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
          <div className="mx-auto mt-10 mb-35 flex max-w-[520px] items-center gap-3 rounded-full bg-white/0">
            <label className="flex h-12 flex-1 items-center gap-2 rounded-full bg-white px-4 text-gray-500">
              <Search size={16} />
              <input
                placeholder="Course, topic, creator"
                className="w-full outline-none"
              />
            </label>
            <Button>Search</Button>
          </div>
        </div>

        <div className="absolute -bottom-[650px] left-[755px] z-0 h-[1050px] w-[1050px] -translate-x-1/2 rounded-full bg-volt" />

        {/* Hero Male Banner */}

        <img
          src="/hero-male.png"
          alt=""
          className="absolute bottom-0 left-1/2 z-[5] h-[450px] -translate-x-1/2"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />

        {/* Left Neon Spiral */}
        <img
          src="/neon-spiral.png"
          alt=""
          className="absolute top-[240px] left-[120px] z-[5] h-[350px] -translate-x-1/2"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />

        {/* Right Neon Cylinder */}
        <img
          src="/neon-cylinder.png"
          alt=""
          className="absolute top-[240px] right-[-100px] z-[5] h-[350px] -translate-x-1/2"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />

        {/* left white donut */}
        <img
          src="/white-donut.png"
          alt=""
          className="absolute top-[650px] left-[250px] z-[5] h-[330px] -translate-x-1/2"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />

        {/* right white spiral */}
        <img
          src="/white-spiral.png"
          alt=""
          className="absolute top-[650px] right-[-80px] z-[5] h-[330px] -translate-x-1/2"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />

        {/* left white spiral */}
        <img
          src="/white-spiral-2.png"
          alt=""
          className="absolute top-[500px] left-[400px] z-[5] h-[175px] -translate-x-1/2"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />

        {/* right white cone */}
        <img
          src="/white-cone.png"
          alt=""
          className="absolute top-[500px] right-[200px] z-[5] h-[175px] -translate-x-1/2"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />

        <LearningProgressCard className="absolute bottom-[220px] left-[62%] z-[5] -translate-x-1/2" />
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
        <SectionHeading>
          Discover Your Passion,
          <br />
          Build Your Skills
        </SectionHeading>
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
          <CourseGrid />
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
            <SectionHeading>
              Your Path to Professional Growth Starts Here!
            </SectionHeading>
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
            <SectionHeading>Create &amp; Manage Courses Easily.</SectionHeading>
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
          <SectionHeading>
            Unlock Your Potential as a<br />
            Creator with ByteSpace
          </SectionHeading>
          <p className="mx-auto mt-6 max-w-[800px] text-sm">
            Register now and become part of a community comprising over 10,000
            local and international creators.
          </p>
          <Button className="mt-8">Join as Creator</Button>
        </div>
      </section>
      <section className="bg-gradient-to-b from-lime-100 to-white py-20">
        <div className="wrap">
          <div className="grid gap-10 md:grid-cols-2">
            <SectionHeading>
              Discover What Our
              <br />
              Community Is Saying
            </SectionHeading>
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
