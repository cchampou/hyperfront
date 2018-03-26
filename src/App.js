import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header'

import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';

import './App.css';

const App = () => (
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

export default App;
