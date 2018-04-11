import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';

export function* signUpSaga(action) {
	yield put({
		type: actionTypes.SIGNUP,
		data: action.data
	});
	try {
		yield axios.get('https://www.google.fr/');
	} catch (e) {
		yield console.log(e);
		yield delay(3000);
		yield put({
			type: actionTypes.SIGNUP_FAILED,
			err: e.toString()
		});
	}
}
