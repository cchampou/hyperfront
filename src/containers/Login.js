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
	
	onChangeHandler = ( event ) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render () {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-4 mt-5">
						<LoginForm
							onChangeHandler={this.onChangeHandler} />
					</div>
				</div>
			</div>
		)
	}
}
