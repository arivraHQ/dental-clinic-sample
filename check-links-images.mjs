import { chromium } from 'playwright';

async function checkLinksAndImages() {
  console.log('=== SITE-WIDE AUDIT: BROKEN LINKS & MISSING IMAGES ===');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const routes = [
    '/',
    '/about',
    '/contact',
    '/emergency',
    '/services/general',
    '/services/cosmetic',
    '/services/emergency'
  ];

  const brokenLinks = [];
  const brokenImages = [];

  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    console.log(`Auditing route: ${route} ...`);
    const resp = await page.goto(url, { waitUntil: 'networkidle' });
    if (resp.status() >= 400) {
      brokenLinks.push({ source: 'route', target: url, status: resp.status() });
      continue;
    }

    // Check images
    const images = await page.$$eval('img', imgs => imgs.map(i => i.src));
    for (const src of images) {
      if (!src) brokenImages.push({ route, src: 'empty' });
    }

    // Check background images in styles
    const bgImages = await page.$$eval('*', els => {
      return els
        .map(el => window.getComputedStyle(el).backgroundImage)
        .filter(bg => bg && bg.startsWith('url('))
        .map(bg => bg.replace(/url\(['"]?(.*?)['"]?\)/, '$1'));
    });

    for (const bg of bgImages) {
      if (bg.startsWith('http://localhost:3000') || bg.startsWith('https://')) {
        try {
          const res = await page.request.get(bg);
          if (res.status() >= 400) {
            brokenImages.push({ route, bg, status: res.status() });
          }
        } catch (e) {
          brokenImages.push({ route, bg, error: e.message });
        }
      }
    }

    // Check internal links
    const links = await page.$$eval('a', as => as.map(a => a.href));
    for (const href of links) {
      if (href.startsWith('http://localhost:3000')) {
        try {
          const res = await page.request.get(href);
          if (res.status() >= 400) {
            brokenLinks.push({ route, href, status: res.status() });
          }
        } catch (e) {
          brokenLinks.push({ route, href, error: e.message });
        }
      }
    }
  }

  console.log('\n=== AUDIT RESULTS ===');
  console.log(`Routes Audited: ${routes.length}`);
  console.log(`Broken Links Found: ${brokenLinks.length}`);
  if (brokenLinks.length > 0) {
    brokenLinks.forEach(b => console.log('  Broken Link:', b));
  } else {
    console.log('✓ PASS: Zero broken internal links found.');
  }

  console.log(`Missing/Broken Images Found: ${brokenImages.length}`);
  if (brokenImages.length > 0) {
    brokenImages.forEach(bi => console.log('  Broken Image:', bi));
  } else {
    console.log('✓ PASS: Zero broken or missing images found.');
  }

  await browser.close();
}

checkLinksAndImages().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
