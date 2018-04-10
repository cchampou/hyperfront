
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_RESET = 'LOGIN_RESET';

export const login = (data) => {
	return dispatch => {
		if (data.username === 'cchampou' && data.password === 'b8gt5k98c') {
			dispatch({ type : LOGIN, data : data })
		} else {
			dispatch(loginFailed());
		}
	}
}

export const loginSuccess = () => {
	return {
		type : LOGIN_SUCCESS
	}
}

export const loginFailed = () => {
	return {
		type : LOGIN_FAILED
	}
}

export const loginReset = () => {
	return {
		type : LOGIN_RESET
	}
}
