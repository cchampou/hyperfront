
import * as actions from '../actions/resetPass'

const initialState = {
	email: '',
	loading: false,
	error: ''
}

export const reducer = (state = initialState, action) => {

	switch (action.type) {
		case actions.RESET_PASS:
			return {
				...state,
				email: action.data.email,
				error: '',
				loading: true
			}
		case actions.RESET_PASS_FAILED:
			return {
				...state,
				loading: false,
				error: action.error
			}
		case actions.RESET_PASS_SUCCESS:
			return {
				...state,
				laoding: false,
				error: '',
				email: ''
			}
		case actions.RESET_PASS_RESET:
			return initialState
		default:
			return state
	}
}

export default reducer;
