const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

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
  console.log('Browser Executable Path:', executablePath);

  const launchOptions = {
    headless: true,
    defaultViewport: { width: 1920, height: 1080 }
  };
  if (executablePath) {
    launchOptions.executablePath = executablePath;
  }

  console.log('Launching browser for interactive section-clicking video recording...');
  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();
  
  const desktopDir = 'C:\\Users\\Sayani Roy\\Desktop';

  console.log('Navigating to http://localhost:4173 ...');
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle2' });

  const wait = (ms) => new Promise(r => setTimeout(r, ms));

  // Initial wait for animations
  await wait(3000);

  const client = await page.target().createCDPSession();
  await client.send('Page.startScreencast', {
    format: 'jpeg',
    quality: 85,
    maxWidth: 1600,
    maxHeight: 900,
    everyNthFrame: 1
  });

  const frames = [];
  client.on('Page.screencastFrame', async (event) => {
    frames.push(Buffer.from(event.data, 'base64'));
    await client.send('Page.screencastFrameAck', { sessionId: event.sessionId });
  });

  console.log('Starting interactive click sequence with extra animation time...');

  // 1. Initial Hero view
  await wait(3000);

  // 2. Click Navbar "About"
  console.log('Clicking Navbar: About');
  await page.evaluate(() => {
    const link = Array.from(document.querySelectorAll('a')).find(el => el.textContent.trim() === 'About');
    if (link) link.click();
  });
  await wait(3500);

  // 3. Click Navbar "Skills"
  console.log('Clicking Navbar: Skills');
  await page.evaluate(() => {
    const link = Array.from(document.querySelectorAll('a')).find(el => el.textContent.trim() === 'Skills');
    if (link) link.click();
  });
  await wait(4000);

  // 4. Click Navbar "Experience"
  console.log('Clicking Navbar: Experience');
  await page.evaluate(() => {
    const link = Array.from(document.querySelectorAll('a')).find(el => el.textContent.trim() === 'Experience');
    if (link) link.click();
  });
  await wait(3500);

  // 5. Click Navbar "Projects"
  console.log('Clicking Navbar: Projects');
  await page.evaluate(() => {
    const link = Array.from(document.querySelectorAll('a')).find(el => el.textContent.trim() === 'Projects');
    if (link) link.click();
  });
  await wait(4500);

  // 6. Click Navbar "Education"
  console.log('Clicking Navbar: Education');
  await page.evaluate(() => {
    const link = Array.from(document.querySelectorAll('a')).find(el => el.textContent.trim() === 'Education');
    if (link) link.click();
  });
  await wait(3500);

  // 7. Click Navbar "Contact"
  console.log('Clicking Navbar: Contact');
  await page.evaluate(() => {
    const link = Array.from(document.querySelectorAll('a')).find(el => el.textContent.trim() === 'Contact');
    if (link) link.click();
  });
  await wait(3000);

  // 8. Click "Copy Email" button in Contact section
  console.log('Clicking Copy Email button...');
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(el => el.textContent.includes('Copy Email'));
    if (btn) btn.click();
  });
  await wait(3000);

  // 9. Click "Contact Me" button in Header to navigate back to Contact
  console.log('Clicking Top Header Contact Me button...');
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('a, button')).find(el => el.textContent.includes('Contact Me'));
    if (btn) btn.click();
  });
  await wait(3000);

  // 10. Smooth slow final scroll back to top
  console.log('Scrolling back up to Hero...');
  let y = await page.evaluate(() => window.scrollY);
  while (y > 0) {
    y -= 60;
    if (y < 0) y = 0;
    await page.evaluate((val) => window.scrollTo(0, val), y);
    await wait(30);
  }
  await wait(2000);

  await client.send('Page.stopScreencast');
  await browser.close();

  console.log(`Captured total ${frames.length} interaction frames.`);

  // Downsample to ~350 smooth playback frames
  const sampleInterval = Math.max(1, Math.floor(frames.length / 350));
  const sampledFrames = [];
  for (let i = 0; i < frames.length; i += sampleInterval) {
    sampledFrames.push('data:image/jpeg;base64,' + frames[i].toString('base64'));
  }

  console.log(`Downsampled to ${sampledFrames.length} smooth playback frames.`);

  const htmlPlayerContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Sayani Roy Portfolio Video Walkthrough</title>
  <style>
    body { margin: 0; background: #030408; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui, sans-serif; color: white; padding: 20px; }
    
    .video-container {
      position: relative;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 25px 70px rgba(0,0,0,0.95);
      border: 1px solid rgba(59, 130, 246, 0.3);
      cursor: pointer;
      transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
      display: block;
      text-decoration: none;
    }
    
    .video-container:hover {
      transform: scale(1.015);
      border-color: rgba(59, 130, 246, 0.7);
      box-shadow: 0 30px 80px rgba(59, 130, 246, 0.3);
    }

    .click-overlay-badge {
      position: absolute;
      top: 16px;
      right: 16px;
      background: rgba(11, 13, 20, 0.88);
      border: 1px solid rgba(59, 130, 246, 0.5);
      color: #60a5fa;
      padding: 8px 16px;
      border-radius: 999px;
      font-size: 0.88rem;
      font-weight: 700;
      box-shadow: 0 8px 20px rgba(0,0,0,0.6);
      backdrop-filter: blur(10px);
      z-index: 10;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    img { width: 1280px; max-width: 92vw; display: block; border-radius: 16px; }

    .controls { margin-top: 22px; display: flex; gap: 16px; align-items: center; }
    button { padding: 12px 28px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 1.05rem; font-weight: 700; box-shadow: 0 6px 20px rgba(59,130,246,0.4); transition: all 0.2s; }
    button:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(139,92,246,0.6); }
    .status { font-size: 0.95rem; color: #94a3b8; font-weight: 500; }
  </style>
</head>
<body>

  <!-- Clickable Video Banner that redirects to Live Portfolio -->
  <a href="https://portfolio-sayani-roy.vercel.app/" target="_blank" class="video-container" title="Click anywhere to open Live Website (portfolio-sayani-roy.vercel.app)">
    <div class="click-overlay-badge">🌐 Click Video to Open Live Portfolio Website ↗</div>
    <img id="frameViewer" src="" alt="Portfolio Interactive Section Click Video Frame" />
  </a>

  <div class="controls">
    <button onclick="togglePlay()" id="playBtn">Pause</button>
    <button onclick="restart()">Restart Video</button>
    <span class="status" id="counter">Frame 1 / ${sampledFrames.length}</span>
  </div>

  <script>
    const frames = ${JSON.stringify(sampledFrames)};
    let index = 0;
    let playing = true;
    const img = document.getElementById('frameViewer');
    const playBtn = document.getElementById('playBtn');
    const counter = document.getElementById('counter');

    function animate() {
      if (playing && frames.length > 0) {
        img.src = frames[index];
        counter.innerText = 'Frame ' + (index + 1) + ' / ' + frames.length;
        index = (index + 1) % frames.length;
      }
      // Slower smooth playback (110ms delay) to showcase full section animations properly
      setTimeout(animate, 110);
    }
    function togglePlay() {
      playing = !playing;
      playBtn.innerText = playing ? 'Pause' : 'Play';
    }
    function restart() {
      index = 0;
      playing = true;
      playBtn.innerText = 'Pause';
    }
    animate();
  </script>
</body>
</html>`;

  const htmlVideoPath = path.join(desktopDir, 'portfolio_interactive_clicks_video.html');
  fs.writeFileSync(htmlVideoPath, htmlPlayerContent);
  console.log(`SUCCESS: Saved Clickable Slow-Animation Interactive Video File to Desktop: ${htmlVideoPath}`);
})();
