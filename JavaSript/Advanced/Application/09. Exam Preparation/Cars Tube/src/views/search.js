import { getByQuery } from '../api/data.js';
import { html } from '../lib.js';

const searchTemplate = (results, onSearch) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
        ${results == 0
        ? html`<p class="no-cars"> No results.</p>`
        : results.map(itemTemplate)}
    </div>
</section>`;

const itemTemplate = (item) => html`
<div class="listing">
    <div class="preview">
        <img src="${item.imageUrl}">
    </div>
    <h2>${item.brand} ${item.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${item.year}</h3>
            <h3>Price: ${item.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${item._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`;

export function searchPage(ctx) {
    update();

    async function onSearch(event) {
        const query = Number(document.getElementById('search-input').value.trim());

        if (query == '') {
            return alert('Search field must be filled!');
        }

        if (isNaN(query)) {
            return alert('You can enter only years!');
        }

        try {
            const results = await getByQuery(query);
            update(results);
        } catch (err) {
            alert(err.message)
        }
    }

    function update(results = []) {
        ctx.render(searchTemplate(results, onSearch));
    }
}