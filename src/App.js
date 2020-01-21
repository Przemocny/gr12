import React from 'react';
import Header from './sections/Header'
import LandingPage, {LandingPageInner} from './sections/LandingPage'
import About from './sections/About'
import Offer from './sections/Offer'
import Footer from './sections/Footer'

import Modal from './sections/Modal'
import SideMenu from './sections/SideMenu'
import LifecycleComponent from './sections/LifecycleComponent'

// komponentem funkcyjny - stara metoda pisania komponentów
// function App(props){
//   return (<p>somehtml</p>)
// }

class App extends React.Component {

  modalRef = React.createRef()
  sideMenuRef = React.createRef()

  state = {turnOff : true}

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        turnOff:false
      })
    },3000)
  }

  render(){
    return (<div className="app">
      {this.state.turnOff && <LifecycleComponent/>}
      <Modal ref={this.modalRef} />
      <SideMenu ref={this.sideMenuRef} />
      <Header sideMenu={this.sideMenuRef} />
      <LandingPage>
      <LandingPageInner modal={this.modalRef}/>
      </LandingPage>
      <About limit={4}/>
      <Offer onClickElement={(title, isOfferNew)=>{
        alert(`${title} ${isOfferNew}`)
      }}/>
      <Footer/>
    </div>)
  }

}
 

export default App;
