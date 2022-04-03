import { searchAlbum } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const searchTemplate = (results, afterSearch, onSearch) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    <!--Show after click Search button-->
    ${afterSearch ? resultsTemplate(results) : null}
</section>`;

const resultsTemplate = (results) => html`
<div class="search-result">
    ${results.length == 0
    ? html`<p class="no-result">No result.</p>`
    : results.map(a => albumTemplate(a))}
</div>`;

const albumTemplate = (album) => html`
<div class="card-box">
    <img src="${album.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release Date: ${album.releaseDate}</p>
        </div>
        ${getUserData() ? html`<div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
        </div>` : null}
    </div>
</div>`;

export async function searchPage(ctx) {
    update();

    async function onSearch() {
        const query = document.getElementById('search-input').value.trim();

        if (query == '') {
            return alert('Search field must be filled!');
        }

        try {
            const results = await searchAlbum(query);
            update(results, true);
        } catch (err) {
            alert(err.message)
        }
    }

    function update(results = [], afterSearch = false) {
        ctx.render(searchTemplate(results, afterSearch, onSearch));
    }
}