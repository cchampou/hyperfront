import React, { Component } from 'react';
import { connect } from 'react-redux';

import AccountForm from '../../components/AccountForm/AccountForm';

import './Account.css';

class Account extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: props.data
		}
	}

	componentDidMount() {
	}

	componentWillReceiveProps(next) {
		this.setState({
			data: next.data
		})
	}

	onChangeHandler = ( event ) => {
		this.setState({
			data: { ...this.state.data, [event.target.name]: event.target.value }
		});
	}

	render() {
		return (
			<div className="container-fluid" id="loginBG">
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-6 my-5">
						<AccountForm />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		data: state.login
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
