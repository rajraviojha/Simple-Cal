const assert = require('assert');
const { remote } = require('webdriverio');

(async () => {
  const browser = await remote({
    capabilities: {
      browserName: 'chrome'
    }
  });

  await browser.url('http://localhost:3000');

  await browser.setValue('input[name="num1"]', 5);
  await browser.setValue('input[name="num2"]', 3);
  await browser.selectByVisibleText('select[name="operator"]', '+');
  await browser.click('button[type="submit"]');

  const resultText = await browser.getText('#result');
  assert.strictEqual(resultText, 'Result: 8');

  await browser.deleteSession();
})();
