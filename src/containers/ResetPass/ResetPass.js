import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/resetPass'

import ResetPassForm from '../../components/ResetPassForm/ResetPassForm';

class Reset extends Component {

	constructor(props) {
		super (props);
		this.state = {
			email: '',
			loading: false
		}
	}

	componentWillReceiveProps(next) {
		this.setState(next.data)
	}

	onChange = ( event ) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render () {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 col-sm-10 col-xs-12 my-5">
						<ResetPassForm
							data={this.state}
							onChange={this.onChange}
							onSubmit={this.props.resetPass} />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		data: state.resetPass
	}
}

const mapDispatchToProps = dispatch => {
	return {
		resetPass: (data) => dispatch(actions.resetPass(data))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Reset);
