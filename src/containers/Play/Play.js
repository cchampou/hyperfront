import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'

import poster from '../../assets/img/poster.png';

import { processComment, resetComment } from '../../store/actions/play'

import * as lang from './Play.lang'

import * as actionTypes from '../../store/actions/actionTypes';

import Comment from '../../components/Play/Comment'

import Hls from 'hls.js';

class Play extends Component {

	constructor (props) {
		super (props);
		this.state = {
			comment : props.comment,
			fail: props.fail,
			success: props.success,
			casting : 'Franck Gastambide, Malik Bentalha, Bernard Farcy',
			received: false,
			comments : [],
			details : {
				poster_path : '',
				release_date : '2018'
			},
			cast : {
				crew : [],
				cast : []
			}
		}
	}

	componentDidMount () {
		this.props.resetComment();
		this.props.getMovie(this.props.match.params.id);
		this.props.getCasting(this.props.match.params.id);
	}

	componentWillUnmount (){
	    this.props.reset();
		console.log("UNMOUNT");
		if (this.state.received){
			console.log("DESTROYED");
			this.state.received.destroy();
			console.log(this.state.received);
		}
	}

	componentWillReceiveProps ( { comment, fail, success, fr, en, lang, cast_en, cast_fr, comments, username } ) {
		let received = false;

		if (this.props.username && this.props.fr.title && this.props.en.title && this.props.lang && !this.state.received){
            let video = document.getElementById('example-video');

            if(Hls.isSupported()) {
                var hls = new Hls({
                    manifestLoadingTimeOut: 240000,
                    manifestLoadingMaxRetry: 2,
                    autoStartLoad: false
                });

                console.log(this.props[this.props.lang]);
                hls.loadSource(`http://localhost:3000/video/m3u?id=${username}&name=${this.props[this.props.lang].title}`);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED,function() {
                	console.log("PARSED");
                    hls.startLoad(0);
                });
            }
            else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = `http://localhost:3000/video/m3u?id=${this.props.username}&name=${this.props[this.props.lang].title}`;
                video.addEventListener('canplay', function () {
                });
            }
            received = hls;
        }
        console.log("RECEIVED");
        console.log(this.props[this.props.lang]);

        this.setState({
			comment,
			fail,
			success,
			details : (lang === 'en')?en:fr,
			cast : (lang === 'en')?cast_en:cast_fr,
			comments,
			received: received
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
						<div className="row py-4 bg-dark">
							<div className="col-3">
								<img className="img-fluid" src={(this.state.details.poster_path)?'https://image.tmdb.org/t/p/w200'+this.state.details.poster_path:poster} alt={this.state.details.title} />
							</div>
							<div className="col">
								<h1 className="mt-4">{this.state.details.title}</h1>
								<p className="card-subtitle text-muted">{this.state.details.release_date && this.state.details.release_date.substr(0,4)} - {this.state.details.vote_average} <span style={{ color : '#FFD600' }}><FontAwesomeIcon size="xs" icon={faStar}/></span> - {this.state.details.runtime} minutes</p>
								<p>
									<strong>{lang.by(this.props.lang)} : </strong>{this.state.cast.crew[0] && this.state.cast.crew[0].name}<br />
									<strong>{lang.and(this.props.lang)} : </strong>{this.state.cast.cast[0] && this.state.cast.cast[0].name}, {this.state.cast.cast[1] && this.state.cast.cast[1].name}, {this.state.cast.cast[2] && this.state.cast.cast[2].name} ...<br />
								</p>
								<p>
									{this.state.details.overview}
								</p>
							</div>
						</div>
						<div className="row py-4 my-4 bg-dark">
							<div className="col">
							<video id="example-video" style={{ width : '100%' }} controls>
							</video>
							</div>
						</div>
						<div className="row py-4 bg-dark">
							<div className="col-lg-6 col-md-6 col-sm-12">
								<h3>{lang.comments(this.props.lang)}</h3>
								{(!this.state.comments.length)?<p>{lang.nocom(this.props.lang)}</p>:null}
								{this.state.comments.map((com, key) => (
									<p key={key}>
										<span className="text-muted"><Link to={'/user/'+com.author} >{com.name}</Link> - {com.date.toString()}</span><br />
										{com.text}
									</p>
								))}
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12">
								<Comment
									comment={this.state.comment}
									onChange={this.handleComment}
									submitComment={this.props.submitComment}
									loading={this.props.commentLoading}
									fail={this.state.fail}
									videoId={this.props.match.params.id}
									success={this.state.success}
									lang={this.props.lang} />
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
		fr : state.movie.movie_fr,
		en : state.movie.movie_en,
		cast_fr : state.movie.cast_fr,
		cast_en : state.movie.cast_en,
		comments : state.movie.comments,
		lang : state.user.lang,
		commentLoading : state.play.commentLoading,
		comment : state.play.comment,
		success : state.play.success,
		fail : state.play.fail,
		username : state.user.username
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getMovie : id => dispatch({ type : actionTypes.GET_MOVIE_SAGA, id : id }),
		getCasting : id => dispatch({ type : actionTypes.GET_CASTING_SAGA, id : id }),
		submitComment: (comment, videoId) => dispatch(processComment(comment, videoId)),
		resetComment: () => dispatch(resetComment()),
		reset : () => dispatch({ type : actionTypes.RESET_MOVIE })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);
