import { addComment, deleteGameById, getCommentsByGameId, getGameById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (item, comments, isOwner, userData, onSubmit, onDelete) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${item.imageUrl}" />
            <h1>${item.title}</h1>
            <span class="levels">MaxLevel: ${item.maxLevel}</span>
            <p class="type">${item.category}</p>
        </div>

        <p class="text">
            ${item.summary}
        </p>

        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length == 0
            ? html`<p class="no-comment">No comments.</p>`
            : html`<ul>${comments.map(commentTemplate)}</ul>`}
        </div>

        ${isOwner
        ? html`<div class="buttons">
            <a href="/edit/${item._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>`
        : ''}
    </div>

    ${userData && !isOwner ? html`<article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onSubmit} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>`
        : ''}

</section>`;

const commentTemplate = (item) => html`
<li class="comment">
    <p>Content: ${item.comment}</p>
</li>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();
    const item = await getGameById(id);
    const comments = await getCommentsByGameId(id);
    const isOwner = userData && userData.id == item._ownerId;

    ctx.render(detailsTemplate(item, comments, isOwner, userData, onSubmit, onDelete));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const comment = formData.get('comment');

        if (comment == '') {
            return alert('Comment field must be filled!');
        }

        addComment({ gameId: id, comment });

        event.target.reset();
        ctx.page.redirect('/details/' + id);
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this game?');
        if (choice) {
            await deleteGameById(id);
            ctx.page.redirect('/');
        }
    }
}