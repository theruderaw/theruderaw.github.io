import { useState, useEffect } from 'react'
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
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // 1. Monitor screen resizing to dynamically catch mobile state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 2. ONLY hide the header if we are on the root route AND the user is on a mobile phone
    const isMainAndMobile = location.pathname === '/' && isMobile;

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="app-layout">
            <GameOfLifeBackground />

            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isSidebarOpen ? '✕' : '☰'}
            </button>

            {/* 3. Pass down the updated boolean logic */}
            <Sidebar
                onMain={isMainAndMobile}
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