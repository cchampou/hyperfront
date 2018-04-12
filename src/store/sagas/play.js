import { put } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import axios from 'axios'

import * as config from '../../config.js';

import * as actionTypes from '../actions/actionTypes'

export function* processCommentSaga(action) {
	yield put({
		type : actionTypes.POST_COMMENT,
		comment : action.comment
	});
	console.log("async request with content", action.comment)
	yield delay(1000);
	yield put({
		type : actionTypes.POST_COMMENT_SUCCESS
	})
}
