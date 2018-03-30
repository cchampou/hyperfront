
export const RESET_PASS = 'RESET_PASS';
export const RESET_PASS_SUCCESS = 'RESET_PASS_SUCCESS';
export const RESET_PASS_FAILED = 'RESET_PASS_FAILED';
export const RESET_PASS_RESET = 'RESET_PASS_RESET';

export const resetPass = (data) => {
	return dispatch => {
		dispatch({ type: RESET_PASS, data });
		setTimeout(() => {
			dispatch(resetPassFailed("Email introuvable"));
		}, 3000)
	}
}

export const resetPassSuccess = () => {
	return {
		type: RESET_PASS_SUCCESS
	}
}

export const resetPassFailed = (error) => {
	return {
		type: RESET_PASS_FAILED,
		error: error
	}
}

export const resetPassReset = () => {
	return {
		type: RESET_PASS_RESET
	}
}
