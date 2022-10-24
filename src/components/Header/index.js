import React from 'react';
import Navigation from '../Navigation';

function Header({ currentPage, setCurrentPage }) {
    console.log(currentPage);
    return (
        <header className="bg-light sticky-top d-flex flex-wrap justify-content-between align-items-end p-10">
            <div className='ms-3 display-1 col-lg-3 col-md-6 col-12 text-center'>Lernantino</div>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </header>
    );
}

export default Header;