import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Header from './sections/Header'
import LandingPage, { LandingPageInner } from './sections/LandingPage'
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

const ErrorPage = ()=>{
  return (
    <div>
      Podstrona nie istnieje
    </div>
  )
}

class App extends React.Component {
	modalRef = React.createRef()
	sideMenuRef = React.createRef()

	state = { turnOff: true }

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				turnOff: false,
			})
		}, 3000)
	}

	render() {
		return (
			<Router>
				<div className='app'>
					{this.state.turnOff && <LifecycleComponent />}
					<Modal ref={this.modalRef} />
					<SideMenu ref={this.sideMenuRef} />
					<Header sideMenu={this.sideMenuRef} />

					<Switch>
						<Route exact path="/">
							<LandingPage>
								<LandingPageInner modal={this.modalRef} />
							</LandingPage>
						</Route>
						<Route exact path="/about">
							<About limit={4} />
						</Route>
						<Route exact path="/offer">
							<Offer
								onClickElement={(title, isOfferNew) => {
									alert(`${title} ${isOfferNew}`)
								}}
							/>
            </Route>
            <Route path="/*">
              <Redirect to="/"/>
            </Route>
					</Switch>

					<Footer />
				</div>
			</Router>
		)
	}
}

export default App
