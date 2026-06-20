import { NavLink } from 'react-router-dom'
import '../styles/sidebar.css'

export default function Sidebar({ onMain = false, isOpen = false, onToggle }) {
    return (
        <>
            {/* Backdrop overlay for mobile to click-to-close */}
            {isOpen && <div className="sidebar-overlay" onClick={onToggle}></div>}

            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                {/* 1. Wrapped headers inside a single header container block */}
                {!onMain && (
                    <div className="sidebar-header">
                        <h1>Rudra Sen Mallik</h1>
                        <p>Backend Developer & Software Engineer</p>
                    </div>
                )}

                <div className="sidebar-links">
                    {/* Close mobile drawer when a link is clicked */}
                    <NavLink to="/" onClick={onToggle}>About</NavLink>
                    <NavLink to="/skills" onClick={onToggle}>Skills</NavLink>
                    <NavLink to="/experience" onClick={onToggle}>Experience</NavLink>
                    <NavLink to="/education" onClick={onToggle}>Education</NavLink>
                    <NavLink to="/projects" onClick={onToggle}>Projects</NavLink>
                    <NavLink to="/contact" onClick={onToggle}>Contact</NavLink>
                </div>

                <a href="assets/resume.pdf" download className="resume-btn">
                    ⬇ Download Resume
                </a>
            </nav>
        </>
    )
}