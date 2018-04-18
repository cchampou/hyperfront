import axios from 'axios';
import * as config from '../config.js';

export const publicRequest = axios.create({
	baseURL: config.api_url
});

export const authRequest = axios.create({
	baseURL: config.api_url,
	headers: {
		'x-auth' : localStorage.getItem('token')
	}
});
