import { put } from 'redux-saga/effects'

import { authRequest } from '../../services/network'

import * as actionTypes from '../actions/actionTypes'

export function* processAccountSaga ( action ) {
	yield put({
		type : actionTypes.POST_ACCOUNT,
		data : action.data
	});
	try {
		const data = new FormData();
		let newUser = {};
		if (action.data.newEmail.length > 0) {
			yield data.append('email', action.data.newEmail);
			yield newUser = { ...newUser, email : action.data.newEmail };
		}
		if (action.data.newUsername.length > 0) {
			yield data.append('username',action.data.newUsername);
			yield newUser = { ...newUser, username : action.data.newUsername };
		}
		if (action.data.newPassword.length > 0) {
			yield data.append('password', action.data.newPassword);
		}
		if (document.getElementById('accountImg').files[0]) {
			yield data.append('avatar', document.getElementById('accountImg').files[0]);			
		}
		yield authRequest('/user', 'patch', data);
		if (document.getElementById('accountImg').files[0]) {
			const res = yield authRequest('/user/select', 'get', data);
			yield newUser = { ...newUser, avatar : res.data.avatar }
		}
		yield put ({
			type : actionTypes.ACCOUNT_SUCCESS
		});
		yield put({
			type : actionTypes.UPDATE_USER,
			data : { ...newUser }
		})
	} catch ( err ) {
		const errMessage = yield (err.response)?err.response.data.toString():"Une erreur est survenue";
		yield put ({
			type : actionTypes.ACCOUNT_FAILED,
			err : errMessage
		});
	}
}
