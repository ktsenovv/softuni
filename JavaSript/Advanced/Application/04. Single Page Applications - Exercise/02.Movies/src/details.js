import { e, showView } from './dom.js';
import { showEdit } from './edit.js';
import { showHome } from './home.js';
import { request } from './req.js';

const section = document.getElementById('movie-details');
section.remove();

export function showDetails(id) {
    showView(section);
    getMovieById(id);
}

async function getMovieById(id) {
    section.replaceChildren(e('p', {}, 'Loading...'));

    const requests = [
        getMovieReq(id),
        getMovieLikesReq(id)
    ];

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        requests.push(await hasUserLikedMovieReq(id, userData.id));
    }

    let [movie, likes, hasLiked] = await Promise.all(requests);

    if (hasLiked == undefined) {
        hasLiked = [];
    }

    section.replaceChildren(createDetails(movie, likes, hasLiked));
}

function createDetails(movie, likes, hasLiked) {
    const controls = e('div', { setClass: 'col-md-4 text-center' },
        e('h3', { setClass: 'my-3' }, 'Movie Description'),
        e('p', {}, movie.description)
    );

    const unlikeId = hasLiked.length > 0 ? hasLiked[0]._id : '';
    const unlikeBtn = e('a', { setClass: 'btn btn-primary', 'setData-id': unlikeId, onClick: onUnlikeMovie }, 'Unlike');
    const likeBtn = e('a', { setClass: 'btn btn-primary', onClick: onLikeMovie }, 'Like');
    const likesInfo = e('span', { setClass: 'enrolled-span' }, `Liked ${likes}`);

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        if (userData.id == movie._ownerId) {
            controls.appendChild(e('a', { setClass: 'btn btn-danger', 'setData-id': movie._id, onClick: onDeleteMovie }, 'Delete'));
            controls.appendChild(document.createTextNode(' '));
            controls.appendChild(e('a', { setClass: 'btn btn-warning', onClick: () => showEdit(movie._id) }, 'Edit'));
            controls.appendChild(document.createTextNode(' '));
        } else {
            if (hasLiked.length > 0) {
                controls.appendChild(unlikeBtn);
            } else {
                controls.appendChild(likeBtn);
            }
        }
        controls.appendChild(document.createTextNode(' '));
        controls.appendChild(likesInfo);
    }

    return e('div', { setClass: 'container' },
        e('div', { setClass: 'row bg-light text-dark' },
            e('h1', {}, `Movie title: ${movie.title}`),
            e('div', { setClass: 'col-md-8' },
                e('img', { setClass: 'img-thumbnail', setSrc: movie.img, setAlt: 'Movie' })
            ),
            controls
        )
    );

    async function onLikeMovie() {
        likeBtn.textContent = 'Liking...';
        likeBtn.disabled = true;

        const like = await likeMovieReq(movie._id, userData.token);
        const numLikes = await getMovieLikesReq(movie._id);

        likesInfo.textContent = `Liked ${numLikes}`;

        likeBtn.textContent = 'Like';
        likeBtn.disabled = false;

        unlikeBtn.dataset.id = like._id;
        likeBtn.replaceWith(unlikeBtn);
    }

    async function onUnlikeMovie(event) {
        unlikeBtn.textContent = 'Unliking...';
        unlikeBtn.disabled = true;

        const likeId = event.target.dataset.id;
        await unlikeMovieReq(likeId, userData.token);

        const numLikes = await getMovieLikesReq(movie._id);

        unlikeBtn.textContent = 'Unlike';
        unlikeBtn.disabled = false;

        likesInfo.textContent = `Liked ${numLikes}`;
        unlikeBtn.replaceWith(likeBtn);
    }
    
    async function onDeleteMovie(event) {
        const button = event.target;
        const id = button.dataset.id;

        button.textContent = 'Deleting...';
        button.disabled = true;

        await deleteMovieReq(id, userData.token);

        button.textContent = 'Delete';
        button.disabled = false;

        showHome();
    }
}

async function getMovieReq(id) {
    return await request(`http://localhost:3030/data/movies/${id}`);
}

async function likeMovieReq(id, token) {
    return await request('http://localhost:3030/data/likes', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ movieId: id })
    });
}

async function unlikeMovieReq(id, token) {
    await request(`http://localhost:3030/data/likes/${id}`, {
        method: 'delete',
        headers: {
            'X-Authorization': token
        }
    });
}

async function getMovieLikesReq(id) {
    return await request(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
}

async function hasUserLikedMovieReq(id, owner) {
    return await request(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${owner}%22`);
}

async function deleteMovieReq(id, token) {
    await request(`http://localhost:3030/data/movies/${id}`, {
        method: 'delete',
        headers: {
            'X-Authorization': token
        }
    });
}