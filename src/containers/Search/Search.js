import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'
import { connect } from "react-redux";
import * as actionTypes from '../../store/actions/actionTypes';
import poster from '../../assets/img/poster.png';
import Loading from '../../utils/Loader';

class Search extends Component {

	state = {
		selection: false,
		search : '',
		results : [],
		loading : true
	}


	componentDidMount() {
		this.props.getGenres();
		this.props.getMovies(0, this.props.lang, 1, this.state.search);
	}

	componentWillReceiveProps ( next ) {
		this.setState({ loading : next.loading })
		if (next.lang !== this.props.lang) {
			this.props.getMovies(0, next.lang, 1, this.state.search);
		}
	}


	search = (e) => {
		this.setState({ search : e.target.value });
		this.props.getMovies(0, this.props.lang, 1, e.target.value);		
	}

	select = (id) => {
		this.setState({ selection : id });
	}

	render () {
		return (
			<div className="container-fluid">
				{(this.state.selection !== false) ? <Redirect to={'/play/'+this.state.selection} push={true} />:null}
				<div className="row p-4">
					<div className="col-lg-2 col-md-3 col-sm-4 bg-dark">
						<div className="form-group my-4">
							<input
								type="text"
								className="form-control"
								onChange={this.search}
								value={this.state.search}
								placeholder="Rechercher..." />
						</div>
						<h5>Genres</h5>
						{(this.props.lang === 'fr') && this.props.genre_fr.map((e, key) => (
							<div key={key} style={{ cursor : 'pointer' }} >
								<span onClick={this.props.getMovies.bind(this, e.id.toString(), this.props.lang, 1, '')}>{e.name}</span><br />
							</div>
						))}
						{(this.props.lang === 'en') && this.props.genre_en.map((e, key) => (
							<div key={key} style={{ cursor : 'pointer' }} >
								<span onClick={this.props.getMovies.bind(this, e.id.toString(), this.props.lang, 1, '')}>{e.name}</span><br />
							</div>
						))}
					</div>
					<div className="col-lg-10 col-md-9 col-sm-8">
						{(this.state.loading)?
						<Loading />
						:<div className="row justify-content-center">
							{this.props.movies.map((elem, key) => (
								<div onClick={this.select.bind(this, elem.id)} className="card m-2" style={{ width: '10rem', cursor: 'pointer' }} key={key} >
									<img className="card-img-top" src={(elem.poster_path)?'https://image.tmdb.org/t/p/w200'+elem.poster_path:poster} alt={elem.title} />
									<div className="card-body">
										<h5 className="card-title">{elem.title}</h5>
										<p className="card-subtitle text-muted">{elem.release_date.substr(0, 4)} - {elem.vote_average} <span style={{ color : '#FFD600' }}><FontAwesomeIcon size="xs" icon={faStar}/></span></p>
									</div>
								</div>
							))}
						</div>}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	genre_fr : state.genre.genres_fr,
	genre_en : state.genre.genres_en,
	lang : state.user.lang,
	movies : state.movie.movies,
	loading : state.movie.loadingList
})

const mapDispatchToProps = dispatch => ({
	getGenres : () => dispatch({ type : actionTypes.GET_GENRES_SAGA }),
	getMovies : (genre, lang, page, name) => dispatch({ type : actionTypes.GET_MOVIES_SAGA, genre, lang, page, name })
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);