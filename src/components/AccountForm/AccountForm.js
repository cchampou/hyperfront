import React from 'react';

const AccountForm = (props) => (
	<form>
		<h2 className="text-center">Mon compte</h2>
		<h3>Modifier mon nom d'utilisateur</h3>
		<div className="form-group">
			<label htmlFor="email">Nouveau nom d'utilisateur :</label>
			<input
				type="text"
				className="form-control"
				id="username"
				name="username"
				value={props.data} />
		</div>
		<h3>Modifier mon adresse email</h3>
		{/* props.data.failed && <p className="alert alert-danger">Nom d'utilisateur ou mot de passe incorrect</p>*/}
		<div className="form-group">
			<label htmlFor="email">Nouvelle adresse email :</label>
			<input
				type="email"
				className="form-control"
				id="email"
				name="email"
				value={props.data} />
		</div>
		<h3>Modifier mon mot de passe</h3>
		<div className="form-group">
			<label htmlFor="email">Nouveau mot de passe :</label>
			<input
				type="password"
				className="form-control"
				id="password"
				name="password"
				value={props.data} />
		</div>
		<div className="form-group">
			<label htmlFor="email">Confirmation mot de passe :</label>
			<input
				type="password"
				className="form-control"
				id="confirmation"
				name="confirmation"
				value={props.data} />
		</div>
	</form>
)

export default AccountForm;
