import React from 'react'
import { Link } from 'react-router-dom'

const SignupForm = ( props ) => (
	<form className="card p-4">
		<h2 className="text-center mb-2">Inscription</h2>
		<div className="row">
			<div className="col-lg-6">
				<div className="form-group">
					<label htmlFor="name">Nom :</label>
					<input type="text" id="name" name="name" value={props.name} onChange={props.onChangeHandler} className="form-control"/>
				</div>
				<div className="form-group">
					<label htmlFor="firstname">Prénom :</label>
					<input type="text" id="firstname" name="firstname" value={props.firstname} onChange={props.onChangeHandler} className="form-control"/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Adresse email :</label>
					<input type="email" id="email" name="email" value={props.email} onChange={props.onChangeHandler} className="form-control"/>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="form-group">
					<label htmlFor="username">Nom d'utilisateur :</label>
					<input type="text" id="username" name="username" value={props.username} onChange={props.onChangeHandler} className="form-control"/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Mot de passe :</label>
					<input type="password" id="password" name="password" onChange={props.onChangeHandler} className="form-control"/>
				</div>
				<div className="form-group">
					<label htmlFor="confirmation">Confirmation de mot de passe :</label>
					<input type="password" id="confirmation" name="confirmation" onChange={props.onChangeHandler} className="form-control"/>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col text-center">
				<Link to="/reset" className="btn btn-sm btn-link">J'ai oublié mon mot de passe</Link>
				<Link to="/reset" className="btn btn-sm btn-link">J'ai déjà un compte</Link><br />
				<button className="btn btn-primary mt-2">S'inscrire</button>
			</div>
		</div>
	</form>
)

export default SignupForm;
