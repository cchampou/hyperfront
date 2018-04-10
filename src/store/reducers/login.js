import * as actions from '../actions/login';

const initialState = {
	username : '',
	password : '',
	loading: false,
	failed : false,
	success : false
}

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case actions.LOGIN:
			return {
				...state,
				username: action.data.username,
				password: action.data.password,
				loading: true,
				failed: false
			}
		case actions.LOGIN_FAILED:
			return {
				...state,
				password: '',
				loading: false,
				failed: true,
				success: false
			}
		case actions.LOGIN_SUCCESS:
			return {
				...state,
				password: '',
				loading: false,
				success: true,
				failed: false
			}
		case actions.LOGIN_RESET:
			return {
				...state,
				username: '',
				password: '',
				loading: false,
				failed: false
			}
		default:
			return state;
	}
}

export default reducer;
