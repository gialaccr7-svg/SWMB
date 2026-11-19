import assert from 'node:assert/strict';
import { assertSeoHead } from './seo-head.mjs';
import { resolveSiteConfig, plannedOrigin } from '../lib/site-config.ts';
import { requestSeoPolicy } from '../lib/request-seo.ts';
import { parseFleetQuery } from '../lib/fleet-query.ts';
import { validateRedirects } from '../lib/redirects.ts';
import { readFile, access } from 'node:fs/promises';

assert.deepEqual(resolveSiteConfig({}), { origin: plannedOrigin, indexable: false });
assert.deepEqual(resolveSiteConfig({ SITE_URL: plannedOrigin + '/', SITE_INDEXABLE: 'true' }), {
  origin: plannedOrigin,
  indexable: true,
});
for (const env of [
  { SITE_INDEXABLE: 'true' },
  { SITE_INDEXABLE: 'yes' },
  ...[
    'http://hanhtrinhphuongnam.vn',
    'https://localhost',
    'https://preview.chatgpt.site',
    'https://127.0.0.1',
    'https://hanhtrinhphuongnam.vn/path',
    'https://user:pass@hanhtrinhphuongnam.vn',
    'https://hanhtrinhphuongnam.vn?x=1',
  ].map((SITE_URL) => ({ SITE_URL, SITE_INDEXABLE: 'true' })),
])
  assert.throws(() => resolveSiteConfig(env));

assert.equal(
  requestSeoPolicy('http://www.hanhtrinhphuongnam.vn/doi-xe?seats=7', plannedOrigin, true).redirect,
  plannedOrigin + '/doi-xe?seats=7',
);
assert.equal(
  requestSeoPolicy('https://hanhtrinhphuongnam.vn/doi-xe', plannedOrigin, true).noindex,
  false,
);
assert.equal(
  requestSeoPolicy(
    'https://hanhtrinhphuongnam.vn/doi-xe',
    'https://www.hanhtrinhphuongnam.vn',
    true,
  ).redirect,
  'https://www.hanhtrinhphuongnam.vn/doi-xe',
);
assert.equal(
  requestSeoPolicy(
    'https://www.hanhtrinhphuongnam.vn/doi-xe',
    'https://www.hanhtrinhphuongnam.vn',
    true,
  ).noindex,
  false,
);
assert.equal(
  requestSeoPolicy('https://preview.chatgpt.site/doi-xe', plannedOrigin, true).noindex,
  true,
);
assert.equal(
  requestSeoPolicy('https://hanhtrinhphuongnam.vn/doi-xe', plannedOrigin, false).noindex,
  true,
);
assert.equal(
  requestSeoPolicy('https://preview.chatgpt.site/doi-xe', plannedOrigin, true).redirect,
  undefined,
);
// A path beginning // must never become an external redirect.
assert.equal(
  new URL(
    requestSeoPolicy(
      'http://hanhtrinhphuongnam.vn//evil.example/path',
      plannedOrigin,
      true,
    ).redirect,
  ).host,
  'hanhtrinhphuongnam.vn',
);

for (const seats of ['4', '7', '16', '29', '45'])
  assert.equal(parseFleetQuery({ seats }).seats, Number(seats));
for (const query of [
  { seats: 'abc' },
  { seats: '3' },
  { seats: '07' },
  { seats: ['4', '7'] },
  { purpose: 'unknown' },
  { purpose: ['travel', 'wedding'] },
])
  assert.equal(parseFleetQuery(query).invalid, true);
assert.equal(parseFleetQuery({ seats: '', purpose: 'travel' }).invalid, false);
assert.equal(parseFleetQuery({ utm_source: 'campaign' }).filtered, false);
for (const query of [{ brand: 'unknown' }, { brand: ['Toyota', 'Hyundai'] }])
  assert.equal(parseFleetQuery(query).invalid, true);
assert.equal(parseFleetQuery({ brand: 'Toyota' }).brand, 'Toyota');
assert.equal(parseFleetQuery({ brand: 'Toyota' }).filtered, true);
assert.equal(parseFleetQuery({ unknown: 'x' }).filtered, false);
validateRedirects({ '/old': '/new' });
for (const redirects of [
  { '/old': '/old' },
  { '/old': '/new', '/new': '/last' },
  { '/old': 'https://evil.example' },
  { '/old': '//evil.example' },
])
  assert.throws(() => validateRedirects(redirects));
assert.equal(
  requestSeoPolicy('http://www.hanhtrinhphuongnam.vn/old?utm_source=x', plannedOrigin, true, {
    '/old': '/doi-xe',
  }).redirect,
  plannedOrigin + '/doi-xe?utm_source=x',
);
const images = JSON.parse(
  await readFile(new URL('../lib/image-manifest.json', import.meta.url), 'utf8'),
);
for (const entry of Object.values(images)) {
  assert(entry.width > 0 && entry.height > 0);
  assert(entry.variants.length >= 2);
  for (const variant of entry.variants) {
    assert(variant.width <= entry.width);
    await access(new URL(`../public${variant.src}`, import.meta.url));
  }
}
const fontCss = await readFile(new URL('../app/fonts.css', import.meta.url), 'utf8');
const validHead =
  '<title>Test</title><meta name="description" content="Test"><link rel="canonical" href="https://example.com"><meta name="robots" content="index, follow">';
assertSeoHead(`<html><head>${validHead}</head><body></body></html>`, 'regression: valid head');
assert.throws(() =>
  assertSeoHead(
    `<html><head></head><body>${validHead}</body></html>`,
    'regression: streamed metadata',
  ),
);
assert.throws(() =>
  assertSeoHead(
    `<html><head>${validHead}</head><body><meta name="description" content="Duplicate"></body></html>`,
    'regression: duplicate metadata',
  ),
);
assert(!/https?:\/\//.test(fontCss), 'Fonts must load locally');
for (const match of fontCss.matchAll(/url\((\/fonts\/[^)]+)\)/g))
  await access(new URL(`../public${match[1]}`, import.meta.url));
await access(new URL('../public/fonts/OFL.txt', import.meta.url));
console.log(
  'PASS: SEO configuration, safe redirects, preview indexing, filter inputs, optimized images and local fonts.',
);
