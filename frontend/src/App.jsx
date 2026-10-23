import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Booking from './pages/booking'
import PressKit from './pages/press-kit'
import Shows from './pages/shows'
import Contact from './pages/contact'
import SocialMedia from './components/social-media-links/social-media-links.component'

function App() {
  return (
    <>
    <h1>this is the dumpster site!</h1>

      {/* NavBar - will create a component of this later */}
      <nav className="nav-bar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/press-kit">Press Kit</Link>
          <Link to="/shows">Shows</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <SocialMedia />
      </nav>

      {/* Page content area */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/press-kit" element={<PressKit />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer - will create a component of this later */}
    
    </>
  )
}

export default App
