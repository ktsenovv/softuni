import { e, showView } from './dom.js';
import { showCreate } from './create.js';
import { showDetails } from './details.js';
import { request } from './req.js';

const section = document.getElementById('home-page');
const catalog = section.querySelector('.card-deck.d-flex.justify-content-center');
const addMovieBtn = section.querySelector('#createLink');
addMovieBtn.addEventListener('click', (event) => {
    event.preventDefault();
    showCreate();
});

catalog.addEventListener('click', (event) => {
    event.preventDefault();

    let target = event.target;

    if (target.tagName == 'BUTTON') {
        target = target.parentElement;
    }

    if (target.tagName == 'A') {
        const id = target.dataset.id;
        showDetails(id);
    }
});
section.remove();

export function showHome() {
    showView(section);
    getMovies();
    addMovieButton();
}

async function getMovies() {
    catalog.replaceChildren(e('p', {}, 'Loading...'));
    const data = await getMoviesReq();
    catalog.replaceChildren(...data.map(createMovieCard));
}

function createMovieCard(movie) {
    return e('div', { setClass: 'card mb-4' },
        e('img', { setSrc: movie.img, setClass: 'card-img-top', setWidth: '400', setAlt: 'Card image cap' }),
        e('div', { setClass: 'card-body' },
            e('h4', { setClass: 'card-title' }, movie.title)
        ),
        e('div', { setClass: 'card-footer' },
            e('a', { setHref: '#', 'setData-id': movie._id },
                e('button', { setType: 'button', setClass: 'btn btn-info' }, 'Details')
            )
        )
    );
}

function addMovieButton() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        document.getElementById('add-movie-button').replaceChildren(addMovieBtn);
    } else {
        addMovieBtn.remove();
    }
}

async function getMoviesReq() {
    return await request('http://localhost:3030/data/movies');
}