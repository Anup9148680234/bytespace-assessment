import { Link } from 'react-router-dom'
import { Logo } from '../layout/Logo'
import { Avatars } from '../ui/Avatars'
import { Button } from '../ui/Button'

export function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const login = mode === 'login'
  const Field = ({ l, p }: { l: string; p: string }) => <label className="mt-5 block text-sm">{l}<input placeholder={p} type={l === 'Password' ? 'password' : 'text'} className="mt-2 h-[52px] w-full rounded-xl border border-gray-300 bg-gray-50 px-5 text-base" /></label>
  return (
    <div className="grid-bg min-h-screen">
      <div className="wrap grid gap-10 pt-8 md:grid-cols-[1fr_580px]">
        <div className="text-white"><Logo icon />
          <h2 className="mt-8 font-head text-xl font-medium">{login ? 'Sign in with ease' : 'Sign up and come in'}</h2>
          <p className="mt-4 max-w-[460px] text-lg leading-8">{login ? 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.' : 'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost'}</p>
          <div className="relative mt-24 h-[420px] max-w-[480px]"><div className="absolute left-16 top-0 w-[370px] rounded-3xl bg-white p-4 text-ink"><div className="h-[195px] rounded-2xl bg-gradient-to-br from-slate-800 to-cyan-700" /><p className="mt-4 font-head text-xl font-medium">the Power of Big Data</p><p className="mt-3 font-head text-xl font-semibold text-brand">$25</p></div>
            <div className="absolute bottom-0 left-28 rounded-2xl bg-volt p-5 text-ink"><p>Happy Students</p><div className="mt-2"><Avatars /></div></div></div>
        </div>
        <div className="mb-10 self-start rounded-3xl bg-white p-10 md:mt-0">
          <p className="text-brand">{login ? 'Sign In' : 'Create an Account'}</p>
          <h1 className="mt-1 font-head text-[44px] font-semibold leading-tight">{login ? 'Welcome Back' : <>Welcome to<br />ByteSpace</>}</h1>
          {!login && <Field l="Full Name" p="Jamie Davis" />}<Field l="Email" p="designer@example.com" /><Field l="Password" p="********" />
          <div className="mt-6 text-right"><Button>{login ? 'Sign In' : 'Continue'}</Button></div>
          {login && <><div className="my-10 flex items-center gap-4 text-gray-500"><hr className="flex-1" />or<hr className="flex-1" /></div><div className="flex justify-center gap-4">{['f', 'G'].map(s => <span key={s} className="grid h-[72px] w-[72px] place-items-center rounded-2xl border border-gray-300 text-3xl font-bold">{s}</span>)}</div></>}
          <p className="mt-16 text-center text-gray-500">{login ? <>New user? <Link to="/register" className="text-brand">Create an account</Link></> : <>Already have an account? <Link to="/login" className="text-brand">Login</Link></>}</p>
        </div>
      </div>
    </div>
  )
}
