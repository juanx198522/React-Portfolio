import React from 'react';
import ProjectItem from '../components/ProjectItem'; // Importing the ProjectItem component
import '../styles/Portfolio.css';
import { projectList } from '../helpers/ProjectList'; // Importing the projectList data

// Component for displaying a portfolio of projects
function Portfolio() {
    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>

            {/* Mapping through the projectList data and rendering ProjectItem components */}
            <div className='projectList'>
                {projectList.map((project) => {
                    return <ProjectItem name={project.name} image={project.image} deployedApp={project.deployedApp} gitHubRepo={project.gitHubRepo} />
                })}
            </div>
        </div>
    );
}

export default Portfolio;