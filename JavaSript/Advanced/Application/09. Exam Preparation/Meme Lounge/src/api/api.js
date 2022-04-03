import { notify } from "../notify.js";
import { clearUserData, getUserData, setUserData } from "../util.js";

const host = 'http://localhost:3030';

async function request(url, options) {
    try {
        const response = await fetch(host + url, options);

        if (response.ok == false) {
            if (response.status == 403) {
                clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        /* New Service
        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }*/

        // Old Service
        try {
            return await response.json();
        } catch (err) {
            return response;
        }
    } catch (err) {
        //alert(err.message);
        //console.error(err.message);
        notify(err.message);
        throw err;
    }
}

function requestOptions(method = 'get', data) {
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();
    if (userData) {
        options.headers['X-Authorization'] = userData.token;
    }

    return options;
}

export function get(url) {
    return request(url, requestOptions());
}

export function post(url, data) {
    return request(url, requestOptions('post', data));
}

export function put(url, data) {
    return request(url, requestOptions('put', data));
}

export function del(url) {
    return request(url, requestOptions('delete'));
}

export async function login(email, password) {
    const data = await post('/users/login', { email, password });
    const userData = {
        username: data.username,
        email: data.email,
        id: data._id,
        gender: data.gender,
        token: data.accessToken
    };
    setUserData(userData);
}

export async function register(username, email, password, gender) {
    const data = await post('/users/register', { username, email, password, gender });
    const userData = {
        username: data.username,
        email: data.email,
        id: data._id,
        gender: data.gender,
        token: data.accessToken
    };
    setUserData(userData);
}

export function logout() {
    get('/users/logout');
    clearUserData();
}