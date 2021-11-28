import { deleteIdeaById, getIdeaById } from "../api/data.js";
import { e } from "../dom.js";

const section = document.getElementById('detailsPage');
section.remove();
let ctx = null;

export function showDetailsPage(ctxTarget, id) {
    ctx = ctxTarget;
    ctx.showView(section);
    loadIdea(id);
}

async function loadIdea(id) {
    section.replaceChildren();
    const idea = await getIdeaById(id);
    section.replaceChildren(creadeIdeaDetailsCard(idea));
}

function creadeIdeaDetailsCard(idea) {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(e('img', { setClass: 'det-img', setSrc: idea.img }));
    fragment.appendChild(e('div', { setClass: 'desc' },
        e('h2', { setClass: 'display-5' }, idea.title),
        e('p', { setClass: 'infoType' }, 'Description:'),
        e('p', { setClass: 'idea-description' }, idea.description)
    ));
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData && userData.id == idea._ownerId) {
        fragment.appendChild(e('div', { setClass: 'text-center' },
            e('a', { setClass: 'btn detb', setHref: '', onClick: onDelete }, 'Delete')
        ));
    }

    return fragment;

    async function onDelete(event) {
        event.preventDefault();
        const confirmed = confirm('Are you sure you want to delete this idea?');
        if (confirmed) {
            await deleteIdeaById(idea._id);
            ctx.goTo(ctx.pages.dashboard);
        }
    }
}