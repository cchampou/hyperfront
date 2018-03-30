
export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const SIGNUP_RESET = 'SIGNUP_RESET';

export const signup = (data) => {
	return dispatch => {
		dispatch({ type : SIGNUP, data : data });
		setTimeout(() => {
			dispatch(signupFailed("Une erreur est survenue"));
		}, 3000);
	}
}

export const signupSuccess = () => {
	return {
		type: SIGNUP_SUCCESS
	}
}

export const signupFailed = (err) => {
	return {
		type: SIGNUP_FAILED,
		err : err
	}
}

export const reset = () => {
	return {
		type : SIGNUP_RESET
	}
}
