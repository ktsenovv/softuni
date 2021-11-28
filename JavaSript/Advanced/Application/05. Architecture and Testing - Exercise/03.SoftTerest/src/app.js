import { logout } from './api/data.js';
import { showView } from './dom.js';
import { showCreatePage } from './views/create.js';
import { showDashboardPage } from './views/dashboard.js';
import { showDetailsPage } from './views/details.js';
import { showHomePage } from './views/home.js';
import { showLoginPage } from './views/login.js';
import { showRegisterPage } from './views/register.js';

const links = {
    'homeLink': 'home',
    'getStartedLink': 'home',
    'dashboardLink': 'dashboard',
    'createLink': 'create',
    'loginLink': 'login',
    'registerLink': 'register'
};

const views = {
    'home': showHomePage,
    'dashboard': showDashboardPage,
    'details': showDetailsPage,
    'create': showCreatePage,
    'login': showLoginPage,
    'register': showRegisterPage
}

const pages = {
    home: 'home',
    dashboard: 'dashboard',
    details: 'details',
    create: 'create',
    login: 'login',
    register: 'register'
}

const ctx = {
    pages,
    goTo,
    showView,
    updateNav
};

const nav = document.querySelector('nav');
nav.addEventListener('click', onNavigate);

document.getElementById('logoutBtn').addEventListener('click', async (event) => {
    event.preventDefault();

    await logout();

    updateNav();
    goTo(pages.home);
});

// Start Application
goTo(pages.home);
updateNav();

function onNavigate(event) {
    const name = links[event.target.id];
    if (name) {
        event.preventDefault();
        goTo(name);
    }
}

function goTo(name, ...params) {
    const view = views[name];
    if (typeof view == 'function') {
        view(ctx, ...params);
    }
}

function updateNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        [...nav.querySelectorAll('.user')].forEach(l => l.style.display = 'block');
        [...nav.querySelectorAll('.guest')].forEach(l => l.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user')].forEach(l => l.style.display = 'none');
        [...nav.querySelectorAll('.guest')].forEach(l => l.style.display = 'block');
    }
}