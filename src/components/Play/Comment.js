import React from 'react'
import Button from '../Utils/Button'

const Comment = ( props ) => (
	<form onSubmit={(e) => { e.preventDefault(); props.submitComment(props.comment, props.videoId); } } >
		<div className="form-group">
			<label htmlFor="comment">Mon commentaire :</label>
			<input
				type="text"
				name="comment"
				id="comment"
				value={props.comment}
				className="form-control"
				onChange={props.onChange} />
		</div>
		{props.fail &&
		<p className="alert alert-danger">
			Echec de la creation du commentaire
		</p>}
		{props.success &&
		<p className="alert alert-success">
			Le commentaire a été posté avec succès
		</p>}
		<div className="form-group text-center">
			<Button text="Envoyer" loading={props.loading} />
		</div>
	</form>
)

export default Comment;
