import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'

import { processComment, resetComment } from '../../store/actions/play'

import Comment from '../../components/Play/Comment'

class Play extends Component {

	constructor (props) {
		super (props);
		this.state = {
			comment : props.comment,
			fail: props.fail,
			success: props.success,
			title : 'Taxi 5',
			cover : 'http://t0.gstatic.com/images?q=tbn:ANd9GcTVwSyjEPLjLlwy7F5f9oSkZ5Z6wG1nI2pGagtDF0MGAdeWqnzf',
			date : '2018',
			duree :' 1h 42min',
			note : 4.5,
			resume : 'Sylvain Marot, super flic parisien et pilote d’exception, est muté contre son gré à la Police Municipale de Marseille. L’ex-commissaire Gibert, devenu Maire de la ville et au plus bas dans les sondages, va alors lui confier la mission de stopper le redoutable « Gang des Italiens », qui écume des bijouteries à l’aide de puissantes Ferrari. Mais pour y parvenir, Marot n’aura pas d’autre choix que de collaborer avec le petit-neveu du célèbre Daniel, Eddy Maklouf, le pire chauffeur VTC de Marseille, mais le seul à pouvoir récupérer le légendaire TAXI blanc.',
			realisateur : 'Franck Gastambide',
			casting : 'Franck Gastambide, Malik Bentalha, Bernard Farcy',
			comments : [
				{
					content : "Bof bof, jpreferais les precedents",
					author : 'Clement',
					authorId : '123456',
					date : new Date()
				},
				{
					content : "C'est un bon gros film de merde encore",
					author : 'Mathieu',
					authorId : '123456',
					date : new Date()
				}
			]
		}
	}

	componentDidMount () {
		this.props.resetComment();
	}

	componentWillReceiveProps ( { comment, fail, success } ) {
		this.setState({
			comment,
			fail,
			success
		})
	}


	handleComment = (e) => {
		this.setState({
			comment : e.target.value
		});
	}

	render () {
		return (
			<div className="container">
				<div className="row my-4">
					<div className="col">
						<div className="row">
							<div className="col-3">
								<img className="img-fluid" src={this.state.cover} alt={this.state.title} />
							</div>
							<div className="col">
								<h1 className="mt-4">{this.state.title}</h1>
								<p className="card-subtitle text-muted">{this.state.date} - {this.state.note} <span style={{ color : '#FFD600' }}><FontAwesomeIcon size="xs" icon={faStar}/></span> - {this.state.duree}</p>
								<p>
									<strong>Réalisateur : </strong>{this.state.realisateur}<br />
									<strong>Casting : </strong>{this.state.casting}
								</p>
								<p>
									{this.state.resume}
								</p>
							</div>
						</div>
						<div className="row my-4">
							<div className="col">
								<p className="text-center">Player video</p>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<h3>Commentaires</h3>
								{this.state.comments.map((com, key) => (
									<p key={key}>
										<span className="text-muted"><Link to={'/user/'+com.authorId} >{com.author}</Link> - {com.date.toString()}</span><br />
										{com.content}
									</p>
								))}
							</div>
							<div className="col">
								<Comment
									comment={this.state.comment}
									onChange={this.handleComment}
									submitComment={this.props.submitComment}
									loading={this.props.commentLoading}
									fail={this.state.fail}
									success={this.state.success} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		commentLoading : state.play.commentLoading,
		comment : state.play.comment,
		success : state.play.success,
		fail : state.play.fail
	}
}

const mapDispatchToProps = dispatch => {
	return {
		submitComment: (comment) => dispatch(processComment(comment)),
		resetComment: () => dispatch(resetComment())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);
