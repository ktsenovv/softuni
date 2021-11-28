const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

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

    it('can load messages', async () => {
        await page.goto('http://localhost:5500');
        await page.click('text=Refresh');

        await page.waitForFunction('document.querySelector(\'textarea\').value != \'\'');

        const messages = await page.inputValue('textarea');
        const messagesArr = messages.split('\n');
        expect(messagesArr[0]).to.equal('Spami: Hello, are you there?');
        expect(messagesArr[1]).to.equal('Garry: Yep, whats up :?');
        expect(messagesArr[2]).to.equal('Spami: How are you? Long time no see? :)');
        expect(messagesArr[3]).to.equal('George: Hello, guys! :))');
        expect(messagesArr[4]).to.equal('Spami: Hello, George nice to see you! :)))');
    });

    it('can send message', async () => {
        await page.goto('http://localhost:5500');
        
        await page.fill('input[id="author"]', 'Author');
        await page.fill('input[id="content"]', 'Content');

        const [request] = await Promise.all([
            page.waitForRequest(request => request.method() == 'POST'),
            page.click('text=Send')
        ]);

        const data = JSON.parse(request.postData());
        expect(data.author).to.equal('Author');
        expect(data.content).to.equal('Content');
    });
});