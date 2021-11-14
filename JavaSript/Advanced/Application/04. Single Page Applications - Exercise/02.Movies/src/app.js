import { showHome } from './home.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';
import { request } from './req.js';

const views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister
}

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', onLogout);
const nav = document.querySelector('nav');
nav.addEventListener('click', (event) => {
    const view = views[event.target.id];
    if (typeof view == 'function') {
        event.preventDefault();
        view();
    }
});

updateNav();
showHome();

export function updateNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        nav.querySelector('#welcomeMsg').textContent = `Welcome, ${userData.email}`;
        [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'block');
        [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'none');
        [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'block');
    }
}

async function onLogout(event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    logoutBtn.textContent = 'Logging out...';

    const { token } = JSON.parse(sessionStorage.getItem('userData'));
    await logoutReq(token);

    logoutBtn.textContent = 'Logout';

    sessionStorage.removeItem('userData');
    updateNav();
    showLogin();
}

async function logoutReq(token) {
    await request('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': token
        }
    }, false);
}