const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const puppeteer = require('puppeteer');
const ffmpegPath = require('ffmpeg-static');

function getBrowserPath() {
  const paths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ];
  for (const p of paths) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

(async () => {
  const executablePath = getBrowserPath();
  const tempDir = path.join(__dirname, 'temp_frames');
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  fs.mkdirSync(tempDir);

  const launchOptions = {
    headless: true,
    defaultViewport: { width: 1920, height: 1080 }
  };
  if (executablePath) {
    launchOptions.executablePath = executablePath;
  }

  console.log('Launching browser with overlay link watermark...');
  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();

  await page.goto('http://localhost:4173', { waitUntil: 'networkidle2' });

  // Inject sleek visual overlay banner onto the recorded page
  await page.evaluate(() => {
    const banner = document.createElement('div');
    banner.innerHTML = '🌐 portfolio-sayani-roy.vercel.app';
    banner.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: rgba(11, 13, 20, 0.92);
      border: 1px solid rgba(59, 130, 246, 0.6);
      color: #60a5fa;
      padding: 10px 20px;
      border-radius: 999px;
      font-family: system-ui, sans-serif;
      font-size: 16px;
      font-weight: 700;
      box-shadow: 0 10px 30px rgba(0,0,0,0.8);
      z-index: 99999;
      backdrop-filter: blur(12px);
    `;
    document.body.appendChild(banner);
  });

  const wait = (ms) => new Promise(r => setTimeout(r, ms));
  await wait(1500);

  const client = await page.target().createCDPSession();
  await client.send('Page.startScreencast', {
    format: 'jpeg',
    quality: 90,
    maxWidth: 1920,
    maxHeight: 1080,
    everyNthFrame: 1
  });

  const frames = [];
  client.on('Page.screencastFrame', async (event) => {
    frames.push(Buffer.from(event.data, 'base64'));
    await client.send('Page.screencastFrameAck', { sessionId: event.sessionId });
  });

  // Fast interactive clicks
  await wait(1800);
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a')).find(x => x.textContent.trim() === 'About');
    if (el) el.click();
  });
  await wait(1800);

  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a')).find(x => x.textContent.trim() === 'Skills');
    if (el) el.click();
  });
  await wait(2000);

  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a')).find(x => x.textContent.trim() === 'Experience');
    if (el) el.click();
  });
  await wait(1800);

  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a')).find(x => x.textContent.trim() === 'Projects');
    if (el) el.click();
  });
  await wait(2200);

  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a')).find(x => x.textContent.trim() === 'Education');
    if (el) el.click();
  });
  await wait(1800);

  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a')).find(x => x.textContent.trim() === 'Contact');
    if (el) el.click();
  });
  await wait(1800);

  let y = await page.evaluate(() => window.scrollY);
  while (y > 0) {
    y -= 120;
    if (y < 0) y = 0;
    await page.evaluate((val) => window.scrollTo(0, val), y);
    await wait(15);
  }
  await wait(1200);

  await client.send('Page.stopScreencast');
  await browser.close();

  frames.forEach((buffer, idx) => {
    const filename = path.join(tempDir, `frame_${String(idx + 1).padStart(5, '0')}.jpg`);
    fs.writeFileSync(filename, buffer);
  });

  const desktopMp4Path = 'C:\\Users\\Sayani Roy\\Desktop\\portfolio_ad_video.mp4';
  if (fs.existsSync(desktopMp4Path)) {
    fs.unlinkSync(desktopMp4Path);
  }

  const ffmpegCmd = `"${ffmpegPath}" -y -framerate 30 -i "${tempDir}\\frame_%05d.jpg" -vf "setpts=0.45*PTS" -c:v libx264 -profile:v main -pix_fmt yuv420p -r 30 "${desktopMp4Path}"`;
  execSync(ffmpegCmd);
  fs.rmSync(tempDir, { recursive: true, force: true });

  console.log(`SUCCESS: Fast MP4 Video with Visual Overlay Link Created: ${desktopMp4Path}`);
})();
