import '../styles/education.css'

export default function Education() {
    return (
        <section className="page-with-effects">
            <div className="page-content-wrapper">
                <h1 className="page-header">Education</h1>

                {/* Degree Section matching experience card style */}
                <div className="education-card">
                    <h2>B.Tech in Electronics and Communications Engineering</h2>
                    <p className="company">
                        <a
                            href="https://mitwpu.edu.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MIT World Peace University, Pune, MH
                        </a>
                    </p>
                    <p className="date">Nov. 2021 – May 2025</p>

                    <ul>
                        <li><strong>CGPA:</strong> 7.56/10</li>
                        <li>
                            <strong>Relevant Coursework:</strong> Data Structures and Algorithms (DSA), Database Management Systems (DBMS), Natural Language Processing, Artificial Intelligence and Machine Learning.
                        </li>
                    </ul>
                </div>

                {/* Leadership Section using the same naming scheme */}
                <div className="education-card">
                    <h2>Leadership</h2>
                    <p className="company">MIT WPU Activity Records</p>

                    <ul>
                        <li>
                            Student Placement Representative (SOEEE) <span className="date">| May 2023 – Jun 2024</span>
                        </li>
                        <li>
                            Class Representative (1st Year Batch) <span className="date">| Nov 2022 – Jun 2023</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}