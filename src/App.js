import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import Reset from './containers/Reset/Reset';

import './App.css';

const App = () => (
		<BrowserRouter>
			<div style={{ height: '100%', position: 'relative' }}>
				<Header />
				<Switch>
					<Route path="/login" exact component={Login} />
					<Route path="/signup" exact component={Signup} />
					<Route path="/reset" exact component={Reset} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
);

export default App;
