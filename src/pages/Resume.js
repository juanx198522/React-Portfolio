import React from 'react';
import '../styles/Resume.css';
import PDF from '../assets/ResumeTemplate.pdf';

// Component for displaying a resume and proficiency lists
function Resume() {
    // Arrays to store frontend and backend proficiencies
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
            <h1>Resume</h1>
            <br></br>

            {/* Download link for the resume PDF */}
            <h3>
                Download my{' '}
                <span className="hover-effect">
                    <a href={PDF} download>
                        resume
                    </a>
                </span>
            </h3>
            <br></br>

            {/* Frontend Proficiencies */}
            <h3>Front-end Proficiencies:</h3>
            <ul>
                {frontendProficiencies.map((proficiency, index) => (
                    <li key={index}>{proficiency}</li>
                ))}
            </ul>
            <br></br>

            {/* Backend Proficiencies */}
            <h3>Back-end Proficiencies:</h3>
            <ul>
                {backendProficiencies.map((proficiency, index) => (
                    <li key={index}>{proficiency}</li>
                ))}
            </ul>
        </div>
    );
}

export default Resume;