import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import loginReducer from './store/reducers/login';
import signupReducer from './store/reducers/signup';
import resetPassReducer from './store/reducers/resetPass';

import { authWatcher } from './store/sagas';

const rootReducer = combineReducers({
	login: loginReducer,
	signup: signupReducer,
	resetPass: resetPassReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(authWatcher);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
