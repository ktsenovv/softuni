import { getBooksByUserId } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const myBooksTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${books.length == 0
        ? html`<p class="no-books">No books in database!</p>`
        : html`<ul class="my-books-list">${books.map(itemTemplate)}</ul>`}
</section>`;

const itemTemplate = (item) => html`
<li class="otherBooks">
    <h3>${item.title}</h3>
    <p>Type: ${item.type}</p>
    <p class="img"><img src="${item.imageUrl}"></p>
    <a class="button" href="/details/${item._id}">Details</a>
</li>`;

export async function myBooksPage(ctx) {
    const userData = getUserData();
    const books = await getBooksByUserId(userData.id);
    ctx.render(myBooksTemplate(books));
}