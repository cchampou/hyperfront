import { put } from 'redux-saga/effects'

import axios from 'axios';

import * as config from '../../config'

import * as actionTypes from '../actions/actionTypes'

export function* processAccountSaga ( action ) {
	yield put({
		type : actionTypes.POST_ACCOUNT,
		data : action.data
	});
	try {
		yield axios.patch(config.api_url+'/user', {
			username : action.data.newUsername,
			email : action.data.newEmail,
			password : action.data.newPassword
		});
		yield put ({
			type : actionTypes.ACCOUNT_SUCCESS
		});
	} catch ( err ) {
		yield put ({
			type : actionTypes.ACCOUNT_FAILED,
			err : err.toString()
		});
	}
}
