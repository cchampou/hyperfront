import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'

export default class Login extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			firstname: '',
			email: '',
			username: '',
			password: '',
			confirmation: '',
			loading: false
		}
	}

	onChangeHandler = ( event ) => {
		const name = event.target.name;
		this.setState({
			[name]: event.target.value
		});
	}
	
	onSubmit = ( event ) => {
		event.preventDefault();
		this.setState({
			loading: true
		});
	}

	render () {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-8 mt-5">
						<SignupForm
							name={this.state.name}
							firstname={this.state.firstname}
							email={this.state.email}
							username={this.state.username}
							submit={this.onSubmit}
							loading={this.state.loading}
							onChangeHandler={this.onChangeHandler} />
					</div>
				</div>
			</div>
		)
	}
}
