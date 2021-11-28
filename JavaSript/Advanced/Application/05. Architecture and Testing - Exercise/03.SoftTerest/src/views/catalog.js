import { getAllIdeas } from '../api/data.js';
import { e } from '../dom.js';

const section = document.getElementById('dashboard-holder');
section.remove();
section.addEventListener('click', onDetails);
let ctx = null;

export async function showCatalogPage(ctxTarget) {
    ctx = ctxTarget;
    ctx.showView(section);
    loadIdeas();
}

async function loadIdeas() {
    const ideas = await getAllIdeas();

    if (ideas.length == 0) {
        section.replaceChildren(e('h1', {}, 'No ideas yet! Be the first one :)'));
    } else {
        const fragment = document.createDocumentFragment();
        ideas.map(createIdeaCard).forEach(i => fragment.appendChild(i));
        section.replaceChildren(fragment);
    }
}

function createIdeaCard(idea) {
    return e('div', { setClass: 'card overflow-hidden current-card details', setStyle: 'width: 20rem; height: 18rem;' },
        e('div', { setClass: 'card-body' },
            e('p', { setClass: 'card-text' }, idea.title)
        ),
        e('img', { setClass: 'card-image', setSrc: idea.img, setAlt: 'Card image cap' }),
        e('a', { 'setData-id': idea._id, setClass: 'btn', setHref: '' }, 'Details')
    );
}

function onDetails(event) {
    if (event.target.tagName == 'A') {
        const id = event.target.dataset.id;
        event.preventDefault();
        ctx.goTo('details', id);
    }
}