
import { takeEvery } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'
import { loginSaga } from './login'

export function* loginWatcher() {
	yield takeEvery(actionTypes.LOGIN_PROCESS, loginSaga);
}
