import { chromium } from "playwright";

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
});

const width = Number(process.env.UI_WIDTH || 1919);
const height = Number(process.env.UI_HEIGHT || 833);
const page = await browser.newPage({ viewport: { width, height } });
const logs = [];

page.on("console", (message) => {
  logs.push(`${message.type()}: ${message.text()}`);
});

page.on("pageerror", (error) => {
  logs.push(`pageerror: ${error.message}`);
});

await page.goto("http://127.0.0.1:5173", {
  waitUntil: "networkidle",
  timeout: 15000,
});

const rootTextLength = await page.locator("#root").evaluate((node) => node.innerText.length);
const overflow = await page.evaluate(() => ({
  x: document.documentElement.scrollWidth - document.documentElement.clientWidth,
  y: document.documentElement.scrollHeight - document.documentElement.clientHeight,
}));
const rootBox = await page.locator("#root").boundingBox();
await page.screenshot({ path: `ui-check-${width}x${height}.png`, fullPage: true });

console.log(JSON.stringify({ width, height, rootTextLength, rootBox, overflow, logs }, null, 2));

await browser.close();
