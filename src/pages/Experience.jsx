import '../styles/experience.css'

export default function Experience() {
    return (
        <section>
            <h2 className="page-header">Professional Experience</h2>
            <div className="experience-card">
                <h2 className="page-title">Backend Developer Intern</h2>
                <span className="date">Feb 2024 – Jun 2024</span>
                <p className="company">CodeMischief Coding Solutions</p>
                <ul>
                    <li>Engineered robust Python FastAPI and PostgreSQL backend systems for enterprise-grade CRM/ERP systems, ensuring seamless integration with ReactJS frontends.</li>
                    <li>Implemented automated SMTP workflows and dynamic PDF generation modules, improving documentation turnaround times.</li>
                    <li>Designed custom PostgreSQL-based reporting queries to optimize data retrieval and visualization for client analysis.</li>
                </ul>
            </div>
        </section>
    )
}
