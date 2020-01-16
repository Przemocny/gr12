import React from 'react'


class SideMenu extends React.Component {
    state = {isMenuOpen:false}

    toggleMenu = (event)=>{
        this.setState({
            isMenuOpen:!this.state.isMenuOpen
        })
    }
    render(){
        if(!this.state.isMenuOpen){
            return null
        }

        return (
            <div className="app-side-menu">
                <div className="app-side-menu-inner">
                <ul className="app-side-menu-list">
                    <li><a onClick={this.toggleMenu}>X</a></li>
                    <li><a onClick={this.toggleMenu} href="#about">O nas</a></li>
                    <li><a onClick={this.toggleMenu} href="#offer">Oferta</a></li>
                    <li><a onClick={this.toggleMenu} href="#contact">Kontakt</a></li>
                </ul>
                </div>
            </div>
        )
    }
}


export default SideMenu