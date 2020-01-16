import React from 'react';


const condition = false

const Footer = ()=>{
    
    if(condition){
        return (
            <footer>
             {/*loader*/}
            </footer>
        )
    }
    else{
        return (
            <footer>
            {/*reszta dużej aplikacji*/}

                <div className="container">
                    <div className="footer-icons">
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook"></i>
                    </div>
                </div>
            </footer>
        )
    }

}

export default Footer