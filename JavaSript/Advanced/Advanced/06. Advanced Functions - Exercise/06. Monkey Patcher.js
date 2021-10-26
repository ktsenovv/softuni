function solution(command) {
    if (command == 'upvote') {
        return this.upvotes++;
    } else if (command == 'downvote') {
        return this.downvotes++;
    }

    let upvote = this.upvotes;
    let downvote = this.downvotes;
    let totalVotes = upvote + downvote;
    let totalScore = upvote - downvote;

    const rating = () => {
        if (totalVotes < 10) return 'new';
        if (upvote > totalVotes * 0.66) return 'hot';
        if (totalScore >= 0 && totalVotes > 100) return 'controversial';
        if (totalScore < 0) return 'unpopular';
        return 'new';
    }

    if (totalVotes > 50) {
        let inflateVote = Math.ceil(Math.max(upvote, downvote) * 0.25);
        return [upvote + inflateVote, downvote + inflateVote, totalScore, rating()];
    }

    return [upvote, downvote, totalScore, rating.call(this)];
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
solution.call(post, 'downvote');
score = solution.call(post, 'score');