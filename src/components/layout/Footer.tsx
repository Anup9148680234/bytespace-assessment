import { Logo } from './Logo'
import { Button } from '../ui/Button'
import { footerLinks } from '../../data/navigation'

export const Footer = () => (
  <footer className="mt-24 border-t border-gray-200 pt-16">
    <div className="wrap grid gap-12 md:grid-cols-2">
      <div className="max-w-[500px]">
        <Logo dark /><p className="mt-3 text-sm">Stay Up to date with our latest features and releases by joining our newsletter.</p>
        <div className="mt-10 flex gap-4"><input placeholder="Enter your email" className="h-[52px] flex-1 rounded-full border border-gray-300 px-6" /><Button>Search</Button></div>
        <p className="mt-4 text-xs">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
      </div>
      <div className="grid grid-cols-3 content-start gap-y-5 text-sm">{footerLinks.map(l => <a key={l} href="#">{l}</a>)}</div>
    </div>
    <div className="wrap mt-24 flex justify-between border-t border-gray-200 py-8 text-xs"><span>@ 2023 ByteSpace. All rights reserved.</span><span className="flex gap-6"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookies Settings</a></span></div>
  </footer>
)
