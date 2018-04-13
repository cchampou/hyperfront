import { put } from 'redux-saga/effects'

import axios from 'axios'

import * as config from '../../config.js';

import * as actionTypes from '../actions/actionTypes'

export function* processCommentSaga({ comment, videoId }) {
	yield put({
		type : actionTypes.POST_COMMENT,
		comment
	});
	try {
		yield axios.post(config.api_url+'/comment', {
			comment,
			videoId
		});
		yield put({
			type : actionTypes.POST_COMMENT_SUCCESS
		})
 	} catch (err) {
		yield put({
			type : actionTypes.POST_COMMENT_FAILED
		})
	}
}
