import React from 'react'

class Modal extends React.Component {
	state = {
		isModalOpen: false,
    }
    
    toggleModal = (event) => {
        event.stopPropagation()
        this.setState({
			isModalOpen: !this.state.isModalOpen,
		})
    }

	render() {
        if(!this.state.isModalOpen){
            return null
        }

		return ( 
            <div className='app-modal'>
                <a className='app-modal-bg' onClick={this.toggleModal}></a>
				<div className='app-modal-inner'>
					<div className='app-modal-header'>
						<h2 className="app-modal-title">Tytul modala</h2>
                        <button className='app-modal-close'
                        onClick={this.toggleModal}
                        >X</button>
					</div>
					<div className='app-modal-content'>
						<h2>tutaj zwykle są jakieś informacje</h2>
					</div>
					<div className='app-modal-footer'>
						<button className='app-modal-footer-btn'>OK</button>
						<button className='app-modal-footer-btn' onClick={this.toggleModal}>CANCEL</button>
					</div>
				</div>
            </div>
		)
	}
}

export default Modal
