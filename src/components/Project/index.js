import React, {useState} from 'react';
import github from '../../assets/images/GitHub-Mark-64px.png'
import './index.css';



function Project(project ) {
    const { name, repoUrl, liveUrl, image, stack, index } = project;

    const [visible, setVisible] = useState(false);
    const [opaque, setOpaque] = useState(false);

    const handleMouseOver = (state) => {
        setVisible(state);
        setOpaque(state)
    }

    return (
        <div key={`project-${index}`} className='position-relative' onMouseEnter={() => handleMouseOver(true)} onMouseLeave={() => handleMouseOver(false)}>
            <img className={`m-3 shadow rounded ${opaque && 'opacity-25'} project-sample`} src={image} alt={name} height='200'width='500'></img>

            <div className={`position-absolute top-50 start-50 translate-middle ${!visible && 'invisible'}`}>
                <h2 className='me-3'><a href={liveUrl} className="text-decoration-none text-reset" target='_blank' rel='noreferrer'>{name}</a></h2>
                <a href={repoUrl} target='_blank' rel='noreferrer'><img src={github} className='position-absolute top-0 start-100 img-fluid github-logo' alt='github logo'></img></a>
                <h3>{stack}</h3>
            </div>
        </div>
    );
}

export default Project;