import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

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
		yield delay(2000);
		if (action.data.username === 'cchampou' && action.data.password === 'b8gt5k98c') {
			yield put({
				type : actionTypes.LOGIN_SUCCESS
			});
		} else {
			yield put({
				type : actionTypes.LOGIN_FAILED,
				err: 'Nom d\'utilisateur ou mot de passe incorrect'
			});
		}
	}
}
