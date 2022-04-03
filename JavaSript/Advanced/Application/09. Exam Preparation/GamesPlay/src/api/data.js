import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: '/data/games?sortBy=_createdOn%20desc',
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    create: '/data/games',
    details: '/data/games/',
    edit: '/data/games/',
    delete: '/data/games/',
    comments: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    createComment: `/data/comments`
}

export async function getAllGames() {
    return api.get(endpoints.all);
}

export async function getRecentGames() {
    return api.get(endpoints.recent);
}

export async function addGame(data) {
    return api.post(endpoints.create, data);
}

export async function getGameById(id) {
    return api.get(endpoints.details + id)
}

export async function editGameById(id, data) {
    return api.put(endpoints.edit + id, data)
}

export async function deleteGameById(id) {
    return api.del(endpoints.delete + id);
}

export async function getCommentsByGameId(gameId) {
    return api.get(endpoints.comments(gameId));
}

export async function addComment(data) {
    return api.post(endpoints.createComment, data);
}