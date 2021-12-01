import { clearUserData, getUserData, setUserData } from "../util.js";

const host = 'http://localhost:3030';

async function request(url, options) {
    try {
        const response = await fetch(host + url, options);

        if (response.ok != true) {
            if (response.status == 403) {
                clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (err) {
        //alert(err.message);
        console.error(err.message);
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
    if (userData != null) {
        options.headers['X-Authorization'] = userData.token;
    }

    return options;
}

export async function get(url) {
    return request(url, requestOptions());
}

export async function post(url, data) {
    return request(url, requestOptions('post', data));
}

export async function put(url, data) {
    return request(url, requestOptions('put', data));
}

export async function del(url) {
    return request(url, requestOptions('delete'));
}

export async function login(email, password) {
    const data = await post('/users/login', { email, password });
    const userData = {
        email: data.email,
        id: data._id,
        token: data.accessToken
    };
    setUserData(userData);
}

export async function register(email, password) {
    const data = await post('/users/register', { email, password });
    const userData = {
        email: data.email,
        id: data._id,
        token: data.accessToken
    };
    setUserData(userData);
}

export async function logout() {
    await get('/users/logout');
    clearUserData();
}