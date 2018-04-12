import React from 'react';
import ProfilePic from '../../assets/img/profile.svg';

const AccountForm = (props) => (
	<form>
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
				<div className="form-group">
					<label htmlFor="username">Nom d'utilisateur :</label>
					<input
						type="text"
						className="form-control"
						id="username"
						name="username"
						value={props.data.username} />
				</div>
			</div>
			<div className="col-lg-6">
				<div className="form-group">
					<label htmlFor="email">Adresse email :</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						value={props.data.email} />
				</div>
				<div className="form-group">
					<label htmlFor="email">Nouveau mot de passe :</label>
					<input
						type="password"
						className="form-control"
						id="password"
						name="password" />
				</div>
				<div className="form-group">
					<label htmlFor="email">Confirmation mot de passe :</label>
					<input
						type="password"
						className="form-control"
						id="confirmation"
						name="confirmation" />
				</div>
			</div>
		</div>
		<div className="form-group text-right">
			<button className="btn btn-success">Enregistrer</button>
		</div>
	</form>
)

export default AccountForm;
