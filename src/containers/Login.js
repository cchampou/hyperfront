import React, { Component } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'

export default class Login extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}
	
	emailChangeHandler = ( event ) => {
		this.setState({
			email: event.target.value
		});
	}
	
	passwordChangeHandler = ( event ) => {
		this.setState({
			password: event.target.value
		});
	}

	render () {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-4 mt-5">
						<LoginForm
							emailChangeHandler={this.emailChangeHandler}
							passwordChangeHandler={this.passwordChangeHandler} />
					</div>
				</div>
			</div>
		)
	}
}
