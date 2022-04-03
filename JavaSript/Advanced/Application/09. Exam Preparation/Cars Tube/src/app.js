import { logout } from './api/data.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { myListingsPage } from './views/myListings.js';
import { registerPage } from './views/register.js';
import { searchPage } from './views/search.js';

const root = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/listings', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/login', loginPage);
page('/register', registerPage);
page('/my-listings', myListingsPage);
page('/search', searchPage);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

function updateUserNav() {
    const userData = getUserData();
    if (userData) {
        document.querySelector('#profile a:not([href])').textContent = 'Welcome ' + userData.username;
        document.getElementById('profile').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}

function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/');
}