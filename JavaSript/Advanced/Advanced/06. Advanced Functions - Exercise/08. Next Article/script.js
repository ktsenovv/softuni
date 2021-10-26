function getArticleGenerator(articles) {
    const content = document.getElementById('content');
    
    return function() {
        if (articles.length) {
            const article = document.createElement('article');
            article.textContent = articles.shift()
            content.appendChild(article);
        }
    }
}