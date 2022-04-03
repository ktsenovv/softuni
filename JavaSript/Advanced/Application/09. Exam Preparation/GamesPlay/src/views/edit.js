import { editGameById, getGameById } from "../api/data.js";
import { html } from "../lib.js";

const editTemplate = (item, onSubmit) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" .value=${item.title}>

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" .value=${item.category}>

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${item.maxLevel}>

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" .value=${item.imageUrl}>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value=${item.summary}></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const item = await getGameById(id);
    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const title = formData.get('title');
        const category = formData.get('category');
        const maxLevel = formData.get('maxLevel');
        const imageUrl = formData.get('imageUrl');
        const summary = formData.get('summary');

        if (title == '' || category == '' || maxLevel == '' || imageUrl == '' || summary == '') {
            return alert('All fields are required!');
        }

        await editGameById(id, { title, category, maxLevel, imageUrl, summary });

        event.target.reset();
        ctx.page.redirect('/details/' + id);
    }
}