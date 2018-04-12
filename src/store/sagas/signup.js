import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';

import * as config from '../../config'

export function* signUpSaga(action) {
	yield put({
		type: actionTypes.SIGNUP,
		data: action.data
	});
	if (!action.data.name || !action.data.firstname || !action.data.email || !action.data.username || !action.data.password || !action.data.confirmation) {
		yield put({
			type: actionTypes.SIGNUP_FAILED,
			err: "Veuillez renseigner tous les champs"
		});
	} else if (action.data.password !== action.data.confirmation) {
		yield put({
			type: actionTypes.SIGNUP_FAILED,
			err: "Le mot de passe et sa confirmation ne correspondent pas"
		});
	} else {
		try {
			const user = yield axios.post(config.api_url+'/user', {
				lastName : action.data.name,
				firstName : action.data.firstname,
				username : action.data.username,
				email : action.data.email,
				password : action.data.password,
				picture : action.data.profilePic
			});
			yield put({
				type : actionTypes.SIGNUP_SUCCESS
			});
			yield put({
				type : actionTypes.LOG_USER_IN,
				user : user.data
			});
			yield put({
				type : actionTypes.LOGIN_LOCAL,
				token : user.data.token
			});
		} catch (e) {
			yield put({
				type: actionTypes.SIGNUP_FAILED,
				err: e.toString()
			});
		}
	}
}
