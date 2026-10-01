import { Link } from 'react-router-dom'

export const Logo = ({ dark, icon }: { dark?: boolean; icon?: boolean }) => (
  <Link to="/" className={`flex items-center gap-2 font-head text-2xl font-bold ${dark ? 'text-ink' : 'text-white'}`}>
      <img src="/logo.png" alt="" />
      <div className="pt-2">{!icon && 'ByteSpace'}</div>
      
  </Link>
)
