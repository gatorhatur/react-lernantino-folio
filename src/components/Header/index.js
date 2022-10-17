import React from 'react';
import Navigation from '../Navigation';

function Header({currentPage, setCurrentPage}) {
    return (
        <div className="bg-light sticky-top d-flex justify-content-between align-items-end p-10">
            <div className='ms-3 display-1'>Lernantino</div>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}

export default Header;