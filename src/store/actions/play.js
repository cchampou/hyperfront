import * as actionTypes from './actionTypes'

export const processComment = comment => ({
	type : actionTypes.PROCESS_COMMENT,
	comment : comment
})

export const resetComment = () => ({
	type : actionTypes.RESET_COMMENT
})
