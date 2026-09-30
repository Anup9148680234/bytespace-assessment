import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Share2, Play } from 'lucide-react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Button } from '../components/ui/Button'
import { Pill } from '../components/ui/Pill'
import { lessons, points, modules, reviewers } from '../data/courseDetails'

export function CourseDetails() {
  const [tab, setTab] = useState('About')
  const h3 = 'mb-3 mt-8 font-head text-xl font-medium'
  return (<>
    <div className="relative">
      <div className="grid-bg absolute inset-x-0 top-0 h-[560px]" />
      <div className="relative text-white"><Navbar />
        <div className="wrap">
          <div className="flex items-start justify-between"><div><h1 className="font-head text-[34px] font-semibold">Build Digital Asset: A Comprehensive Guide</h1><p className="font-head text-lg font-medium">Unlock the Power of Digital Creation with Expert Guidance</p><p className="mt-4">by <Link to="/creators/purepearl" className="text-volt">purepearl studio</Link></p></div>
            <Button className="flex items-center gap-2 !px-5 !py-2"><Share2 size={16} />Share</Button></div>
          <div className="mt-4 flex gap-4 text-sm text-ink">{['Intermediate', '★ 4.8 (172 reviews)', '199 Students'].map(t => <span key={t} className="rounded-full bg-white px-5 py-2.5">{t}</span>)}</div>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_380px]">
            <div>
              <div className="mb-24 grid h-[360px] place-items-center rounded-3xl bg-gradient-to-b from-gray-100 to-gray-300"><span className="grid h-16 w-16 place-items-center rounded-2xl bg-black/30 text-white"><Play fill="white" /></span></div>
              <div className="text-ink">
                <div className="flex gap-3">{['About', 'Lesson', 'Reviews'].map(t => <button key={t} onClick={() => setTab(t)}><Pill on={tab === t}>{t}</Pill></button>)}</div>
                {tab === 'About' && <><h3 className={h3}>Description</h3><p className="text-sm leading-7 text-gray-600">Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." From foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you.</p>
                  <h3 className={h3}>Sneak Peak</h3><div className="grid grid-cols-4 gap-4">{['from-stone-300 to-stone-500', 'from-slate-700 to-slate-900', 'from-emerald-200 to-slate-300', 'from-fuchsia-500 to-zinc-800'].map(g => <div key={g} className={`h-[118px] rounded-xl bg-gradient-to-br ${g}`} />)}</div>
                  <h3 className={h3}>Key Points</h3><ul className="space-y-3 text-sm">{points.map(p => <li key={p}><span className="mr-2 text-brand">✔</span>{p}</li>)}</ul></>}
                {tab === 'Lesson' && <><h3 className={h3}>Explore the Modules</h3><p className="text-sm text-gray-600">Immerse yourself in the course content as we break down each module into comprehensive lessons.</p><h3 className={h3}>Lesson List</h3>
                  <div className="space-y-5">{modules.map((m, i) => <div key={m} className="flex gap-4"><span className="h-16 w-16 shrink-0 rounded-2xl bg-volt" /><div><p className="font-medium">Module {i + 1}: {m}</p><p className="text-sm text-gray-600">Master the principles that drive impactful designs with hands-on experiences.</p></div></div>)}</div>
                  <h3 className={h3}>Lesson Progress Tracking</h3><div className="rounded-2xl border border-gray-300 p-4"><p className="text-sm">Learning Progress</p><p className="font-head text-3xl font-semibold">55%</p><div className="mt-2 h-1.5 rounded bg-gray-200"><div className="h-full w-[55%] rounded bg-volt" /></div></div></>}
                {tab === 'Reviews' && <><h3 className={h3}>What Learners Are Saying</h3>
                  <div className="flex gap-8 rounded-2xl border border-gray-300 p-8"><div className="grid h-[104px] w-24 place-items-center rounded-lg bg-volt text-center"><div><p className="text-xs">Ratings</p><p className="font-head text-4xl font-semibold">4.7</p></div></div>
                    <div className="flex-1 space-y-2.5">{[720, 120, 21, 12, 16].map((n, i) => <div key={i} className="flex items-center gap-4"><div className="h-1.5 flex-1 rounded bg-gray-200"><div className="h-full rounded bg-volt" style={{ width: `${Math.max(n / 8, 3)}%` }} /></div><span className="w-28 text-gray-600">★★★★★</span><span className="w-8 text-sm">{n}</span></div>)}</div></div>
                  <h3 className={h3}>Individual Reviews:</h3><div className="mb-5 flex gap-3">{['All rating', '★ 5', '★ 4', '★ 3', '★ 2', '★ 1'].map((r, i) => <Pill key={r} on={!i}>{r}</Pill>)}</div>
                  <div className="space-y-5">{reviewers.map(r => <div key={r} className="rounded-2xl border border-gray-300 p-7"><div className="flex justify-between"><div className="flex items-center gap-3"><span className="h-10 w-10 rounded-full bg-stone-500" /><div><p>{r}</p><p className="text-sm text-gray-500">UI/UX Designer</p></div></div><span className="text-sm text-gray-500">a year ago</span></div><p className="my-3 text-gray-600">★★★★★</p><p className="text-sm text-gray-600">"The course provided me with a comprehensive understanding of digital asset creation. Highly recommended!"</p></div>)}</div></>}
              </div>
            </div>
            <aside className="self-start rounded-3xl border border-gray-200 bg-white p-8 text-ink">
              <h3 className="font-head text-xl font-medium">112 Lessons (24 hours)</h3>
              <div className="mt-4 space-y-3 text-sm">{lessons.map(([n, t, m]) => <div key={n} className="flex gap-3"><span>{n}</span><span className="flex-1">{t}</span><span className="text-brand">{m}</span></div>)}<p className="text-gray-500">99 more videos</p></div>
              <p className="mt-6 text-sm text-gray-600">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
              <p className="mt-4 font-head text-3xl font-semibold text-brand">$25<span className="font-sans text-sm font-normal text-gray-500">/lifetime</span></p>
              <Button className="mt-4 w-full">Enroll Now</Button>
              <h3 className="mb-3 mt-6 font-head text-xl font-medium">This course include</h3>
              <ul className="space-y-3 text-sm text-gray-600">{['Learning Resources', 'Quality Lesson Videos', 'Certificate of Completion', 'Private Consultation'].map(t => <li key={t}><span className="mr-2 text-brand">▣</span>{t}</li>)}</ul>
              <div className="mt-6 flex items-center gap-3 border-t pt-6"><span className="h-10 w-10 rounded-full bg-stone-600" /><div><p>PurePearl Studio</p><p className="text-sm text-gray-500">Professional Creator</p></div></div>
              <Link to="/creators/purepearl" className="mt-5 inline-block rounded-full border border-gray-300 px-5 py-2 text-sm">See Full Profile</Link>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>)
}
