import { deleteAlbum, getAlbumById } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (album, isOwner, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${album.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>${album.description}</p>
            </div>

            ${isOwner ? optionsTemplate(album, onDelete) : null}

        </div>
    </div>
</section>`;

const optionsTemplate = (album, onDelete) => html`
<div class="actionBtn">
    <a href="/edit/${album._id}" class="edit">Edit</a>
    <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
</div>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();
    try {
        const album = await getAlbumById(id);
        const isOwner = userData && userData.id == album._ownerId;
        ctx.render(detailsTemplate(album, isOwner, onDelete));
    } catch (err) {
        alert(err.message);
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this album?');
        if (choice) {
            try {
                await deleteAlbum(id);
                ctx.page.redirect('/catalog');
            } catch (err) {
                alert(err.message);
            }
        }
    }
}