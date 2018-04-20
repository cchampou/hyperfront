import  { put } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { authRequest } from '../../services/network';

import axios from 'axios';

export function* getMoviesSaga( action ) {
    yield put({
        type : actionTypes.LOADING_MOVIES
    });
    try {
        const movies = yield authRequest('/video/'+action.lang+'/'+action.genre+'/'+action.page+'/'+action.name, 'get');
        yield put({
            type : actionTypes.GET_MOVIES,
            movies : movies.data
        });
    } catch (err) {
        console.log(err);
    }
}

export function* getMovieSaga ( action ) {
    try {
        const en = yield axios.get('https://api.themoviedb.org/3/movie/'+action.id+'?api_key=a4343157cee95013cd656c957307d784&language=en-US');
        const fr = yield axios.get('https://api.themoviedb.org/3/movie/'+action.id+'?api_key=a4343157cee95013cd656c957307d784&language=fr-FR');
        yield put({
            type : actionTypes.GET_MOVIE,
            fr : fr.data,
            en : en.data
        })
    } catch (e) {
        console.log (e);
    }
}

export function* getCastingSaga ( action ) {
    try {
        const en = yield axios.get('https://api.themoviedb.org/3/movie/'+action.id+'/credits?api_key=a4343157cee95013cd656c957307d784&language=en-US');
        const fr = yield axios.get('https://api.themoviedb.org/3/movie/'+action.id+'/credits?api_key=a4343157cee95013cd656c957307d784&language=fr-FR');
        yield put({
            type : actionTypes.GET_CASTING,
            fr : fr.data,
            en : en.data
        })
    } catch (e) {
        console.log (e);
    }
}