import { deleteBook, getBookById, likeBook, getLikesByBookId, getMyLikeByBookId } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (item, isOwner, userData, likes, hasLike, onLike, onDelete) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${item.title}</h3>
        <p class="type">Type: ${item.type}</p>
        <p class="img"><img src="${item.imageUrl}"></p>
        <div class="actions">
            ${isOwner
            ? html`<a class="button" href="/edit/${item._id}">Edit</a><a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
            : (userData && !hasLike ? html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>` : null)}

            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${item.description}</p>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();

    const [item, likes, hasLike] = await Promise.all([
        getBookById(id),
        getLikesByBookId(id),
        userData ? getMyLikeByBookId(id, userData.id) : 0
    ]);

    const isOwner = userData && userData.id == item._ownerId;
    ctx.render(detailsTemplate(item, isOwner, userData, likes, hasLike, onLike, onDelete));

    async function onLike() {
        await likeBook({ bookId: id });
        ctx.page.redirect('/details/' + id);
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this book?');
        if (choice) {
            await deleteBook(id);
            ctx.page.redirect('/');
        }
    }
}