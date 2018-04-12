import * as actionTypes from '../actions/actionTypes';

const initialState = {
	isLoggedIn : false,
	username : '',
	email : ''
}

const reducer = ( state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOG_USER_IN:
			return {
				...state,
				isLoggedIn : true,
				username : action.user.username,
				email : action.user.email
			}
		case actionTypes.LOG_USER_OUT:
			return {
				...state,
				isLoggedIn : false,
				username : '',
				email : ''
			}
		default:
			return state;
	}
}

export default reducer;
