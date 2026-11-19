import { NextRequest, NextResponse } from 'next/server';
import { site } from './lib/site';
import { requestSeoPolicy } from './lib/request-seo';

export function proxy(request: NextRequest) {
  // Vibe Host terminates TLS before the Node server. Preserve the public
  // protocol for our own domains so HTTPS requests do not redirect to themselves.
  // The hosting ingress must overwrite X-Forwarded-Proto.
  const url = new URL(request.url);
  const canonical = new URL(site.origin);
  if (
    request.headers.get('x-forwarded-proto') === 'https' &&
    (url.host === canonical.host || url.host === 'www.' + canonical.host)
  ) url.protocol = 'https:';
  const policy = requestSeoPolicy(url.href, site.origin, site.indexable);
  if (policy.redirect) return NextResponse.redirect(policy.redirect, 308);
  const response = NextResponse.next();
  if (policy.noindex) response.headers.set('X-Robots-Tag', 'noindex, follow');
  return response;
}

export const config = { matcher: ['/((?!_next/|images/|fonts/|favicon.svg).*)'] };
