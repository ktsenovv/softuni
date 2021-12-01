import { register } from '../api/data.js';
import { html } from '../lib.js';

const registerTemplate = (onSubmit, errors, afterSubmit) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class=${'form-control' + (!afterSubmit ? '' : (errors.email ? ' is-invalid' : ' is-valid'))} id="email" type="text" name="email">
                ${errors.email ? html`<div class="form-group error">${errors.email}</div>` : null}
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class=${'form-control' + (!afterSubmit ? '' : (errors.password ? ' is-invalid' : ' is-valid'))} id="password" type="password" name="password">
                ${errors.password ? html`<div class="form-group error">${errors.password}</div>` : null}
            </div>
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class=${'form-control' + (!afterSubmit ? '' : (errors.rePass ? ' is-invalid' : ' is-valid'))} id="rePass" type="password" name="rePass">
                ${errors.rePass ? html`<div class="form-group error">${errors.rePass}</div>` : null}
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>`;

export function registerPage(ctx) {
    update();

    function update(errors = {}, afterSubmit = false) {
        ctx.render(registerTemplate(onSubmit, errors, afterSubmit));
    }

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('rePass').trim();

        const errors = {};

        try {
            if (email == '') {
                errors.email = 'Email is required!';
            }

            if (password == '') {
                errors.password = 'Password is required!';
                errors.rePass = 'Password is required!';
            }
    
            if (password != rePass) {
                errors.rePass = 'Passwords don\'t match!';
            }

            if (Object.values(errors).length > 0) {
                throw { errors };
            }

            await register(email, password);
            event.target.reset();
            ctx.updateUserNav();
            ctx.page.redirect('/');
        } catch (err) {
            let messages = err.message || err.errors;

            if (messages == 'A user with the same email already exists') {
                messages = { email: err.message + '!' };
            }
            
            update(messages, true);
        }
    }
}