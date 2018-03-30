import React, { Component } from 'react'

import { connect } from 'react-redux';

import { signup, reset } from '../../store/actions/signup'

import SignupForm from '../../components/SignupForm/SignupForm'

class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			firstname: '',
			email: '',
			username: '',
			password: '',
			confirmation: '',
			error: '',
			loading: false
		}
	}

	componentWillReceiveProps(next) {
		console.log(next.data);
		this.setState(next.data)
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
					<div className="col-lg-8 col-md-10 col-sm-12 my-5">
						<SignupForm
							data={this.state}
							submit={this.props.signup}
							onChangeHandler={this.onChangeHandler} />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		data : state.signup
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signup: (data) => dispatch(signup(data)),
		reset: () => dispatch(reset())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
