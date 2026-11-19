import assert from 'node:assert/strict';
import http from 'node:http';
import { spawn } from 'node:child_process';
const canonical = 'hanhtrinhphuongnam.vn';
const child = spawn(process.execPath, ['.output/server/index.mjs'], {
  cwd: process.cwd(), env: { ...process.env, PORT: '8902', HOST: '127.0.0.1' }, stdio: ['ignore', 'pipe', 'pipe'],
});
child.stdout.pipe(process.stdout); child.stderr.pipe(process.stderr);
function request(path, host, protocol) {
  return new Promise((resolve, reject) => {
    const req = http.get('http://127.0.0.1:8902' + path, {
      headers: { host, ...(protocol ? { 'x-forwarded-proto': protocol } : {}) },
    }, res => { res.resume(); res.on('end', () => resolve(res)); });
    req.on('error', reject); req.setTimeout(10000, () => req.destroy(new Error('Request timeout')));
  });
}
// Simulate HTTPS terminated by the hosting reverse proxy, without changing DNS.
const proxy = http.createServer((req, res) => {
  const upstream = http.request({ hostname: '127.0.0.1', port: 8902, path: req.url, method: req.method,
    headers: { ...req.headers, host: canonical, 'x-forwarded-proto': 'https' },
  }, response => { res.writeHead(response.statusCode, response.headers); response.pipe(res); });
  upstream.on('error', error => { if (!res.destroyed && !res.writableEnded) { if (!res.headersSent) res.writeHead(502); res.end(error.message); } }); req.pipe(upstream);
});
try {
  let ready = false;
  for (let i = 0; i < 100; i++) {
    if (child.exitCode !== null) throw new Error('Server stopped: ' + child.exitCode);
    try { if ((await fetch('http://127.0.0.1:8902/robots.txt')).ok) { ready = true; break; } } catch {}
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  assert(ready, 'Server did not become ready');
  for (const [host, protocol] of [[canonical, undefined], ['www.' + canonical, 'https']]) {
    const response = await request('/doi-xe?seats=7', host, protocol);
    assert.equal(response.statusCode, 308);
    assert.equal(response.headers.location, 'https://' + canonical + '/doi-xe?seats=7');
  }
  for (const route of ['/', '/doi-xe', '/kinh-nghiem', '/sitemap.xml', '/robots.txt']) {
    const live = await request(route, canonical, 'https');
    assert.equal(live.statusCode, 200, route + ': HTTPS loop or error');
    assert(!/noindex/.test(live.headers['x-robots-tag'] || ''), route + ': production blocked');
    const preview = await request(route, 'handover-preview.example.com', 'https');
    assert.equal(preview.statusCode, 200);
    assert.match(preview.headers['x-robots-tag'] || '', /noindex/, route + ': preview unprotected');
  }
  await new Promise(resolve => proxy.listen(8903, '127.0.0.1', resolve));
  Object.assign(process.env, { CHECK_URL: 'http://127.0.0.1:8903',
    CHECK_CANONICAL_ORIGIN: 'https://' + canonical, CHECK_INDEXABLE: 'true',
    CHECK_PUBLIC: 'true', CHECK_PROXY_HTTPS: 'true' });
  await import('./check-site.mjs');
  console.log('PASS: Production HTTPS proxy, HTTP/www redirects, public indexing and preview host noindex.');
} finally { proxy.closeAllConnections(); proxy.close(); child.kill(); }
