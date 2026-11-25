import { chromium } from 'playwright';

async function runTest() {
  console.log('=== PLAYWRIGHT E2E QA TEST: DENTAL CLINIC ===');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();

  const consoleLogs = [];
  const pageErrors = [];

  page.on('console', msg => {
    const text = `[BROWSER ${msg.type().toUpperCase()}] ${msg.text()}`;
    consoleLogs.push(text);
    console.log(text);
  });

  page.on('pageerror', err => {
    const text = `[BROWSER PAGE ERROR] ${err.message}`;
    pageErrors.push(text);
    console.error(text);
  });

  console.log('1. Navigating to http://localhost:3000 ...');
  const response = await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  console.log(`   Initial load HTTP status: ${response.status()}`);

  console.log('2. Clicking "Book Consultation" navigation link ...');
  await page.locator('header a:has-text("Book Consultation")').click();
  await page.waitForURL('**/contact');
  console.log(`   Navigated to: ${page.url()}`);

  console.log('3. Filling out booking consultation form ...');
  await page.fill('input[placeholder="e.g. Priya Sharma"]', 'Priya Sharma');
  await page.fill('input[placeholder="+91 98000 00000"]', '+91 98765 43210');
  await page.fill('input[type="date"]', '2026-11-25');
  await page.selectOption('select:has-text("Morning")', 'Morning (9:30 AM – 1:00 PM)');
  console.log('   Form fields successfully filled: Name="Priya Sharma", Phone="+91 98765 43210"');

  console.log('4. Submitting form via "Confirm Request Online" button ...');
  await page.locator('button[type="submit"]:has-text("Confirm Request Online")').first().click();

  console.log('5. Awaiting confirmation card ...');
  await page.waitForSelector('text=Appointment Request Confirmed', { timeout: 6000 });
  const successHeading = await page.locator('h3:has-text("Thank You")').textContent();
  const confirmationCode = await page.locator('span.font-mono').textContent();
  console.log(`   Confirmation Heading: "${successHeading?.trim()}"`);
  console.log(`   Assigned Reference Code: "${confirmationCode?.trim()}"`);

  console.log('6. Verifying phone tap-to-call link integrity ...');
  const telLinks = await page.$$eval('a[href^="tel:"]', els => els.map(e => ({ text: e.innerText.trim(), href: e.href })));
  console.log(`   Found ${telLinks.length} tap-to-call links on /contact:`);
  telLinks.forEach(tl => console.log(`     -> "${tl.text}" => ${tl.href}`));

  console.log('\n=== PLAYWRIGHT QA SUMMARY ===');
  console.log(`Total Browser Console Logs: ${consoleLogs.length}`);
  console.log(`Total Browser Errors: ${pageErrors.length}`);
  if (pageErrors.length === 0) {
    console.log('RESULT: PASS (Zero errors, valid submission, live reference code generated)');
  } else {
    console.error('RESULT: FAIL (Browser errors detected)');
  }

  await browser.close();
}

runTest().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
