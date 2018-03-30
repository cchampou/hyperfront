const initialState = {

}

const reducer = (state = initialState, action) => {
	if (action.type === '') {
		return {
			...state
		}
	}
	return state;
}

export default reducer;
