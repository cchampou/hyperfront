
import { takeLatest } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'

import { loginSaga, loginLocal, logout, autoLoginSaga, externalLoginSaga } from './login'
import { signUpSaga } from './signup'
import { processCommentSaga } from './play'
import { processAccountSaga } from './account'

export function* sagaWatcher() {
	yield takeLatest(actionTypes.LOGIN_PROCESS, loginSaga);
	yield takeLatest(actionTypes.LOGIN_LOCAL, loginLocal);
	yield takeLatest(actionTypes.LOGOUT, logout);
	yield takeLatest(actionTypes.SIGNUP_PROCESS, signUpSaga);
	yield takeLatest(actionTypes.PROCESS_COMMENT, processCommentSaga);
	yield takeLatest(actionTypes.PROCESS_ACCOUNT, processAccountSaga);
	yield takeLatest(actionTypes.AUTO_LOGIN, autoLoginSaga);
	yield takeLatest(actionTypes.EXTERNAL_LOGIN, externalLoginSaga);
}
