function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostBtn = document.getElementById('btnViewPost');
    loadPostsBtn.addEventListener('click', getAllPosts.bind(null, loadPostsBtn, viewPostBtn));
    viewPostBtn.addEventListener('click', displayPost.bind(null, viewPostBtn));
    viewPostBtn.disabled = true;
}

attachEvents();

async function displayPost(viewPostBtn) {
    const titleElement = document.getElementById('post-title');
    const bodyElement = document.getElementById('post-body');
    const ulElement = document.getElementById('post-comments');

    titleElement.textContent = 'Loading...';
    bodyElement.textContent = '';
    viewPostBtn.textContent = 'Loading...';
    viewPostBtn.disabled = true;
    ulElement.replaceChildren();

    const selectedId = document.getElementById('posts').value;

    const [post, comments] = await Promise.all([
        getPostById(selectedId),
        getCommentsByPostId(selectedId)
    ]);

    titleElement.textContent = post.title;
    bodyElement.textContent = post.body;
    viewPostBtn.textContent = 'View';
    viewPostBtn.disabled = false;

    comments.forEach(c => {
        const liElement = document.createElement('li');
        liElement.textContent = c.text;
        ulElement.appendChild(liElement);
    });
}

async function getAllPosts(loadPostsBtn, viewPostBtn) {
    const url = `http://localhost:3030/jsonstore/blog/posts`;

    try {
        const res = await fetch(url);
        if (res.ok != true) {
            throw new Error(`${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        const selectElement = document.getElementById('posts');
        selectElement.replaceChildren();
        Object.values(data).forEach(p => {
            const optionElement = document.createElement('option');
            optionElement.textContent = p.title;
            optionElement.value = p.id

            selectElement.appendChild(optionElement);
        });

        loadPostsBtn.disabled = true;
        viewPostBtn.disabled = false;
    } catch (error) {
        console.log(error);
    }
}

async function getPostById(postId) {
    const url = `http://localhost:3030/jsonstore/blog/posts/${postId}`;

    try {
        const res = await fetch(url);
        if (res.ok != true) {
            throw new Error(`${res.status} ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getCommentsByPostId(postId) {
    const url = `http://localhost:3030/jsonstore/blog/comments`;

    try {
        const res = await fetch(url);
        if (res.ok != true) {
            throw new Error(`${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return Object.values(data).filter(c => c.postId == postId);
    } catch (error) {
        console.log(error);
    }
}