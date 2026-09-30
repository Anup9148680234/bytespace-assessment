import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Button } from '../components/ui/Button'
import { FilterBar } from '../components/course/FilterBar'
import { CourseGrid } from '../components/course/CourseGrid'

export function Creator() {
  return (<>
    <section className="grid-bg text-white"><Navbar /><div className="wrap pb-14 pt-4">
      <div className="flex items-center gap-6"><span className="h-24 w-24 rounded-2xl bg-rose-300" /><div><div className="flex items-center gap-3"><h1 className="font-head text-4xl font-semibold">PurePearl Studio</h1><span className="rounded-full bg-volt px-5 py-1.5 text-ink">Creator</span></div><p className="text-lg">Passionate UI/UX, Web designer</p></div></div>
      <p className="mt-10 leading-8">Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!</p>
      <div className="mt-8 flex items-center justify-between"><div className="flex gap-4 text-ink"><span className="rounded-full bg-white px-6 py-3"><b className="mr-2 font-normal text-brand">3</b>Products</span><span className="rounded-full bg-white px-6 py-3"><b className="mr-2 font-normal text-brand">12</b>Followers</span></div><Button>Follow</Button></div>
    </div></section>
    <div className="wrap space-y-6 py-12"><FilterBar /><CourseGrid /></div>
    <Footer />
  </>)
}
