import React from 'react';

//will take props for setCurrentPage and the useEffect for page highlighting
function Navigation({ currentPage, setCurrentPage }) {
    console.log(currentPage);

    return (
        <ul className='d-flex justify-content-evenly list-unstyled nav col-lg-8 col-12'>
            <li className={`ms-3 display-3 ${currentPage === 'About' ? 'opacity-100' : 'opacity-50'}`} onClick={() => setCurrentPage('About')}>
                About Me
            </li>
            <li className={`ms-3 display-3 ${currentPage === 'Portfolio' ? 'opacity-100' : 'opacity-50'}`} onClick={() => setCurrentPage('Portfolio')}>
                Portfolio
            </li>
            <li className={`ms-3 display-3 ${currentPage === 'Contact' ? 'opacity-100' : 'opacity-50'}`} onClick={() => setCurrentPage('Contact')}>
                Contact
            </li>
            <li className={`mx-3 display-3 ${currentPage === 'Resume' ? 'opacity-100' : 'opacity-50'}`} onClick={() => setCurrentPage('Resume')}>
                Resume
            </li>
        </ul>
    );
}

export default Navigation;