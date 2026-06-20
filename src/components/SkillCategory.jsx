import React from 'react'

export default function SkillCategory({ 
    name, 
    skill_dict, 
    isOpen, 
    onMouseEnter, 
    onMouseLeave, 
    onClick 
}) {
    return (
        <div 
            className={`skill-tab ${isOpen ? 'active' : ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <h3>{name}</h3>
            <div className={`skill-list-container ${isOpen ? 'open' : ''}`}>
                <ul className="skills-list">
                    {Object.entries(skill_dict).map(([skillName, level]) => (
                        <li key={skillName} className="skill-item">
                            <div className="skill-info">
                                <span className="skill-name">{skillName}</span>
                                <span className="skill-percentage">{level}%</span>
                            </div>
                            <div className="progress-bar-bg">
                                <div 
                                    className="progress-bar-fill" 
                                    style={{ width: `${level}%` }}
                                ></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
