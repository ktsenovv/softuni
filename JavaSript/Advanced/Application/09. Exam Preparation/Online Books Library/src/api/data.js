import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    allBooks: '/data/books?sortBy=_createdOn%20desc',
    bookById: '/data/books/',
    BooksbyUserId: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    add: '/data/books',
    edit: '/data/books/',
    delete: '/data/books/',
    like: '/data/likes',
    likesByBookId: (bookId) => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
    myLikeByBookId: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export function getAllBooks() {
    return api.get(endpoints.allBooks);
}

export function getBookById(id) {
    return api.get(endpoints.bookById + id);
}

export function getBooksByUserId(userId) {
    return api.get(endpoints.BooksbyUserId(userId));
}

export function addBook(data) {
    return api.post(endpoints.add, data);
}

export function editBook(id, data) {
    return api.put(endpoints.edit + id, data);
}

export function deleteBook(id) {
    return api.del(endpoints.delete + id)
}

export function likeBook(data) {
    return api.post(endpoints.like, data);
}

export function getLikesByBookId(bookId) {
    return api.get(endpoints.likesByBookId(bookId));
}

export function getMyLikeByBookId(bookId, userId) {
    return api.get(endpoints.myLikeByBookId(bookId, userId));
}