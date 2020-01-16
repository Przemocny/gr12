import React from 'react';


const LandingPageInner = ({modal})=>{
    return (
        <React.Fragment>
            <div className="container">
                <h1>Nasza firma oferuje najwyzszej jakości produkty.</h1>
                <h3>Nie wierz nam na słowo - sprawdź</h3>

                <input type="text" onChange={(ev)=>{
                    console.log('change')
                }} />

                <a onClick={(ev)=>{ 
                    modal.current.toggleModal(ev)
                }} 
                className="landing-page-btn">oferta</a>
            </div>  
        </React.Fragment>
    )
}

const LandingPage = ({children})=>{
    return (
        <section className="landing-page" onScroll={()=>{
            console.log('scrolling')
        }}>
            <div className="landing-page-shadow">
                {children}
            </div>
        </section>
    )
}

export {LandingPageInner}
export default LandingPage
