import React from 'react'
import Button from '../Utils/Button';
import { Link } from 'react-router-dom'

const SignupForm = ( props ) => (
	<form className="card p-4" onSubmit={props.onSubmit} >
		<h2 className="text-center mb-2">Mot de passe oublié</h2>
		<div className="form-group">
			<label htmlFor="email">Adresse email :</label>
			<input
				type="email"
				id="email"
				name="email"
				value={props.email}
				onChange={props.onChange}
				className="form-control"
				disabled={props.loading} />
		</div>
		<Link to="/login" className="btn btn-sm btn-link">Retourner à la connexion</Link>
		<Button loading={props.loading} text="Recevoir un email" />
	</form>
)

export default SignupForm;
