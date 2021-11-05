window.addEventListener('DOMContentLoaded', createPreview);

async function createPreview() {
    const main = document.querySelector('main');
    const recipes = await getRecipes();

    main.replaceChildren();

    Object.values(recipes).forEach(recipe => {
        const recipeName = createElement('h2', {}, {}, recipe.name);
        const article = createElement('article', { className: 'preview' }, {},
            createElement('div', { className: 'title' }, {},
                recipeName
            ),
            createElement('div', { className: 'small' }, {},
                createElement('img', { src: recipe.img }, {}, 'title')
            )
        );

        article.addEventListener('click', () => {
            togglePreview(recipe._id, article, recipeName)
        });
        main.appendChild(article);
    });
}

async function togglePreview(id, article, recipeName) {
    const prevName = recipeName.textContent;
    recipeName.textContent = 'Loading...';

    const recipe = await getRecipeById(id);

    const ingredients = createElement('ul');
    recipe.ingredients.forEach(i => ingredients.appendChild(createElement('li', {}, {}, i)));

    const description = createElement('div', { className: 'description' }, {}, createElement('h3', {}, {}, 'Preparation:'));
    recipe.steps.forEach(s => description.appendChild(createElement('p', {}, {}, s)));

    const aDetails = createElement('article', {}, {},
        createElement('h2', {}, {}, recipe.name),
        createElement('div', { className: 'band' }, {},
            createElement('div', { className: 'thumb' }, {},
                createElement('img', { src: recipe.img })
            ),
            createElement('div', { className: 'ingredients' }, {},
                createElement('h3', {}, {}, 'Ingredients:'),
                ingredients
            )
        ),
        description
    );

    aDetails.style.cursor = 'pointer';
    aDetails.addEventListener('click', () => {
        aDetails.replaceWith(article);
        recipeName.textContent = prevName;
    })
    article.replaceWith(aDetails);
}

async function getRecipes() {
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';

    try {
        const res = await fetch(url);
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

async function getRecipeById(id) {
    const url = 'http://localhost:3030/jsonstore/cookbook/details/' + id;

    try {
        const res = await fetch(url);
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

function createElement(type, properties, evnt, ...content) {
    const element = document.createElement(type);

    for (let prop in properties) {
        if (typeof (properties[prop]) == 'object') {
            for (let propp in properties[prop]) {
                element[prop][propp] = properties[prop][propp];
            }
        } else {
            element[prop] = properties[prop];
        }
    }

    for (let entry of content) {
        if (typeof (entry) == 'string' || typeof (entry) == 'number') {
            entry = document.createTextNode(entry);
        }
        element.appendChild(entry);
    }

    if (typeof (evnt) == 'object' && Object.keys(evnt).length !== 0) {
        element.addEventListener(evnt.type, evnt.func)
    }

    return element;
}