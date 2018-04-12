import React, { Component } from 'react';
import { connect } from 'react-redux';

import AccountForm from '../../components/AccountForm/AccountForm';

import './Account.css';

class Account extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: props.user
		}
	}

	componentWillReceiveProps(next) {
		this.setState({
			user: next.user
		})
	}

	onChangeHandler = ( event ) => {
		this.setState({
			user: { ...this.state.user, [event.target.name]: event.target.value }
		});
	}

	render() {
		return (
			<div className="container-fluid" id="loginBG">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-8 col-sm-10 my-5">
						<AccountForm data={this.state.user} />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
