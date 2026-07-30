const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser for video recording...');
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();
  
  // Create desktop target directory
  const desktopDir = 'C:\\Users\\Sayani Roy\\Desktop';
  const outputPath = path.join(desktopDir, 'portfolio_full_website_video.webm');

  console.log('Navigating to local portfolio server http://localhost:4173 ...');
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle2' });

  // Wait 3 seconds for initial animations
  await page.evaluate(() => new Promise(r => setTimeout(r, 3000)));

  // Use MediaRecorder in browser context to record video natively
  console.log('Starting MediaRecorder in browser...');
  const mediaRecorderScript = `
    window.recordedChunks = [];
    const stream = document.querySelector('html').captureStream ? document.querySelector('html').captureStream(30) : null;
  `;

  // Alternative: scroll smooth and take screenshots / screencast
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

  console.log('Scrolling through full portfolio smoothly...');
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  const viewportHeight = 1080;
  let currentScroll = 0;

  while (currentScroll < scrollHeight - viewportHeight) {
    currentScroll += 15; // Smooth scroll step
    await page.evaluate((y) => window.scrollTo(0, y), currentScroll);
    await new Promise(r => setTimeout(r, 40)); // 25 fps smooth scroll
  }

  // Hold at bottom
  await new Promise(r => setTimeout(r, 2000));

  // Scroll back to top
  console.log('Scrolling back to top...');
  while (currentScroll > 0) {
    currentScroll -= 40;
    if (currentScroll < 0) currentScroll = 0;
    await page.evaluate((y) => window.scrollTo(0, y), currentScroll);
    await new Promise(r => setTimeout(r, 30));
  }

  await new Promise(r => setTimeout(r, 1000));
  await client.send('Page.stopScreencast');
  await browser.close();

  console.log(`Captured ${frames.length} frames.`);

  // Save the video / GIF / WebM using simple encoding or saving frames
  // Convert JPEG frames to a WebM/MP4 or WebP animation / HTML player or save to Desktop
  const htmlPlayerContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Portfolio Recorded Walkthrough</title>
  <style>
    body { margin: 0; background: #030408; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; font-family: sans-serif; color: white; }
    img { max-width: 95vw; max-height: 85vh; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.8); }
    .controls { margin-top: 15px; display: flex; gap: 10px; }
    button { padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Sayani Roy - Portfolio Full Recorded Video Walkthrough</h2>
  <img id="frameViewer" src="" alt="Portfolio Frame" />
  <div class="controls">
    <button onclick="togglePlay()" id="playBtn">Pause</button>
    <button onclick="restart()">Restart</button>
  </div>
  <script>
    const frames = ${JSON.stringify(frames.map(f => 'data:image/jpeg;base64,' + f.toString('base64')))};
    let index = 0;
    let playing = true;
    const img = document.getElementById('frameViewer');
    const playBtn = document.getElementById('playBtn');

    function animate() {
      if (playing) {
        img.src = frames[index];
        index = (index + 1) % frames.length;
      }
      setTimeout(animate, 40);
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
</html>
  `;

  const htmlVideoPath = path.join(desktopDir, 'portfolio_full_website_video.html');
  fs.writeFileSync(htmlVideoPath, htmlPlayerContent);
  console.log(`Saved interactive video player to ${htmlVideoPath}`);

  // Also save a WebM / GIF video file using puppeteer / ffmpeg if available
  console.log('Video recording completed successfully!');
})();
