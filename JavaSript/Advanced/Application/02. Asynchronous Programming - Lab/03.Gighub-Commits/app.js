function loadCommits() {
    const commits = document.getElementById('commits');
    const user = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${user}/${repo}/commits`;

    fetch(url)
        .then(res => {
            if (res.ok == false) {
                throw new Error(`${res.status} (${res.statusText})`);
            }

            return res.json();
        })
        .then(data => {
            commits.replaceChildren();
            for (let line of data) {
                const liElement = document.createElement('li');
                liElement.textContent = `${line.commit.author.name}: ${line.commit.message}`;
                commits.appendChild(liElement);
            }
        })
        .catch(error => {
            commits.replaceChildren();
            const liElement = document.createElement('li');
            liElement.textContent = error;
            commits.appendChild(liElement);
        });
}