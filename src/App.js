import React from 'react';
import Header from './sections/Header'
import LandingPage from './sections/LandingPage'
import About from './sections/About'
import Offer from './sections/Offer'
import Footer from './sections/Footer'

// komponentem funkcyjny - stara metoda pisania komponentów
// function App(props){
//   return (<p>somehtml</p>)
// }


const App = (props) => {
  return (<div className="app">
      <Header />
      <LandingPage/>
      <About/>
      <Offer/>
      <Footer/>
    </div>)
}

export default App;
