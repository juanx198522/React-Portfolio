import React from 'react';

function ProjectItem({ image, name, url }) {
    return (
        <div className='projectItem'>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div style={{ backgroundImage: `url(${image})` }} className='bgImage'></div>
                <h1>{name}</h1>
            </a>
        </div>
    );
}

export default ProjectItem; 