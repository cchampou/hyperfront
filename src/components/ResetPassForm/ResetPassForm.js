import React from 'react'
import Button from '../Utils/Button';
import { Link } from 'react-router-dom'

const SignupForm = ( props ) => (
	<form className="card p-4" onSubmit={(e) => { e.preventDefault(); props.onSubmit(props.data); } } >
		<h2 className="text-center mb-2">Mot de passe oublié</h2>
		{props.data.error && <p className="alert alert-danger">{props.data.error}</p>}
		<div className="form-group">
			<label htmlFor="email">Adresse email :</label>
			<input
				type="email"
				id="email"
				name="email"
				value={props.data.email}
				onChange={props.onChange}
				className="form-control"
				disabled={props.data.loading} />
		</div>
		<Link to="/login" className="btn btn-sm btn-link">Retourner à la connexion</Link>
		<Button loading={props.data.loading} text="Recevoir un email" />
	</form>
)

export default SignupForm;
