import './App.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/home'
import Booking from './pages/booking'
import About from './pages/about'
import PressKit from './pages/press-kit'
import Shows from './pages/shows'
import Contact from './pages/contact'
import SocialMedia from './components/social-media-links/social-media-links.component'

function App() {
  return (
    <>

      {/* NavBar - will create a component of this later */}
      <nav className="nav-bar">
        <Link className="nav-brand" to="/" aria-label="Dumpster home">
          <img src="/logo.png" alt="Dumpster" />
        </Link>
        <div className="nav-links">
          <NavLink to="/about" end>about</NavLink>
          <NavLink to="/shows" end>shows</NavLink>
          <NavLink to="/press-kit" end>epk</NavLink>
          <NavLink to="/contact" end>contact</NavLink>
        </div>
      </nav>

      {/* Page content area */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/press-kit" element={<PressKit />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer - will create a component of this later */}
    
      <footer>
        <SocialMedia />
      </footer>
    </>
  )
}

export default App
