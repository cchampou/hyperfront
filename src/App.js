import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Search from './containers/Search/Search';
import Play from './containers/Play/Play';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import Account from './containers/Account/Account';
import ResetPass from './containers/ResetPass/ResetPass';
import Auth from './containers/Auth/Auth';
import Profile from './containers/Profile/Profile';

import './App.css';

const App = () => (
		<BrowserRouter>
			<div style={{ minHeight: '100%', position: 'relative', paddingBottom: '60px' }}>
				<Header />
				<Switch>
					<Route path="/" exact component={Search} />
					<Route path="/play/:id" exact component={Play} />
					<Route path="/authenticate/:token" exact component={Auth} />
					<Route path="/login" exact component={Login} />
					<Route path="/account" exact component={Account} />
					<Route path="/signup" exact component={Signup} />
					<Route path="/resetpass" exact component={ResetPass} />
					<Route path="/user/:id" exact component={Profile} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
);

export default App;
