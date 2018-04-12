import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'

export default class Search extends Component {

	state = {
		selection: false,
		search : '',
		results : [
			{
				title : 'Taxi 5',
				cover : 'http://t0.gstatic.com/images?q=tbn:ANd9GcTVwSyjEPLjLlwy7F5f9oSkZ5Z6wG1nI2pGagtDF0MGAdeWqnzf',
				date : '2018',
				note : 4.5
			},
			{
				title : 'Taxi 5',
				cover : 'http://t0.gstatic.com/images?q=tbn:ANd9GcTVwSyjEPLjLlwy7F5f9oSkZ5Z6wG1nI2pGagtDF0MGAdeWqnzf',
				date : '2018',
				note : 4.5
			},
			{
				title : 'Taxi 5',
				cover : 'http://t0.gstatic.com/images?q=tbn:ANd9GcTVwSyjEPLjLlwy7F5f9oSkZ5Z6wG1nI2pGagtDF0MGAdeWqnzf',
				date : '2018',
				note : 4.5
			},
			{
				title : 'Taxi 5',
				cover : 'http://t0.gstatic.com/images?q=tbn:ANd9GcTVwSyjEPLjLlwy7F5f9oSkZ5Z6wG1nI2pGagtDF0MGAdeWqnzf',
				date : '2018',
				note : 4.5
			},
			{
				title : 'Taxi 5',
				cover : 'http://t0.gstatic.com/images?q=tbn:ANd9GcTVwSyjEPLjLlwy7F5f9oSkZ5Z6wG1nI2pGagtDF0MGAdeWqnzf',
				date : '2018',
				note : 4.5
			},
			{
				title : 'Taxi 5',
				cover : 'http://t0.gstatic.com/images?q=tbn:ANd9GcTVwSyjEPLjLlwy7F5f9oSkZ5Z6wG1nI2pGagtDF0MGAdeWqnzf',
				date : '2018',
				note : 4.5
			},
			{
				title : 'Taxi 5',
				cover : 'http://t0.gstatic.com/images?q=tbn:ANd9GcTVwSyjEPLjLlwy7F5f9oSkZ5Z6wG1nI2pGagtDF0MGAdeWqnzf',
				date : '2018',
				note : 4.5
			},
			{
				title : 'Taxi 5',
				cover : 'http://t0.gstatic.com/images?q=tbn:ANd9GcTVwSyjEPLjLlwy7F5f9oSkZ5Z6wG1nI2pGagtDF0MGAdeWqnzf',
				date : '2018',
				note : 4.5
			},
			{
				title : 'Taxi 5',
				cover : 'http://t0.gstatic.com/images?q=tbn:ANd9GcTVwSyjEPLjLlwy7F5f9oSkZ5Z6wG1nI2pGagtDF0MGAdeWqnzf',
				date : '2018',
				note : 4.5
			},
			{
				title : 'Taxi 5',
				cover : 'http://t0.gstatic.com/images?q=tbn:ANd9GcTVwSyjEPLjLlwy7F5f9oSkZ5Z6wG1nI2pGagtDF0MGAdeWqnzf',
				date : '2018',
				note : 4.5
			},
			{
				title : 'Taxi 5',
				cover : 'http://t0.gstatic.com/images?q=tbn:ANd9GcTVwSyjEPLjLlwy7F5f9oSkZ5Z6wG1nI2pGagtDF0MGAdeWqnzf',
				date : '2018',
				note : 4.5
			},
			{
				title : 'Taxi 5',
				cover : 'http://t0.gstatic.com/images?q=tbn:ANd9GcTVwSyjEPLjLlwy7F5f9oSkZ5Z6wG1nI2pGagtDF0MGAdeWqnzf',
				date : '2018',
				note : 4.5
			}
		]
	}

	search = (e) => {
		this.setState({ search : e.target.value })
	}

	select = (id) => {
		this.setState({ selection : id });
	}

	render () {
		return (
			<div className="container">
				{(this.state.selection !== false) ? <Redirect to={'/play/'+this.state.selection} push={true} />:null}
				<div className="col">
					<div className="form-group my-4">
						<input
							type="text"
							className="form-control"
							onChange={this.search}
							value={this.state.search} />
					</div>
					<div className="row justify-content-center">
					{this.state.results.map((elem, key) => (
						<div onClick={this.select.bind(this, key)} className="card m-2" style={{ width: '10rem', cursor: 'pointer' }} key={key} >
							<img className="card-img-top" src={elem.cover} alt={elem.title} />
							<div className="card-body">
								<h5 className="card-title">{elem.title}</h5>
								<p className="card-subtitle text-muted">{elem.date} - {elem.note} <span style={{ color : '#FFD600' }}><FontAwesomeIcon size="xs" icon={faStar}/></span></p>
							</div>
						</div>
					))}
					</div>
				</div>
			</div>
		)
	}
}
