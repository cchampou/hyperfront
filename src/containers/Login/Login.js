import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

import './Login.css';

export default class Login extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			laoding: false
		}
	}
	
	onChangeHandler = ( event ) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	
	submit = ( event ) => {
		event.preventDefault();
		this.setState({
			loading: true
		});
	}

	render () {
		return (
			<div className="container-fluid" id="loginBG">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 my-5">
						<LoginForm
							submit={this.submit}
							loading={this.state.loading}
							onChangeHandler={this.onChangeHandler} />
					</div>
				</div>
			</div>
		)
	}
}
