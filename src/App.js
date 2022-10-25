import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import React, {useEffect, useState} from 'react';

function App() {

  const [ currentPage, setCurrentPage ] = useState('About');

  console.log(currentPage);

  useEffect(() => {
    console.log(`Current page is now ${currentPage}`);
  },[currentPage])

  function renderCurrentPage(pageValue) {
    switch (pageValue) {
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      default:
        return;
    }
  }

//Fix portfolio rendering/object
//add download link for resume

  return (
    <div className='h-100'>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className='container pb-5 mb-5'>
          {renderCurrentPage(currentPage)}
        </main>
        <Footer />
    </div>
  );
}

export default App;

