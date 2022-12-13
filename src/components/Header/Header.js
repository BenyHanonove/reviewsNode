import React from 'react';
import "./Header.css";

function Header() {

  const realoadPage = ()=>{
    window.location.reload();
  };

  return (
    <div className='headerDiv'>

    <section className="header">
    <div className="title-wrapper">
        <h1 className="sweet-title">
            <span data-text="Sweet" onClick={realoadPage}>MEGA</span>
            <span data-text="Stuff" onClick={realoadPage}>REVIEWS</span>
        </h1>
    
        <span className="bottom-title">your reviews!</span>
    
    </div>
    </section>

    </div>
  )
}

export default Header;