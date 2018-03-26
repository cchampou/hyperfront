import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header'

import Login from './containers/Login';
import Signup from './containers/Signup';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
				<Header />
					<Switch>
						<Route path="/login" exact component={Login} />
						<Route path="/signup" exact component={Signup} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
