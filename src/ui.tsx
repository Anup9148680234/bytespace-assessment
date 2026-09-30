import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'

const grads = ['from-amber-200 to-rose-300','from-slate-300 to-slate-500','from-slate-800 to-cyan-700','from-zinc-700 to-zinc-900','from-emerald-100 to-slate-200','from-yellow-200 to-orange-300']
// TODO: replace gradient `g` with real exported images: img: '/img/course-1.jpg'
export const courses = ['Learn Figma from Basic','Build Digital Asset','the Power of Big Data','Balancing Productivity an…','Mastering Money Manage…','From Idea to Startup Succ…'].map((title, i) => ({ id: i + 1, title, g: grads[i] }))

export const Logo = ({ dark, icon }: { dark?: boolean; icon?: boolean }) => (
  <Link to="/" className={`flex items-center gap-2 font-head text-2xl font-bold ${dark ? 'text-ink' : 'text-white'}`}>
    <span className="grid h-9 w-9 place-items-center rounded-xl rounded-tr-3xl bg-volt text-xl font-extrabold text-brand">b</span>{!icon && 'ByteSpace'}
  </Link>
)
export const Nav = () => (
  <nav className="wrap flex items-center justify-between py-8 text-white">
    <Logo />
    <div className="flex gap-8 text-[17px]"><Link to="/" className="font-medium">Home</Link><Link to="/courses">Courses</Link><Link to="/creators/purepearl">Creators</Link></div>
    <div className="flex items-center gap-5 text-[17px]"><Link to="/login">Sign In</Link><Link to="/register">Join Us</Link><ShoppingBag size={20} /></div>
  </nav>
)
export const Btn = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <button className={`rounded-full bg-volt px-6 py-3 text-[17px] font-medium text-ink ${className}`}>{children}</button>
)
export const Pill = ({ children, on }: { children: React.ReactNode; on?: boolean }) => (
  <span className={`inline-block cursor-pointer rounded-full px-4 py-2 text-sm ${on ? 'bg-volt' : 'bg-gray-100'}`}>{children}</span>
)
export const Avatars = () => (
  <div className="flex items-center">
    {['bg-rose-300', 'bg-amber-300', 'bg-stone-600', 'bg-sky-300'].map((c, i) => <span key={i} className={`-ml-2 h-8 w-8 rounded-full border-2 border-white first:ml-0 ${c}`} />)}
    <span className="-ml-2 grid h-8 w-8 place-items-center rounded-full bg-volt text-xs font-medium">26+</span>
  </div>
)
export const CourseCard = ({ c }: { c: (typeof courses)[number] }) => (
  <Link to="/course/1" className="block rounded-3xl border border-gray-300 bg-white p-4">
    <div className={`relative h-[195px] rounded-2xl bg-gradient-to-br ${c.g}`}>
      <div className="absolute bottom-2 left-3 flex gap-2 text-xs text-gray-700">
        {['17 Lessons', '2 hours 16 mins', '59 Comments'].map(t => <span key={t} className="rounded-full bg-white/50 px-3 py-1.5 backdrop-blur">{t}</span>)}
      </div>
    </div>
    <div className="mt-4 flex items-center justify-between gap-2 font-head text-xl font-medium"><span className="truncate">{c.title}</span><span className="font-sans text-base font-normal text-gray-500">4.5 ★</span></div>
    <p className="text-xs text-gray-500">by <span className="text-brand">purepearl studio</span></p>
    <div className="mt-4 flex items-center gap-3"><span className="rounded-full bg-gray-100 px-3 py-2 text-xs">Beginner</span><Avatars /></div>
    <p className="mt-3 font-head text-xl font-semibold text-brand">$25<span className="font-sans text-xs font-normal text-gray-500">/lifetime</span></p>
  </Link>
)
const links = ['Featured Courses','Development','Become a Creator','Featured Categories','Marketing','Affiliate Program','Business','Photography','Contact','IT','Finance','Help','Design','Sport','About']
export const Footer = () => (
  <footer className="mt-24 border-t border-gray-200 pt-16">
    <div className="wrap grid gap-12 md:grid-cols-2">
      <div className="max-w-[500px]">
        <Logo dark /><p className="mt-3 text-sm">Stay Up to date with our latest features and releases by joining our newsletter.</p>
        <div className="mt-10 flex gap-4"><input placeholder="Enter your email" className="h-[52px] flex-1 rounded-full border border-gray-300 px-6" /><Btn>Search</Btn></div>
        <p className="mt-4 text-xs">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
      </div>
      <div className="grid grid-cols-3 content-start gap-y-5 text-sm">{links.map(l => <a key={l} href="#">{l}</a>)}</div>
    </div>
    <div className="wrap mt-24 flex justify-between border-t border-gray-200 py-8 text-xs"><span>@ 2023 ByteSpace. All rights reserved.</span><span className="flex gap-6"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookies Settings</a></span></div>
  </footer>
)
