
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    fail : false,
    success : false
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.NEW_PASS_RESET:
             return {
                 ...initialState
             }
        case actionTypes.NEW_PASS_FAILED:
            return {
                ...state,
                fail : action.msg
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;