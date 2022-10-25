import React, {useState} from 'react';
import github from '../../assets/images/GitHub-Mark-64px.png'
import './index.css';

function Project(  props  ) {
    const { name, repoUrl, liveUrl, image, stack } = props.project;

    const [visible, setVisible] = useState(false);
    const [opaque, setOpaque] = useState(false);

    const handleMouseOver = (state) => {
        setVisible(state);
        setOpaque(state)
    }

    return (
        <div className='mt-3 position-relative col-10 col-md-6' onMouseEnter={() => handleMouseOver(true)} onMouseLeave={() => handleMouseOver(false)}>
            <img className={`rounded img-fluid ${opaque && 'opacity-25'} project-sample`} src={image} alt={name} ></img>

            <div className={`position-absolute top-50 start-50 translate-middle ${!visible && 'invisible'}`}>
                <h2 className='text-danger'><a href={liveUrl} className="text-decoration-none text-reset" target='_blank' rel='noreferrer'>{name}</a></h2>
                <a href={repoUrl} target='_blank' rel='noreferrer'><img src={github} className='position-absolute top-0 start-100 img-fluid' alt='github logo' id='github-logo'></img></a>
                <h3>{stack}</h3>
            </div>
        </div>
    );
}

export default Project;