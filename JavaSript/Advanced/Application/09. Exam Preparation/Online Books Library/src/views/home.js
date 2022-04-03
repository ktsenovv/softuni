import { getAllBooks } from '../api/data.js';
import { html } from '../lib.js';

const homeTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${books.length == 0
    ? html`<p class="no-books">No books in database!</p>`
    : html`<ul class="other-books-list">${books.map(itemTemplate)}</ul>`}
</section>`;

const itemTemplate = (item) => html`
<li class="otherBooks">
    <h3>${item.title}</h3>
    <p>Type: ${item.type}</p>
    <p class="img"><img src="${item.imageUrl}"></p>
    <a class="button" href="/details/${item._id}">Details</a>
</li>`;

export async function homePage(ctx) {
    const books = await getAllBooks();
    ctx.render(homeTemplate(books));
}