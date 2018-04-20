
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    username : '',
    name : '',
    firstname : '',
    avatar : '',
    loading : false
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING_PROFILE:
            return {
                ...state,
                loading : true
            }
        case actionTypes.GET_PROFILE:
            return {
                ...state,
                username : action.data.username,
                firstname : action.data.firstName,
                name : action.data.lastName,
                avatar : action.data.avatar,
                loading : false
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;