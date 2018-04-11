import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';

import * as config from '../../config.js';

import * as actionTypes from '../actions/actionTypes'

export function* loginSaga(action) {
	yield put({
		type : actionTypes.LOGIN,
		data : action.data
	});
	if (!action.data || !action.data.username || !action.data.password) {
		yield put({
			type: actionTypes.LOGIN_FAILED,
			err: 'Veuillez renseigner tous les champs'
		});
	} else {
		try {
			const res = yield axios.post(config.api_url+'/auth/local', {
				username : action.data.username,
				password : action.data.password
			});
			yield put({
				type : actionTypes.LOGIN_SUCCESS
			});
		} catch (err) {
			yield put({
				type : actionTypes.LOGIN_FAILED,
				err: err.toString()
			});
		}
	}
}
