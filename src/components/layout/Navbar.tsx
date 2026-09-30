import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { Logo } from './Logo'

export const Navbar = () => (
  <nav className="wrap flex items-center justify-between py-8 text-white">
    <Logo />
    <div className="flex gap-8 text-[17px]"><Link to="/" className="font-medium">Home</Link><Link to="/courses">Courses</Link><Link to="/creators/purepearl">Creators</Link></div>
    <div className="flex items-center gap-5 text-[17px]"><Link to="/login">Sign In</Link><Link to="/register">Join Us</Link><ShoppingBag size={20} /></div>
  </nav>
)
