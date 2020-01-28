import React from 'react'
import { Link } from 'react-router-dom'

class SideMenu extends React.Component {
	state = { isMenuOpen: false }

	toggleMenu = (event) => {
		this.setState({
			isMenuOpen: !this.state.isMenuOpen,
		})
	}
	render() {
		if (!this.state.isMenuOpen) {
			return null
		}

		return (
			<div className='app-side-menu'>
				<div className='app-side-menu-inner'>
					<ul className='app-side-menu-list'>
						<li>
							<a onClick={this.toggleMenu}>X</a>
						</li>
						<li>
							<Link onClick={this.toggleMenu} to='/'>O nas</Link>
						</li>
						<li>
							<Link onClick={this.toggleMenu}  to='/about'>Team</Link>
						</li>
						<li>
							<Link onClick={this.toggleMenu}  to='/offer'>Oferta</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default SideMenu
