import React from 'react';
import github from '../../assets/images/GitHub-Mark-64px.png'

function Project( project ) {
    const { name, repoUrl, liveUrl, image, stack } = project;

    return (
        <div className='position-relative'>
            <div className='position-absolute top-50'>
                <h1 ><a href={liveUrl} target='_blank' rel='noreferrer'>{name}</a></h1>
                <h2>{stack}</h2>
            </div>
            <a href={repoUrl} target='_blank' rel='noreferrer'><img src={github} className='position-absolute top-0 start-100' alt='github logo'></img></a>
            <img className='m-3 shadow' src={image} alt={name} height='200px'></img>
        </div>
    );
}

export default Project;