
import { takeLatest } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'

import { loginSaga, loginLocal, logout, autoLoginSaga, externalLoginSaga, resetPassSaga } from './login'
import { signUpSaga } from './signup'
import { processCommentSaga } from './play'
import { processAccountSaga, switchLangSaga } from './account'
import { getGenresSaga } from './genre'
import { getMoviesSaga, getMovieSaga, getCastingSaga, getCommentsSaga } from './movie';

export function* sagaWatcher() {
	yield takeLatest(actionTypes.LOGIN_PROCESS, loginSaga);
	yield takeLatest(actionTypes.LOGIN_LOCAL, loginLocal);
	yield takeLatest(actionTypes.LOGOUT, logout);
	yield takeLatest(actionTypes.SIGNUP_PROCESS, signUpSaga);
	yield takeLatest(actionTypes.PROCESS_COMMENT, processCommentSaga);
	yield takeLatest(actionTypes.PROCESS_ACCOUNT, processAccountSaga);
	yield takeLatest(actionTypes.AUTO_LOGIN, autoLoginSaga);
	yield takeLatest(actionTypes.EXTERNAL_LOGIN, externalLoginSaga);
	yield takeLatest(actionTypes.RESET_PASS_PROCESS, resetPassSaga);
	yield takeLatest(actionTypes.GET_GENRES_SAGA, getGenresSaga);
	yield takeLatest(actionTypes.GET_MOVIES_SAGA, getMoviesSaga);
	yield takeLatest(actionTypes.GET_MOVIE_SAGA, getMovieSaga);
	yield takeLatest(actionTypes.GET_CASTING_SAGA, getCastingSaga);
	yield takeLatest(actionTypes.SWITCH_LANG_SAGA, switchLangSaga);
	yield takeLatest(actionTypes.GET_COMMENTS_SAGA, getCommentsSaga);
}
