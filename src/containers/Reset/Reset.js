import React, { Component } from 'react';

import ResetForm from '../../components/ResetForm/ResetForm';

class Reset extends Component {

	constructor(props) {
		super (props);
		this.state = {
			email: '',
			loading: false
		}
	}

	onChange = ( event ) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	onSubmit = ( event ) => {
		event.preventDefault();
		this.setState({
			loading: true
		})
	}

	render () {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 col-sm-10 col-xs-12 my-5">
						<ResetForm
							onChange={this.onChange}
							onSubmit={this.onSubmit}
							loading={this.state.loading} />
					</div>
				</div>
			</div>
		)
	}
}


export default Reset;
