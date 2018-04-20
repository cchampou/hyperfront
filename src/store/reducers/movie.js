
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movies : [],
    loadingList : false,
    movie_fr : {},
    movie_en : {},
    comments : [],
    cast_fr : {
        crew : [],
        cast : []
    },
    cast_en : {
        crew : [],
        cast : []
    }
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING_MOVIES:
            return {
                ...state,
                loadingList : true
            }
        case actionTypes.GET_MOVIES:
            return {
                ...state,
                movies : action.movies,
                loadingList : false
            }
        case actionTypes.GET_MOVIE:
            return {
                ...state,
                movie_fr : action.fr,
                movie_en : action.en
            }
        case actionTypes.GET_COMMENTS:
            return {
                ...state,
                comments : action.comments.reverse()
            }
        case actionTypes.GET_CASTING:
            return {
                ...state,
                cast_fr : action.fr,
                cast_en : action.en
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;