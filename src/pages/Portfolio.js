import React from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/Portfolio.css';
import { projectList } from '../helpers/ProjectList';

function Portfolio() {
    return (
        <div className='portfolio'>
            <h1>Portfolio</h1>
            <div className='projectList'>
                {projectList.map((project) => {
                    return <ProjectItem name={project.name} image={project.image} url={project.url} />
                })}
            </div>
        </div>
    );
}

export default Portfolio; 