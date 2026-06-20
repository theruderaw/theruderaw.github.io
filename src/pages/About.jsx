import { Link } from 'react-router-dom'

export default function About() {
    return (
        <section className="page-with-effects">
            <div className="page-content-wrapper">
                <h1 className="page-header">Rudra Sen Mallik</h1>
                <p className="page-header-subtitle">Backend Developer & Software Engineer</p>
                <h2 className="page-title">Professional Summary</h2>
                <p>
                    Detail-oriented Electronics and Communications Engineering graduate specializing in Web Development, Data Analysis, and Software QA. Proven experience building robust backend systems using Python (FastAPI) and PostgreSQL, alongside interactive frontends using ReactJS and Tailwind CSS. Adept at integrating WebSockets, NLP models, and automated workflows to deliver scalable software solutions.
                </p>

                {/* Clean, semantic button route link */}
                <Link to="/contact" className="say-hi-btn">
                    Say Hi 👋
                </Link>
            </div>
        </section>
    )
}