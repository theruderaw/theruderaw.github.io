import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import GameOfLifeBackground from './components/GameOfLifeBackground'
import HelpButton from './components/HelpButton'

export default function App() {
    // 1. Get the current location object
    const location = useLocation();

    // 2. Check if the current pathname is exactly the root ("/")
    const isMain = location.pathname === '/';

    // State to track if the sidebar drawer is open on mobile views
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="app-layout">
            <GameOfLifeBackground />

            {/* Mobile-only hamburger toggle button */}
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isSidebarOpen ? '✕' : '☰'}
            </button>

            {/* 3. Pass both onMain and mobile visibility props down */}
            <Sidebar
                onMain={isMain}
                isOpen={isSidebarOpen}
                onToggle={closeSidebar}
            />

            <main className="main-content">
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <HelpButton />
        </div>
    )
}