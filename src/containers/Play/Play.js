import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'

export default class Play extends Component {

	state = {
		title : 'Taxi 5',
		cover : 'http://t0.gstatic.com/images?q=tbn:ANd9GcTVwSyjEPLjLlwy7F5f9oSkZ5Z6wG1nI2pGagtDF0MGAdeWqnzf',
		date : '2018',
		duree :' 1h 42min',
		note : 4.5,
		resume : 'Sylvain Marot, super flic parisien et pilote d’exception, est muté contre son gré à la Police Municipale de Marseille. L’ex-commissaire Gibert, devenu Maire de la ville et au plus bas dans les sondages, va alors lui confier la mission de stopper le redoutable « Gang des Italiens », qui écume des bijouteries à l’aide de puissantes Ferrari. Mais pour y parvenir, Marot n’aura pas d’autre choix que de collaborer avec le petit-neveu du célèbre Daniel, Eddy Maklouf, le pire chauffeur VTC de Marseille, mais le seul à pouvoir récupérer le légendaire TAXI blanc.',
		realisateur : 'Franck Gastambide',
		casting : 'Franck Gastambide, Malik Bentalha, Bernard Farcy'
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
					</div>
				</div>
				<div className="row my-4">
					<div className="col">
					</div>
				</div>
			</div>
		)
	}
}
