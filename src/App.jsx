import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import TechSkills from './pages/TechSkills'
import GuitarPoetry from './pages/GuitarPoetry'
import Basketball from './pages/Basketball'
import './App.css'

function Navigation() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Tech
        </Link>
        <Link 
          to="/guitar-poetry" 
          className={`nav-link ${location.pathname === '/guitar-poetry' ? 'active' : ''}`}
        >
          Guitar & Poetry
        </Link>
        <Link 
          to="/basketball" 
          className={`nav-link ${location.pathname === '/basketball' ? 'active' : ''}`}
        >
          Basketball
        </Link>
      </div>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<TechSkills />} />
          <Route path="/guitar-poetry" element={<GuitarPoetry />} />
          <Route path="/basketball" element={<Basketball />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
