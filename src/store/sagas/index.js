
import { takeEvery } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'

import { loginSaga } from './login'
import { signUpSaga } from './signup'

export function* authWatcher() {
	yield takeEvery(actionTypes.LOGIN_PROCESS, loginSaga);
	yield takeEvery(actionTypes.SIGNUP_PROCESS, signUpSaga);
}
