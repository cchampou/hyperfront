import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Utils/Button';

import './LoginForm.css';

const LoginForm = ( props ) => {
	return (
		<form className="card p-4" onSubmit={(e) => { e.preventDefault(); props.submit(props.data); }} id="loginForm">
			<h2 className="text-center mb-2">Connexion</h2>
			{props.data.failed && <p className="alert alert-danger">{props.data.failed}</p>}
			{props.data.success && <p className="alert alert-success">OK</p>}
			<div className="form-group">
				<label htmlFor="username">Nom d'utilisateur :</label>
				<input
					value={props.data.username}
					type="text"
					id="username"
					name="username"
					onChange={props.onChangeHandler}
					className="form-control"
					disabled={props.data.loading} />
			</div>
			<div className="form-group">
				<label htmlFor="password">Mot de passe :</label>
				<input
					value={props.data.password}
					type="password"
					id="password"
					name="password"
					disabled={props.data.loading}
					onChange={props.onChangeHandler}
					className="form-control"/>
			</div>
			<Link to="/resetpass" className="btn btn-sm btn-link">J'ai oublié mon mot de passe</Link>
			<Link to="/signup" className="btn btn-sm btn-link">Je n'ai pas encore de compte</Link>
			<div className="form-group text-center">
				<Button loading={props.data.loading} text="Se connecter" />
			</div>
		</form>
	)
}

export default LoginForm;
