function loadRepos() {
	const repos = document.getElementById('repos');
	const user = document.getElementById('username').value;
	const url = `https://api.github.com/users/${user}/repos`;

	fetch(url)
		.then(res => {
			if (res.ok == false) {
				throw new Error(`${res.status} ${res.statusText}`);
			}

			return res.json();
		})
		.then(data => {
			repos.replaceChildren();
			for (let repo of data) {
				const liElement = document.createElement('li');
				const aElement = document.createElement('a');
				aElement.href = repo.html_url;
				aElement.textContent = repo.full_name;

				liElement.appendChild(aElement);
				repos.appendChild(liElement);
			}
		})
		.catch(error => {
			repos.replaceChildren();
			const liElement = document.createElement('li');
			liElement.textContent = error;
			repos.appendChild(liElement);
		});
}