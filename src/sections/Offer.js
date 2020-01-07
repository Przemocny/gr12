import React from 'react';

const offers = [
    {
        'title':'Usługa 1',
        'isOfferNew':true
    },
    {
        'title':'Usługa 2',
        'isOfferNew': false
    },
    {
        'title':'Usługa 3',
        'isOfferNew': false
    },
    {
        'title':'Usługa 4',
        'isOfferNew': false
    },
    {
        'title':'Usługa 5',
        'isOfferNew': false
    },
    {
        'title':'Usługa 6',
        'isOfferNew': false
    }
]


const SingleOffer = ({title, isOfferNew})=>{
    return (
        <div className="offer-box-container-box">
            {isOfferNew && <div className="offer-box-container-box-dot"></div>}
            <div className="offer-box-container-content"><h3>{title}</h3>
            {isOfferNew && <span><h3>(Nowość)</h3></span>}
            </div>
        </div>
    )
}

const Offer = ()=>{
    return (
        <section id="offer">
        <div className="container">
            <h1>Czym zajmuje się nasza firma?</h1>
            <div className="offer-box-container">
            {offers.map((element, key)=>{
                return (
                    <SingleOffer key={key}
                        title={element.title}
                        isOfferNew={element.isOfferNew}
                    />
                )
            })}
            </div>
        </div>
    </section>

    )
}

export default Offer