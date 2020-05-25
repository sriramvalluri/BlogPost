const puppeteer = require('puppeteer');
test('We can launch a browserr', async () => {
    const browser = await puppeteer.launch({
    });
    const page = await browser.newPage();
});