import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';

import * as config from '../../config'

export function* signUpSaga(action) {
	yield put({
		type: actionTypes.SIGNUP,
		data: action.data
	});
	try {
		yield axios.post(config.api_url+'/user', {
			lastName : action.data.name,
			firstName : action.data.firstname,
			username : action.data.username,
			email : action.data.email,
			password : action.data.password,
			picture : action.data.profilePic
		});
	} catch (e) {
		yield console.log(e);
		yield delay(3000);
		yield put({
			type: actionTypes.SIGNUP_FAILED,
			err: e.toString()
		});
	}
}
