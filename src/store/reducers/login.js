import * as actions from '../actions/actions';

const initialState = {
	username : '',
	password : '',
	loading: false,
	failed : false
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
				failed: true
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
