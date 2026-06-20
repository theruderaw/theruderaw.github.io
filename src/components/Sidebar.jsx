import { NavLink } from 'react-router-dom'
import '../styles/sidebar.css'

export default function Sidebar({ onMain = false }) {
    return (
        <nav className="sidebar">
            {/* 1. Wrapped headers inside a single header container block */}
            {!onMain && (
                <div className="sidebar-header">
                    <h1>Rudra Sen Mallik</h1>
                    <p>Backend Developer & Software Engineer</p>
                </div>
            )}

            <div className="sidebar-links">
                <NavLink to="/">About</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                <NavLink to="/education">Education</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>

            <a href="assets/resume.pdf" download className="resume-btn">
                ⬇ Download Resume
            </a>
        </nav>
    )
}