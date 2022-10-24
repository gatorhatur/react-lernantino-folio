import React from 'react';
import github from '../../assets/images/GitHub-Mark-Light-64px.png'
import linkedIn from '../../assets/images/LI-In-Bug.png'
import instagram from '../../assets/images/Instagram_Glyph_White.png'

function Footer() {
    return (
        <div className='bg-dark d-flex justify-content-center fixed-bottom p-0'>
            <a className='me-2 my-2' href='https://github.com/gatorhatur/' target='_blank' rel='noreferrer'>
                <img  src={github} alt='GitHub logo' height='64px'></img>
            </a>
            <a className='me-2 my-2' href='https://www.linkedin.com/in/brandavis/' target='_blank' rel='noreferrer'>
                <img  src={linkedIn} className="primary" alt='LinkedIn logo' height='64px'></img>
            </a>
            <a className='my-2' href='https://github.com/gatorhatur/' target='_blank' rel='noreferrer'>
                <img src={instagram} className="primary" alt='Instagram logo' height='64px'></img>
            </a>
        </div>
    );
}

export default Footer;