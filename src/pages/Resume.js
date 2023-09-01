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
            <h1>Resume</h1>
            <br></br>
            <h3>
                Download my{' '}
                <span className="hover-effect">
                    <a href={resumeLink} download>
                        resume
                    </a>
                </span>
            </h3>
            <br></br>

            <h3>Front-end Proficiencies:</h3>
            <ul>
                {frontendProficiencies.map((proficiency, index) => (
                    <li key={index}>{proficiency}</li>
                ))}
            </ul>
            <br></br>

            <h3>Back-end Proficiencies:</h3>
            <ul>
                {backendProficiencies.map((proficiency, index) => (
                    <li key={index}>{proficiency}</li>
                ))}
            </ul>
            {/* <div>
                <h2>Juan Cruz Garcia</h2>
                <p>Phone Number: (954) 744-443</p>
                <p>Email: juanx1985@icloud.com</p>
                <p>LinkedIn: https://www.linkedin.com/in/juan-garcia-549277272</p>
            </div>
            <div>
                Summary:
                Dedicated and results-driven professional with a diverse background in restaurant management and e-commerce, now transitioning into a rewarding career as a web developer. Completed a comprehensive coding boot camp, gaining proficiency in web development technologies and a strong foundation in both front-end and back-end development. Adept at problem-solving, team collaboration, and project management. Committed to leveraging my unique experiences to create innovative solutions and contribute to the success of dynamic tech teams.
            </div>
            <div>
                Education:

                Full Stack Coding Boot Camp
                University of Miami
                Miami, FL
                2023
            </div>
            <div>
                Technical Skills:

                Programming Languages: HTML, CSS, JavaScript, ES6
                Front-end Technologies: Bootstrap, JQuery, React
                Back-end Technologies: Node.js, Express, MySQL, Sequelize, NoSQL
                Version Control: Git
                APIs: Third-party APIs, RESTful APIs
                Testing: Testing methodologies and tools
                Project Management: Agile development, MVC paradigm
                Other: Progressive Web Apps (PWAs), Computer Science Fundamentals
            </div>
            <div>
                Professional Experience:

                Restaurant Manager
                The Knife
                Miami, FL
                2013-2020

                Managed day-to-day restaurant operations, including staff supervision, customer service, and inventory control.
                Demonstrated strong leadership by fostering a positive work environment and ensuring team cohesion.
                Developed and implemented efficient workflows, resulting in improved customer satisfaction and profitability.
                Utilized problem-solving skills to address customer concerns and resolve issues promptly.
                Collaborated with the kitchen staff to enhance menu offerings and optimize food quality.
                Oversaw staff training and development programs, improving employee performance and retention.

                E-commerce Manager
                Neptune Corp
                Miami, FL
                2018-Present

                Led e-commerce operations, overseeing website management, product listings, and customer engagement.
                Analyzed data and user behavior to drive website improvements and enhance the online shopping experience.
                Utilized digital marketing strategies to boost online sales and expand the customer base.
                Managed third-party partnerships and negotiated contracts to optimize vendor relationships.
                Implemented inventory control strategies, reducing overstock and improving profit margins.
                Conducted market research to identify emerging trends and capitalize on new opportunities.
            </div>
            <div>
                Additional Skills:

                Strong problem-solving and critical-thinking abilities.
                Excellent communication and presentation skills.
                Adaptability to new technologies and a passion for continuous learning.
                Effective project management and team collaboration skills.
                Understanding of the boundaries of reasonable and achievable goals.
            </div>
            <div>
                References:
                Available upon request.
            </div> */}
        </div>
    );
};

export default Resume;

