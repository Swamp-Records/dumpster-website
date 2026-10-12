import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Booking from './pages/booking'
import PressKit from './pages/press-kit'
import Shows from './pages/shows'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <h1>this is the dumpster site!</h1>

      {/* NavBar - will create a component of this later */}
      <nav style={{ padding: '20px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/booking" style={{ marginRight: '15px' }}>Booking</Link>
        <Link to="/press-kit" style={{ marginRight: '15px' }}>Press Kit</Link>
        <Link to="/shows" style={{ marginRight: '15px' }}>Shows</Link>
      </nav>

      {/* Page content area */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/press-kit" element={<PressKit />} />
        <Route path="/shows" element={<Shows />} />
      </Routes>

      {/* Footer - will create a component of this later */}
    
    </>
  )
}

export default App
