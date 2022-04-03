import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: '/data/cars?sortBy=_createdOn%20desc',
    create: '/data/cars',
    byId: '/data/cars/',
    edit: '/data/cars/',
    delete: '/data/cars/',
    byUserId: (userId) => `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    search: (query) => `/data/cars?where=year%3D${query}`
}

export function getAll() {
    return api.get(endpoints.all);
}

export function createListing(data) {
    return api.post(endpoints.create, data);
}

export function getById(id) {
    return api.get(endpoints.byId + id);
}

export function editById(id, data) {
    return api.put(endpoints.edit + id, data);
}

export function deleteById(id) {
    return api.del(endpoints.delete + id);
}

export function getAllByUserId(userId) {
    return api.get(endpoints.byUserId(userId));
}

export function getByQuery(query) {
    return api.get(endpoints.search(query));
}