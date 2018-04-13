import React from 'react';

import Button from '../Utils/Button'

import ProfilePic from '../../assets/img/profile.svg';

const AccountForm = (props) => (
	<form onSubmit={(e) => {
			e.preventDefault();
			console.log(props);
			props.submitAccount(props);
		}}>
		<h2 className="text-center">Mon compte</h2>
		<div className="row">
			<div className="col-lg-6">
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-4 col-sm-4 col-6 my-4">
						<img className="mx-auto img-thumbnail" src={ProfilePic} alt="Default profile" />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="profilePic">Nouvelle photo de profil :</label>
					<input
						type="file"
						className="form-control"
						id="profilePic"
						name="profilePic" />
				</div>
			</div>
			<div className="col-lg-6">
				<div className="form-group">
					<label htmlFor="newUsername">Nom d'utilisateur :</label>
					<input
						type="text"
						className="form-control"
						id="newUsername"
						name="newUsername"
						placeholder={props.data.username}
						onChange={props.handleChange}
						value={props.newUsername} />
				</div>
				<div className="form-group">
					<label htmlFor="newEmail">Adresse email :</label>
					<input
						type="email"
						className="form-control"
						id="newEmail"
						name="newEmail"
						placeholder={props.data.email}
						onChange={props.handleChange}
						value={props.newEmail} />
				</div>
				<div className="form-group">
					<label htmlFor="newPassword">Nouveau mot de passe :</label>
					<input
						type="password"
						className="form-control"
						id="newPassword"
						name="newPassword"
						value={props.newPassword}
						onChange={props.handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="newConfirmation">Confirmation mot de passe :</label>
					<input
						type="password"
						className="form-control"
						id="newConfirmation"
						name="newConfirmation"
						onChange={props.handleChange}
						value={props.newConfirmation} />
				</div>
			</div>
		</div>
		{props.fail &&
		<p className="alert alert-danger">{props.fail}</p>}
		{props.success &&
		<p className="alert alert-success">Vos profil a bien été mis à jour</p>}
		<div className="form-group text-center">
			<Button text="Enregistrer" loading={props.loading} />
		</div>
	</form>
)

export default AccountForm;
