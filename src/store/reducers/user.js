import * as actionTypes from '../actions/actionTypes';

const initialState = {
	isLoggedIn : false,
	username : '',
	email : '',
	picture : ''
}

const reducer = ( state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOG_USER_IN:
			return {
				...state,
				isLoggedIn : true,
				username : action.user.username,
				email : action.user.email,
				avatar : action.user.avatar
			}
		case actionTypes.LOG_USER_OUT:
			return {
				...state,
				isLoggedIn : false,
				username : '',
				email : '',
				avatar : ''
			}
		case actionTypes.UPDATE_USER:
			return {
				...state,
				...action.data
			}
		default:
			return state;
	}
}

export default reducer;
