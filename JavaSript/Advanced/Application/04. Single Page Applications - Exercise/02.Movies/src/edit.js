import { showDetails } from './details.js';
import { e, showView } from './dom.js';
import { request } from './req.js';

const section = document.getElementById('edit-movie');
const form = section.querySelector('form');
const submitBtn = form.querySelector('button');
form.addEventListener('submit', onEditSubmit);
section.remove();

export function showEdit(id) {
    showView(section);
    onEdit(id);
}

async function onEdit(id) {
    const title = form.querySelector('[name="title"]');
    const description = form.querySelector('[name="description"]');
    const img = form.querySelector('[name="imageUrl"]');

    title.value = '';
    description.value = '';
    img.value = '';

    title.placeholder = 'Loading...';
    description.placeholder = 'Loading...';
    img.placeholder = 'Loading...';

    submitBtn.textContent = 'Loading...';
    submitBtn.disabled = true;

    const data = await request(`http://localhost:3030/data/movies/${id}`);

    submitBtn.textContent = 'Submit';
    submitBtn.disabled = false;

    title.placeholder = 'Movie Title';
    description.placeholder = 'Movie Description...';
    img.placeholder = 'Image Url';

    title.value = data.title;
    description.value = data.description;
    img.value = data.img;
    form.prepend(e('input', { setType: 'hidden', setName: 'id', setValue: id }));
}

async function onEditSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const id = formData.get('id');
    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('imageUrl').trim();

    try {
        if (title == '' || description == '' || img == '') {
            throw new Error('All fields required!');
        }

        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;

        const { token } = JSON.parse(sessionStorage.getItem('userData'));
        await updateReq(id, { title, description, img }, token)

        submitBtn.textContent = 'Submit';
        submitBtn.disabled = false;

        form.reset();
        showDetails(id);
    } catch (err) {
        alert(err.message);
    }
}

async function updateReq(id, data, token) {
    await request(`http://localhost:3030/data/movies/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });
}