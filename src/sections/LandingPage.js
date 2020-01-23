import React from 'react'
import axios from 'axios'

class ContactForm extends React.Component {
	state = {
		email: 'kejt.lipinska@gmail.com',
		imBusy: false,
		msg:false
    }
    

	onChange = (event) => {
		const { value, name, type, checked } = event.target

		if (type === 'checkbox') {
			this.setState({
				[name]: checked,
			})
		} else {
			this.setState({
				[name]: value,
			})
		}
	}

	isValid = ()=>{
		console.log(this.state)

		const {email} = this.state

		const [user, domain] = email.split('@')
		const [web, webend] = domain.split('.')

		if(webend){
			console.log('istnieje')
			return true
		}

		return false

	}

	onSubmit = (event) => {
		event.preventDefault()


		if(this.isValid()){

			this.setState({
				imBusy:true
			})
	
			console.log(this.state)
			
			const form = new FormData()
			form.append('email', this.state.email)
	
			const request = {
				method: 'POST',
				url: 'https://wp.api.localhost-group.com/wp-json/contact-form-7/v1/contact-forms/5/feedback',
				headers:{
					'content-type': 'multipart/form-data'
				},
				data:form
			  }
	
			axios(request)
			  .then((response)=>{
				  console.log('response', response)
				  this.setState({
					imBusy:false,
					email:'',
					msg:response.data.message
				})
			  })
			  .catch((err)=>{
				  console.log('err', err)
				  this.setState({
					imBusy:false,
					email:''
				})
			  })
		}
		else{
			// jakiś błąd
		}

	}
	render() {
			if(this.state.imBusy){
				return ( <h3>Loading</h3> )
			}	
			else{
				return (
					<form onSubmit={this.onSubmit}>
						<h1>Nasza firma oferuje najwyzszej jakości produkty.</h1>
						<h3>Nie wierz nam na słowo - sprawdź</h3>
		
							<input
								name='email'
								type='email'
								onChange={this.onChange}
								value={this.state.email}
							/>
							<button>wyślij</button>
							{this.state.msg && <h3>{this.state.msg}</h3>}
					</form>
				)
			}
		
	}
}

const LandingPageInner = ({ modal }) => {
	return <ContactForm modal={modal} />
}

const LandingPage = ({ children }) => {
	return (
		<section
			className='landing-page'
			onScroll={() => {
				console.log('scrolling')
			}}
		>
			<div className='landing-page-shadow'>{children}</div>
		</section>
	)
}

export { LandingPageInner }
export default LandingPage
