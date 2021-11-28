const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const mockData = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
        "author": "J.K.Rowling",
        "title": "Harry Potter and the Philosopher's Stone"
    },
    "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
        "author": "Svetlin Nakov",
        "title": "C# Fundamentals"
    }
}

function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}

describe('Tests', async function () {
    this.timeout(6000);

    let page, browser;

    before(async () => {
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close;
    });

    it('loads and displays all books', async () => {
        await page.route('**/jsonstore/collections/books*', (route) => {
            route.fulfill(json(mockData));
        });
        await page.goto('http://localhost:5500');
        await page.click('text=Load All Books');
        await page.waitForSelector('text=Harry Potter');

        const rows = await page.$$eval('tr', (rows) => rows.map(r => r.textContent));
        expect(rows[1]).to.contains('Harry Potter');
        expect(rows[1]).to.contains('Rowling');
        expect(rows[2]).to.contains('C# Fundamentals');
        expect(rows[2]).to.contains('Nakov');
    });

    it('can create book', async () => {
        await page.goto('http://localhost:5500');

        await page.fill('form#createForm >> input[name="title"]', '');
        await page.fill('form#createForm >> input[name="author"]', '');

        page.on('dialog', dialog => {
            expect('alert').to.equal(dialog.type());
            expect('All fields are required!').to.equal(dialog.message());
            dialog.accept();
        });
        
        await page.click('form#createForm >> text=Submit');

        await page.fill('form#createForm >> input[name="title"]', 'New Book');
        await page.fill('form#createForm >> input[name="author"]', 'New Author');

        const [request] = await Promise.all([
            page.waitForRequest(request => request.method() == 'POST'),
            page.click('form#createForm >> text=Submit')
        ]);

        const data = JSON.parse(request.postData());
        expect(data.title).to.equal('New Book');
        expect(data.author).to.equal('New Author');
    });

    it('can edit book', async () => {
        await page.goto('http://localhost:5500');

        await page.click('text=Load All Books');

        const row = await page.waitForSelector('*css=tr >> text=New Book');
        const button = await row.$('button[class="editBtn"]');
        button.click();

        await page.waitForFunction('document.querySelector(\'#editForm [name="title"]\').value != \'\'');

        const title = await page.inputValue('#editForm [name="title"]');
        const author = await page.inputValue('#editForm [name="author"]');
        
        expect(title).to.equal('New Book');
        expect(author).to.equal('New Author');

        await page.fill('form#editForm >> input[name="title"]', 'New Book 2');
        await page.fill('form#editForm >> input[name="author"]', 'New Author 2');

        const [request] = await Promise.all([
            page.waitForRequest(request => request.method() == 'PUT'),
            page.click('form#editForm >> text=Save')
        ]);

        const data = JSON.parse(request.postData());
        expect(data.title).to.equal('New Book 2');
        expect(data.author).to.equal('New Author 2');
    });

    it('can delete book', async () => {
        await page.goto('http://localhost:5500');

        await page.click('text=Load All Books');

        await page.on('dialog', dialog => {
            expect('confirm').to.equal(dialog.type());
            expect('Are you sure you want to delete this book?').to.equal(dialog.message());
            dialog.accept();
        });

        const row = await page.waitForSelector('*css=tr >> text=New Book 2');
        const button = await row.$('button[class="deleteBtn"]');
        button.click();

        const [response] = await Promise.all([
            page.waitForResponse(response => response.url().includes('/books/') && response.ok() == true),
            page.waitForRequest(request => request.method() == 'DELETE'),
            page.on('dialog', dialog => dialog.accept())
        ]);

        const data = await response.json();
        expect(data.title).to.equal('New Book 2');
        expect(data.author).to.equal('New Author 2');
    });
});