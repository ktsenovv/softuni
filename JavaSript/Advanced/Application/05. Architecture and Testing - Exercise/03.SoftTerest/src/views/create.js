import { createIdea } from "../api/data.js";

const section = document.getElementById('createPage');
section.remove();
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
let ctx = null;

export function showCreatePage(ctxTarget) {
    ctx = ctxTarget;
    ctx.showView(section);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('imageURL').trim();

    if (title == '' || description == '' || img == '') {
        return alert('All fields are required!');
    }

    if (title.length < 6) {
        return alert('Title must be at least 6 characters long!');
    }

    if (description.length < 10) {
        return alert('Description must be at least 10 characters long!');
    }

    if (img.length < 5) {
        return alert('Image must be at least 5 characters long!');
    }

    await createIdea({ title, description, img });

    form.reset();
    ctx.goTo(ctx.pages.dashboard);
}