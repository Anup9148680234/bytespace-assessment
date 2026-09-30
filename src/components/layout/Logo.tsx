import { Link } from 'react-router-dom'

export const Logo = ({ dark, icon }: { dark?: boolean; icon?: boolean }) => (
  <Link to="/" className={`flex items-center gap-2 font-head text-2xl font-bold ${dark ? 'text-ink' : 'text-white'}`}>
    <span className="grid h-9 w-9 place-items-center rounded-xl rounded-tr-3xl bg-volt text-xl font-extrabold text-brand">b</span>{!icon && 'ByteSpace'}
  </Link>
)
