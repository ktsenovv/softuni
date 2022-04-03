import { register } from '../api/data.js';
import { html } from '../lib.js';

const registerTemplate = (onSumbit) => html`
<section id="register">
    <div class="container">
        <form @submit=${onSumbit} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(onSumbit));

    async function onSumbit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('repeatPass').trim();

        if (username == '' || password == '') {
            return alert('All fields are required!');
        }

        if (password != rePass) {
            return alert('Passwords don\'t match!');
        }
        
        await register(username, password);

        event.target.reset();
        ctx.updateUserNav();
        ctx.page.redirect('/listings');
    }
}