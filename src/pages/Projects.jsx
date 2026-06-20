import '../styles/projects.css'

export default function Projects() {
    return (
        <section className="page-with-effects">
            <div className="page-content-wrapper">
                <h1 className="page-header">Projects</h1>

                <div className="projects-grid">
                    {/* Project Card 1 */}
                    <div className="project-card">
                        <div className="project-card-header">
                            <h2 className="project-title-text">Safety Monitoring Helmet</h2>
                            <span className="project-badge">Capstone Project</span>
                        </div>
                        <p className="project-desc">
                            Developed an IoT-enabled safety helmet featuring real-time heart rate monitoring, fall detection, and RFID-based user authentication.
                        </p>
                        <ul className="project-bullets">
                            <li>Built server architecture using <strong>FastAPI</strong> and <strong>PostgreSQL</strong>, implementing <strong>WebSockets</strong>.</li>
                            <li>Designed a responsive monitoring dashboard using <strong>ReactJS</strong> and <strong>Tailwind CSS</strong>.</li>
                        </ul>
                        <div className="tech-chips">
                            <span>IoT</span>
                            <span>FastAPI</span>
                            <span>WebSockets</span>
                            <span>ReactJS</span>
                            <span>Tailwind CSS</span>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="project-card">
                        <div className="project-card-header">
                            <h2 className="project-title-text">Movie Recommendation System</h2>
                            <span className="project-badge">NLP / AIML</span>
                        </div>
                        <p className="project-desc">
                            Built a recommendation engine using TF-IDF with bigrams over a comprehensive dataset of 35,000+ movies.
                        </p>
                        <ul className="project-bullets">
                            <li>Developed modular training and storage scripts utilizing <strong>Scikit-Learn</strong>.</li>
                            <li>Optimized recommendations via normalized linear functions and <strong>Cosine Similarity</strong>.</li>
                        </ul>
                        <div className="tech-chips">
                            <span>NLP</span>
                            <span>Scikit-Learn</span>
                            <span>TF-IDF</span>
                            <span>Python</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}