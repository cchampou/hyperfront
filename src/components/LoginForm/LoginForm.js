import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Utils/Button';

import './LoginForm.css';

const LoginForm = ( props ) => {
	return (
		<form className="card p-4" onSubmit={props.submit} id="loginForm">
			<h2 className="text-center mb-2">Connexion</h2>
			<div className="form-group">
				<label htmlFor="email">Adresse email :</label>
				<input
					type="email"
					id="email"
					name="email"
					onChange={props.emailChangeHandler}
					className="form-control"
					disabled={props.loading} />
			</div>
			<div className="form-group">
				<label htmlFor="password">Mot de passe :</label>
				<input
					type="password"
					id="password"
					name="password"
					disabled={props.loading}
					onChange={props.passwordChangeHandler}
					className="form-control"/>
			</div>
			<Link to="/reset" className="btn btn-sm btn-link">J'ai oublié mon mot de passe</Link>
			<Link to="/signup" className="btn btn-sm btn-link">Je n'ai pas encore de compte</Link>
			<div className="form-group text-center">
				<Button loading={props.loading} text="Se connecter" />
			</div>
		</form>
	)
}

export default LoginForm;
