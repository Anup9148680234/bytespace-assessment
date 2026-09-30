import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Button } from '../components/ui/Button'
import { Pill } from '../components/ui/Pill'
import { FilterBar } from '../components/course/FilterBar'
import { CourseGrid } from '../components/course/CourseGrid'
import { cats } from '../data/categories'

export function Courses() {
  return (<>
    <section className="grid-bg pb-12 text-center text-white"><Navbar /><h1 className="font-head text-[40px] font-semibold">Find Your Next Course</h1>
      <div className="mx-auto mt-8 flex max-w-[640px] gap-3"><label className="flex h-12 flex-1 items-center gap-2 rounded-full bg-white px-4 text-gray-500"><Search size={16} /><input placeholder="Search" className="w-full outline-none" /></label><Button>Courses ⌄</Button></div></section>
    <div className="wrap space-y-6 py-12"><FilterBar /><div className="flex flex-wrap gap-3">{cats.map((c, i) => <Pill key={c} on={!i}>{c}</Pill>)}</div><CourseGrid n={18} />
      <div className="flex items-center justify-center gap-6 pt-6"><ChevronLeft className="rounded-full border p-2" size={40} />{[1, 2, 3, 4, 5].map(n => <span key={n} className={n === 1 ? 'text-gray-400' : 'font-medium'}>{n}</span>)}<ChevronRight className="rounded-full border p-2" size={40} /></div></div>
    <Footer />
  </>)
}
