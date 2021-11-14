import { e, showSection } from './dom.js';
import { request } from './req.js';
import { showTopic } from './topic.js';

const homeSection = document.querySelector('main');
const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);
document.querySelector('.topic-container').addEventListener('click', async (event) => {
    if (event.target.tagName == 'H2') {
        event.preventDefault();
        showTopic(event.target.dataset.id);
    }
});
homeSection.remove();

export function showHome() {
    showSection(homeSection);
    getTopics();
}

async function getTopics() {
    const topicContainer = document.querySelector('.topic-container');
    topicContainer.replaceChildren(e('div', { setStyle: 'margin-top: 10px;' }, 'Loading...'));

    const data = await getTopicsReq();

    if (Object.values(data).length < 1) {
        topicContainer.replaceChildren(e('div', { setStyle: 'margin-top: 10px;' }, 'No topics added. Be the first to add topic.'));
    } else {
        const result = Object.values(data).map(createTopic);
        topicContainer.replaceChildren(...result);
    }
}

async function onSubmit(event) {
    event.preventDefault();
    const button = event.submitter;

    if (button.className == 'cancel') {
        event.target.reset();
    } else if (button.className == 'public') {
        await onPost(event, button);
    }
}

async function onPost(event, button) {
    const formData = new FormData(event.target);

    const name = formData.get('topicName');
    const user = formData.get('username');
    const content = formData.get('postText');
    const date = Date.now();

    try {
        if (name == '' || user == '' || content == '') {
            throw new Error('All fields required!');
        }

        button.textContent = 'Posting...';
        button.disabled = true;

        await createTopicReq({ name, user, content, date });
        await getTopics();

        event.target.reset();
        button.textContent = 'Post';
        button.disabled = false;
    } catch (err) {
        alert(err.message);
    }
}

function createTopic(post) {
    return e('div', { setClass: 'topic-name-wrapper' },
        e('div', { setClass: 'topic-name' },
            e('a', { 'sethref': '#' },
                e('h2', { 'setData-id': post._id }, post.name)
            ),
            e('div', { setClass: 'columns' },
                e('div', {},
                    e('p', {}, 'Date: ', e('time', {}, new Date(post.date).toISOString())),
                    e('div', { setClass: 'nick-name' }, e('p', {}, 'Username: ', e('span', {}, post.user)))
                )
            )
        )
    );
}

async function getTopicsReq() {
    return await request('http://localhost:3030/jsonstore/collections/myboard/posts');
}

async function createTopicReq(data) {
    await request('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
}