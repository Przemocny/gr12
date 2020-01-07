import React from 'react';

// deklaracja
const Header = ()=>{
    return (
        <nav>
        <div className="container">
            <div className="container-company-name">
                <a href="index.html" className="nav-company-name">nazwa firmy</a>
            </div>
            <div className="container-links">
                <a href="#about">o nas</a>
                <a href="#offer">oferta</a>
                <a className="container-links-disabled" href="#">kontakt</a>
            </div>
        </div>
    </nav>
    )
}

export default Header