import React from 'react';

// Functional component for displaying a single project item
function ProjectItem({ image, name, deployedApp, gitHubRepo }) {
    return (
        <div className='projectItem'>
            {/* Display the project image as a background */}
            <div style={{ backgroundImage: `url(${image})` }} className='bgImage'></div>

            {/* Display the project name */}
            <h1>{name}</h1>

            {/* Link to the deployed app */}
            <a href={deployedApp} target="_blank" rel="noopener noreferrer">
                <button className='buttton'>Deployed App</button>
            </a>

            {/* Link to the GitHub repository */}
            <a href={gitHubRepo} target="_blank" rel="noopener noreferrer">
                <button className='buttton'>GitHub Repo</button>
            </a>
        </div>
    );
}

export default ProjectItem;