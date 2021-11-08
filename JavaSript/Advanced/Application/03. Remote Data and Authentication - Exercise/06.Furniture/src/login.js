window.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        window.location = './indexLogged.html';
        return;
    }

    document.querySelector('form[action="/register"]').addEventListener('submit', onRegister);
    document.querySelector('form[action="/login"]').addEventListener('submit', onLogin);
});

async function onRegister(event) {
    event.preventDefault();
    const registerBtn = document.querySelector('form[action="/register"] button');
    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('rePass');

    try {
        if (password != rePassword) {
            throw new Error('Passwords don\'t match');
        }

        registerBtn.textContent = 'Registering...';
        registerBtn.disabled = true;

        const res = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        registerBtn.textContent = 'Register';
        registerBtn.disabled = false;

        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();
        const userData = {
            email: email,
            id: data._id,
            token: data.accessToken
        };

        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = './indexLogged.html';
    } catch (err) {
        alert(err.message);
    }
}

async function onLogin(event) {
    event.preventDefault();
    const loginBtn = document.querySelector('form[action="/login"] button');
    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    try {
        loginBtn.textContent = 'Loggin in...';
        loginBtn.disabled = true;

        const res = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        loginBtn.textContent = 'Login';
        loginBtn.disabled = false;

        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();
        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        };

        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = './index.html';
    } catch (err) {
        alert(err.message);
    }
}