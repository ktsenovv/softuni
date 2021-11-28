import { login } from "../api/data.js";

const section = document.getElementById('loginPage');
section.remove();
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
section.querySelector('.alreadyUser a').addEventListener('click', (event) => {
    event.preventDefault();
    ctx.goTo(ctx.pages.register);
});
let ctx = null;

export function showLoginPage(ctxTarget) {
    ctx = ctxTarget;
    ctx.showView(section);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    if (email == '' || password == '') {
        return alert('All fields are required!');
    }

    try {
        await login(email, password);

        form.reset();
        ctx.goTo(ctx.pages.home);
        ctx.updateNav();
    } catch (err) {

    }
}