import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'
import { connect } from "react-redux";
import * as actionTypes from '../../store/actions/actionTypes';
import poster from '../../assets/img/poster.png';
import Loading from '../../utils/Loader';
import * as lang from './Search.lang';

class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selection: false,
			search : '',
			movies : props.movies,
			genre : 0,
			loading : false,
			page : 1,
			dgte : '1900',
			dlte : '2018',
			vgte : 0,
			vlte : 10,
			sort : 'popularity.desc'
		}
	}


	componentDidMount() {
		console.log("test");
		this.props.resetMovies();
		this.handleScroll();
		this.props.getGenres();
		window.addEventListener("scroll", this.handleScroll);
	}

	handleScroll = () => {
		setTimeout(() => {
			const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
			const body = document.body;
			const html = document.documentElement;
			const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
			const windowBottom = windowHeight + window.pageYOffset;
			if (windowBottom >= docHeight - 50 && this.state.loading === false) {
				this.setState({
					loading : true
				})
				this.props.getMovies(this.state.genre, this.props.lang, this.props.page, this.state.search, this.state.dgte, this.state.dlte, this.state.vgte, this.state.vlte, this.state.sort);	
			} else {
			}
		}, 250);
	}

	componentWillReceiveProps ( next ) {
		this.setState({
			loading : next.loading,
			page : next.page,
			movies : next.movies
		});
		if (next.lang !== this.props.lang) {
			this.props.resetMovies();
		}
		if (next.page < 10) {
			this.handleScroll();
		}
	}

	search = (e) => {
		this.setState({ search : e.target.value });
	}

	select = (id) => {
		this.setState({ selection : id });
	}
	
	selectGenre = genreId => {
		this.setState({ search : '' });
		this.setState({
			genre : genreId
		});
		this.props.resetMovies();
		this.handleScroll();
	}

	submitInputs = (e) => {
		if (this.state.search) {
			this.setState({
				genre : ''
			});
		}
		e.preventDefault();
		this.props.resetMovies();
		this.handleScroll();
	}

	handleInput = e => {
		this.setState({ search : '' });
		this.setState({
			[e.target.name] : e.target.value
		})
		// if (e.target.value.length === 4) {
		// 	this.props.resetMovies();
		// 	this.handleScroll();
		// }
		// if ((e.target.name === 'vgte' || e.target.name === 'vlte') && e.target.value <= 10 && e.target.value >= 0) {
		// 	this.props.resetMovies();
		// 	this.handleScroll();
		// }
	}

	handleSort = (crit) => {
		if (crit === 'pop') {
			if (this.state.sort === 'popularity.desc') {
				this.setState({
					sort : 'popularity.asc'
				});
			} else {
				this.setState({
					sort : 'popularity.desc'
				});
			}
		} else if (crit === 'vote') {
			if (this.state.sort === 'vote_average.desc') {
				this.setState({
					sort : 'vote_average.asc'
				});
			} else {
				this.setState({
					sort : 'vote_average.desc'
				});
			}
		} else if (crit === 'date') {
			if (this.state.sort === 'release_date.desc') {
				this.setState({
					sort : 'release_date.asc'
				});
			} else {
				this.setState({
					sort : 'release_date.desc'
				});
			}
		} else {
			this.setState({
				sort : 'popularity.desc'
			});
		}
		this.props.resetMovies();
		this.handleScroll();
	}

	render () {
		return (
			<div className="container-fluid">
				{(this.state.selection !== false) ? <Redirect to={'/play/'+this.state.selection} push={true} />:null}
				{(this.props.isLoggedIn)?
				<div className="row p-4">
					<div className="col-lg-2 col-md-3 col-sm-4 bg-dark">
						<form onSubmit={this.submitInputs.bind(this)} className="form-group my-4">
							<input
								type="text"
								className="form-control"
								onChange={this.search}
								value={this.state.search}
								placeholder="Rechercher..." />
						</form>
						<h5 className="my-4">Trier par</h5>
						<span className={((this.state.sort === 'popularity.desc' || this.state.sort === 'popularity.asc')?'text-primary':'text-light')+" btn btn-link"} onClick={this.handleSort.bind(this, 'pop')}>Popularité</span>
						<span className={((this.state.sort === 'vote_average.desc' || this.state.sort === 'vote_average.asc')?'text-primary':'text-light')+" btn btn-link"} onClick={this.handleSort.bind(this, 'vote')}>Note</span>
						<span className={((this.state.sort === 'release_date.desc' || this.state.sort === 'release_date.asc')?'text-primary':'text-light')+" btn btn-link"} onClick={this.handleSort.bind(this, 'date')}>Date de sortie</span>
						<h5 className="my-4">Genres</h5>
						{(this.props.lang === 'fr') && this.props.genre_fr.map((e, key) => (
							<div key={key} className={((this.state.genre === e.id)?'text-primary':'text-light')+" btn btn-link"} onClick={this.selectGenre.bind(this, e.id)} >
								<span>{e.name}</span><br />
							</div>
						))}
						{(this.props.lang === 'en') && this.props.genre_en.map((e, key) => (
							<div key={key} className={((this.state.genre === e.id)?'text-primary':'text-light')+" btn btn-link"} onClick={this.selectGenre.bind(this, e.id)} >
								<span>{e.name}</span><br />
							</div>
						))}
						<h5 className="my-4">Filtrer par date</h5>
						<div className="row">
							<form onSubmit={this.submitInputs.bind(this)} className="col-6">
								<input type="number" className="form-control" min="1900" max="2018" step="1" placeholder="min." onChange={this.handleInput} name="dgte" value={this.state.dgte} />
							</form>
							<form onSubmit={this.submitInputs.bind(this)} className="col-6">
								<input type="number" className="form-control" min="1900" max="2018" step="1" placeholder="max." onChange={this.handleInput} name="dlte" value={this.state.dlte} />
							</form>
						</div>
						<h5 className="my-4">Filtrer par note</h5>
						<div className="row mb-4">
							<form onSubmit={this.submitInputs.bind(this)} className="col-6">
								<input type="number" className="form-control" min="0" max="10" step="0.1" placeholder="min." onChange={this.handleInput} name="vgte" value={this.state.vgte} />
							</form>
							<form onSubmit={this.submitInputs.bind(this)} className="col-6">
								<input type="number" className="form-control" min="0" max="10" step="0.1" placeholder="max." onChange={this.handleInput} name="vlte" value={this.state.vlte} />
							</form>
						</div>
					</div>
					<div className="col-lg-10 col-md-9 col-sm-8">
						<div className="row justify-content-center">
							{this.state.movies.map((elem, key) => (
								<div onClick={this.select.bind(this, elem.id)} className="card m-2" style={{ width: '10rem', cursor: 'pointer' }} key={key} >
									<img className="card-img-top" src={(elem.poster_path)?'https://image.tmdb.org/t/p/w200'+elem.poster_path:poster} alt={elem.title} />
									<div className="card-body">
										<h5 className="card-title">{elem.title}</h5>
										<p className="card-subtitle text-muted">{elem.release_date.substr(0, 4)} - {elem.vote_average} <span style={{ color : '#FFD600' }}><FontAwesomeIcon size="xs" icon={faStar}/></span></p>
									</div>
								</div>
							))}
						</div>
						{(this.state.loading)?
						<Loading />:null}
					</div>
				</div>
				:<div className="row justify-content-center align-items-center" style={{ marginTop : '20%' }}>
					<div className="col-4 text-center bg-dark p-4">
						<h1 className="text-center">HyperTube</h1>
						<h2 className="text-center text-muted">{lang.slogan(this.props.lang)}</h2>
						<Link to="/login" className="btn btn-primary my-2 form-control">{lang.login(this.props.lang)}</Link><br />
						<Link to="/signup" className="btn btn-secondary my-2 form-control">{lang.signup(this.props.lang)}</Link>
					</div>
				</div>}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	genre_fr : state.genre.genres_fr,
	genre_en : state.genre.genres_en,
	page : state.movie.page,
	lang : state.user.lang,
	movies : state.movie.movies,
	loading : state.movie.loadingList,
	isLoggedIn : state.user.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
	getGenres : () => dispatch({ type : actionTypes.GET_GENRES_SAGA }),
	getMovies : (genre, lang, page, name, dgte, dlte, vgte, vlte, sort) => dispatch({ type : actionTypes.GET_MOVIES_SAGA, genre, lang, page, name, dgte, dlte, vgte, vlte, sort }),
	resetMovies : () => dispatch({ type : actionTypes.RESET_MOVIES })
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);