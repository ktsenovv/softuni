class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { 'picture': 200, 'photo': 50, 'item': 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        quantity = Number(quantity);
        articleModel = articleModel.toLowerCase();

        if (this.possibleArticles[articleModel] == undefined) {
            throw new Error('This article model is not included in this gallery!');
        }

        let find = a => a.articleName == articleName && a.articleModel == articleModel;
        if (this.listOfArticles.some(find)) {
            this.listOfArticles.filter(find)[0].quantity += quantity;
        } else {
            this.listOfArticles.push({
                articleModel,
                articleName,
                quantity
            });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.some(g => g.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = 0;
        switch (personality) {
            case 'Vip': points = 500; break;
            case 'Middle': points = 250; break;
            default: points = 50; break;
        }

        this.guests.push({
            guestName,
            points,
            purchaseArticle: 0
        });

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(aModel, aName, gName) {
        let article = this.listOfArticles.find(a => a.articleName == aName && a.articleModel == aModel);
        let guest = this.guests.find(g => g.guestName == gName);
        
        if (!article) {
            throw new Error(`This article is not found.`);
        }

        if (article.quantity == 0) {
            return `The ${aName} is not available.`;
        }

        if (!guest) {
            return `This guest is not invited.`;
        }

        let articlePoints = this.possibleArticles[aModel];
        if (guest.points < articlePoints) {
            return `You need to more points to purchase the article.`;
        }

        guest.purchaseArticle++;
        guest.points -= articlePoints;
        article.quantity--;

        return `${gName} successfully purchased the article worth ${articlePoints} points.`;
    }

    showGalleryInfo(criteria) {
        if (criteria == 'article') {
            let result = ['Articles information:'];
            for (let article of this.listOfArticles) {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            }
            return result.join('\n');
        } else if (criteria == 'guest') {
            let result = ['Guests information:'];
            for (let guest of this.guests) {
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`);
            }
            return result.join('\n');
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

/*
Articles information:
picture - Mona Liza - 3
item - Ancient vase - 1
Guests information:
John - 1
Peter - 1
*/