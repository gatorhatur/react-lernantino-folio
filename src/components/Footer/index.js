import React from 'react';
import github from '../../assets/images/GitHub-Mark-Light-64px.png'
import linkedIn from '../../assets/images/LI-In-Bug.png'
import instagram from '../../assets/images/Instagram_Glyph_White.png'

function Footer() {
    return (
        <div className='bg-dark d-flex justify-content-center fixed-bottom m-10'>
            <a href='https://github.com/gatorhatur/' target='_blank' rel='noreferrer'>
                <img className='my-10' src={github} alt='GitHub logo' height='64px'></img>
            </a>
            <a  href='https://github.com/gatorhatur/' target='_blank' rel='noreferrer'>
                <img className='my-10 ml-2' src={linkedIn} alt='LinkedIn logo' height='64px'></img>
            </a>
            <a href='https://github.com/gatorhatur/' target='_blank' rel='noreferrer'>
                <img src={instagram} alt='Instagram logo' height='64px'></img>
            </a>
        </div>
    );
}

export default Footer;