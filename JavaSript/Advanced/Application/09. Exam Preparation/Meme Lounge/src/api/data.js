import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: '/data/memes?sortBy=_createdOn%20desc',
    byId: '/data/memes/',
    myItems: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    create: '/data/memes',
    edit: '/data/memes/',
    delete: '/data/memes/'
};

export function getAll() {
    return api.get(endpoints.all);
}

export function getById(id) {
    return api.get(endpoints.byId + id);
}

export function getMyItems(userId) {
    return api.get(endpoints.myItems(userId));
}

export function createItem(data) {
    return api.post(endpoints.create, data);
}

export function editItem(id, data) {
    return api.put(endpoints.edit + id, data);
}

export function deleteItem(id) {
    return api.del(endpoints.delete + id);
}