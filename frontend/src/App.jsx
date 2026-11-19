import './App.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import logo from './assets/dumpster-logo.webp'
import footerPhoto from './assets/dumpster-footer.webp'
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

      <nav className="nav-bar" aria-label="Main">
        <Link className="nav-brand" to="/" aria-label="Dumpster home">
          <img src={logo} alt="" width="480" height="147" />
        </Link>
        <div className="nav-links">
          <NavLink to="/about" end>about</NavLink>
          <NavLink to="/shows" end>shows</NavLink>
          {/* <NavLink to="/press-kit" end>epk</NavLink> - removing this page for now*/}
          <NavLink to="/contact" end>contact</NavLink>
        </div>
      </nav>

      {/* Page content area */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/press-kit" element={<PressKit />} /> */}
        <Route path="/shows" element={<Shows />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="site-footer">
        <div className="site-footer-art">
          <img src={footerPhoto} alt="" width="1437" height="359" loading="lazy" />
          <SocialMedia />
        </div>
      </footer>
    </>
  )
}

export default App
