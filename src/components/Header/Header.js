import React from 'react'
import { Link } from 'react-router-dom'

const Header = ( props ) => (
	<nav className="navbar navbar-expand-md navbar-dark bg-dark">
		<Link className="navbar-brand" to="/">HyperTube</Link>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav ml-auto">
				<li className="nav-item active">
					<Link className="nav-link" to="/lang">FR</Link>
				</li>
				<li className="nav-item active">
					<Link className="nav-link" to="/search">Rechercher</Link>
				</li>
				<li className="nav-item active">
					<Link className="nav-link" to="/account">Mon compte</Link>
				</li>
				<li className="nav-item active">
					<Link className="nav-link" to="/login">Se connecter</Link>
				</li>
				<li className="nav-item active">
					<Link className="nav-link" to="/signup">S'inscrire</Link>
				</li>
				<li className="nav-item active">
					<Link className="nav-link" to="/logout">Se deconnecter</Link>
				</li>
			</ul>
		</div>
	</nav>
)

export default Header;
