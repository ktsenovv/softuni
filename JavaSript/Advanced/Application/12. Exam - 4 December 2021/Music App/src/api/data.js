import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    create: '/data/albums',
    byId: '/data/albums/',
    edit: '/data/albums/',
    delete: '/data/albums/',
    search: (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`
}

export function getAllAlbums() {
    return api.get(endpoints.all);
}

export function addAlbum(data) {
    return api.post(endpoints.create, data);
}

export function getAlbumById(id) {
    return api.get(endpoints.byId + id);
}

export function editAlbum(id, data) {
    return api.put(endpoints.edit + id, data);
}

export function deleteAlbum(id) {
    return api.del(endpoints.delete + id);
}

export function searchAlbum(query) {
    return api.get(endpoints.search(query));
}