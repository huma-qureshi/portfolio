import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/');
  
  // Wait for the animations to finish
  await new Promise(r => setTimeout(r, 5000));
  
  // Scroll to "What I Do" section. Wait for the selector first.
  const elem = await page.$('.whatIDO');
  if (elem) {
    await page.evaluate(el => el.scrollIntoView(), elem);
    await new Promise(r => setTimeout(r, 2000)); // wait for scroll
    await page.screenshot({ path: 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\7c726b37-a731-4500-8124-7c192f7e23f4\\artifacts\\screenshot.png' });
    console.log('Screenshot saved');
  } else {
    console.log('.whatIDO element not found');
  }

  await browser.close();
})();
