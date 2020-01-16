import React, {Component} from 'react';

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



// // komponent funkcyjny
// const SingleOffer = ({title, isOfferNew, onClickElement})=>{
//     return (
//         <div className="offer-box-container-box" onClick={()=>{
//             onClickElement(title, isOfferNew)
//         }}>
//             {isOfferNew && <div className="offer-box-container-box-dot"></div>}
//             <div className="offer-box-container-content"><h3>{title}</h3>
//             {isOfferNew && <span><h3>(Nowość)</h3></span>}
//             </div>
//         </div>
//     )
// }



// const object = {
//     property1:'value',
//     property2:'value1',
//     property3:'value2',
//     method:function(){},
// }


// komponent stanowy
class SingleOffer extends Component {

    state = {
        isComponentOpened: true,
        value: "test"
    }

    changeValue(value){
        this.setState({
            isComponentOpened: !this.state.isComponentOpened
        })
    }

    render(){
        const dot = (this.state.isComponentOpened && <div className="offer-box-container-box-dot"></div>)
        
        const {title, isOfferNew, onClickElement} = this.props
        return (
            <div className="offer-box-container-box" onClick={()=>{
                this.changeValue(title)
            }}>
                {isOfferNew && dot}
                <div className="offer-box-container-content">
                    <h3>{title}</h3>
                </div>

            </div>
        )
    }
}

const Offer = ({onClickElement})=>{
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
                        onClickElement={onClickElement}
                    />
                )
            })}
            </div>
        </div>
    </section>

    )
}

export default Offer