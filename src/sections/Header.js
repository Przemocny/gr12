import React from 'react';

// deklaracja
const Header = ({sideMenu})=>{
    return (
        <nav>
        <div className="container">
            <div className="container-company-name">
                <a href="index.html" className="nav-company-name">nazwa firmy</a>
            </div>
            <div className="container-links">
                <a onClick={(event)=>{
                    sideMenu.current.toggleMenu(event)
                }}>Menu</a>
            </div>
        </div>
    </nav>
    )
}

export default Header