import { e, showSection } from './dom.js';
import { request } from './req.js';

export async function showTopic(id) {
    await getTopic(id);
    loadComments(id);
}

async function getTopic(id) {
    showSection(e('div', {}, 'Loading...'));
    const data = await getTopicReq(id);
    showSection(createTopicView(data));
}

async function loadComments(id) {
    const comments = document.querySelector('.comment');
    const topicContent = comments.firstChild;

    comments.appendChild(e('div', {}, 'Loading...'));

    const data = await getCommentsReq();
    const result = Object.values(data).filter(i => i.topicId == id).map(createComment);

    if (Object.values(result).length < 1) {
        comments.lastChild.replaceChildren(e('div', { setStyle: 'margin-top: 10px;' }, 'No comments added. Be the first to comment.'));
    } else {
        result.unshift(topicContent);
        comments.replaceChildren(...result);
    }
}

async function onAddComment(event) {
    event.preventDefault();
    const button = event.submitter;
    const formData = new FormData(event.target);

    const topicId = formData.get('topicId');
    const user = formData.get('username');
    const content = formData.get('postText');
    const date = Date.now();

    try {
        if (user == '' || content == '') {
            throw new Error('All fields required!');
        }

        button.textContent = 'Posting...';
        button.disabled = true;

        await createCommentReq({ user, content, date, topicId });
        await loadComments(topicId);

        event.target.reset();
        button.textContent = 'Post';
        button.disabled = false;
    } catch (err) {
        alert(err.message);
    }
}

function createTopicView(topic) {
    return e('div', { setClass: 'theme-content' },
        e('div', { setClass: 'theme-title' },
            e('div', { setClass: 'theme-name-wrapper' },
                e('div', { setClass: 'theme-name' },
                    e('h2', {}, topic.name))
            )
        ),
        e('div', { setClass: 'comment' },
            e('div', { setClass: 'header' },
                e('img', { setSrc: './static/profile.png', setAlt: 'avatar' }),
                e('p', {}, e('span', {}, topic.user), ' posted on ', e('time', {}, new Date(topic.date).toLocaleString())),
                e('p', { setClass: 'post-content' }, topic.content)
            )
        ),
        e('div', { setClass: 'answer-comment' },
            e('p', {}, e('span', {}, 'CurrentUser'), ' comment:'),
            e('div', { setClass: 'answer' },
                e('form', { onSubmit: onAddComment },
                    e('textarea', { setName: 'postText', setId: 'comment', setCols: '30', setRows: '10' }),
                    e('div', {},
                        e('label', { setFor: 'username' }, 'Username', e('span', { setClass: 'red' }, ' * ')),
                        e('input', { setType: 'text', setName: 'username', setId: 'username' }),
                        e('input', { setType: 'hidden', setName: 'topicId', setValue: topic._id })
                    ),
                    e('button', {}, 'post')
                )
            )
        )
    );
}

function createComment(comment) {
    return e('div', { setId: 'user-comment' },
        e('div', { setClass: 'topic-name-wrapper' },
            e('div', { setClass: 'topic-name' },
                e('p', {}, e('strong', {}, comment.user), ' commented on ', e('time', {}, new Date(comment.date).toLocaleString())),
                e('div', { setClass: 'post-content' },
                    e('p', {}, comment.content)
                )
            )
        )
    );
}

async function getTopicReq(id) {
    return await request(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`);
}

async function getCommentsReq() {
    return await request(`http://localhost:3030/jsonstore/collections/myboard/comments`);
}

async function createCommentReq(data) {
    await request('http://localhost:3030/jsonstore/collections/myboard/comments', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
}