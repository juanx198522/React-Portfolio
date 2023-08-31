import React from 'react';
import '../styles/Resume.css';

function Resume() {
    const resumeLink = '/path/to/your/resume.pdf';

    const frontendProficiencies = [
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'Responsive design',
        'React',
        'Bootstrap',
    ];

    const backendProficiencies = [
        'APIs',
        'Node.js',
        'Express',
        'MySQL',
        'Sequelize',
        'MongoDB',
        'GraphQL',
    ];

    return (
        <div className='resume'>
            <h2>Resume</h2>
            <h3>
                Download my{' '}
                <span className="hover-effect">
                    <a href={resumeLink} download>
                        resume
                    </a>
                </span>
            </h3>
            <h3>Front-end Proficiencies:</h3>
            <ul>
                {frontendProficiencies.map((proficiency, index) => (
                    <li key={index}>{proficiency}</li>
                ))}
            </ul>
            <h3>Back-end Proficiencies:</h3>
            <ul>
                {backendProficiencies.map((proficiency, index) => (
                    <li key={index}>{proficiency}</li>
                ))}
            </ul>
        </div>
    );
};

export default Resume;