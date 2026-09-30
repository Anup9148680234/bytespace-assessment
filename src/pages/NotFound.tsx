import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Button } from '../components/ui/Button'

export function NotFound() {
  return (<>
    <section className="grid-bg relative pb-32 text-center text-white"><Navbar />
      <div className="relative">
        <div className="bg-gradient-to-b from-volt to-transparent bg-clip-text font-head text-[420px] font-bold leading-none text-transparent">404</div>
        <h1 className="relative -mt-40 font-head text-[64px] font-semibold leading-tight">The page you are looking<br />for doesn't exist</h1>
        <p className="mt-8 text-lg">Try to use a correct url or go back to homepage to start again</p>
        <Link to="/"><Button className="mt-10">Back to Home</Button></Link>
      </div>
    </section>
    <Footer />
  </>)
}
