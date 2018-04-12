import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Search from './containers/Search/Search';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import Account from './containers/Account/Account';
import ResetPass from './containers/ResetPass/ResetPass';

import './App.css';

const App = () => (
		<BrowserRouter>
			<div style={{ height: '100%', position: 'relative' }}>
				<Header />
				<Switch>
					<Route path="/" exact component={Search} />
					<Route path="/login" exact component={Login} />
					<Route path="/account" exact component={Account} />
					<Route path="/signup" exact component={Signup} />
					<Route path="/resetpass" exact component={ResetPass} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
);

export default App;
