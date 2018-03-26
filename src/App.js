import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './containers/Login';
import Header from './components/Header/Header'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
				<Header />
					<Switch>
						<Route path="/login" exact component={Login} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
