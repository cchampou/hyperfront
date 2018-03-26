import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ( props ) => {
	return (
		<form className="card p-4">
			<h2 className="text-center mb-2">Connexion</h2>
			<div className="form-group">
				<label htmlFor="email">Adresse email :</label>
				<input type="email" id="email" name="email" onChange={props.emailChangeHandler} className="form-control"/>
			</div>
			<div className="form-group">
				<label htmlFor="password">Mot de passe :</label>
				<input type="password" id="password" name="password" onChange={props.passwordChangeHandler} className="form-control"/>
			</div>
			<Link to="/reset" className="btn btn-sm btn-link">J'ai oublié mon mot de passe</Link>
			<Link to="/reset" className="btn btn-sm btn-link">J'ai déjà un compte</Link>
			<div className="form-group text-center">
				<button className="btn btn-primary mt-2">Se connecter</button>
			</div>
		</form>
	)
}

export default LoginForm;
