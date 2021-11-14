import { showView } from './dom.js';
import { showHome } from './home.js';
import { request } from './req.js';

const section = document.getElementById('add-movie');
const form = section.querySelector('form');
form.addEventListener('submit', onCreate);
section.remove();

export function showCreate() {
    showView(section);
}

async function onCreate(event) {
    event.preventDefault();
    const submitBtn = form.querySelector('button');
    const formData = new FormData(form);

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
        await createMovieReq({ title, description, img }, token);

        submitBtn.textContent = 'Submit';
        submitBtn.disabled = false;

        form.reset();
        showHome();
    } catch (err) {
        alert(err.message);
    }
}

async function createMovieReq(data, token) {
    await request('http://localhost:3030/data/movies', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });
}