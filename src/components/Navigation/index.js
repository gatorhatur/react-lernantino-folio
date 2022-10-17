import React from 'react';

//will take props for setCurrentPage and the useEffect for page highlighting
function Navigation({setCurrentPage, currentPage}) {
    return (
        <div className='d-flex justify-content-evenly'> //convert this to a list to make this work with the
            <div className={`ms-3 display-3 ${currentPage === 'About' && "navActive"}`} onClick={() => setCurrentPage('About')}>
                About Me
            </div>
            <div className='ms-3 display-3' onClick={() => setCurrentPage('Portfolio')}>
                Portfolio
            </div>
            <div className='ms-3 display-3' onClick={() => setCurrentPage('Contact')}>
                Contact
            </div>
            <div className='mx-3 display-3' onClick={() => setCurrentPage('Resume')}>
                Resume
            </div>
        </div>
    );
}

export default Navigation;