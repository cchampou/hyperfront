import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actionTypes from '../../store/actions/actionTypes'

class Header extends Component {

	componentDidMount() {
		this.props.autoLogin();
	}

	render () {
		return (
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">HyperTube</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						{(this.props.isLoggedIn)?
						<li className="nav-item active">
							<Link className="nav-link" to="/account">Mon compte</Link>
						</li>:null}

						{(!this.props.isLoggedIn)?
						<li className="nav-item active">
							<Link className="nav-link" to="/login">Se connecter</Link>
						</li>:null}

						{(!this.props.isLoggedIn)?
						<li className="nav-item active">
							<Link className="nav-link" to="/signup">S'inscrire</Link>
						</li>:null}

						{(this.props.isLoggedIn)?
						<li className="nav-item active">
							<Link to="/" className="nav-link" onClick={this.props.logout} >Se deconnecter</Link>
						</li>:null}
					</ul>
				</div>
			</nav>
		)
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn : state.user.isLoggedIn
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch({ type : actionTypes.LOGOUT }),
		autoLogin : () => dispatch({ type : actionTypes.AUTO_LOGIN })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
