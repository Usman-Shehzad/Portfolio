import { NextResponse } from 'next/server';

export async function GET() {
  // Update these URLs to match your actual site structure
  const baseUrl = 'https://usman-shehzad.vercel.app/';
  const urls = [
    '',
    '/projects',
    '/skills',
    '/certifications',
    '/contact',
    '/contact_us',
    '/home',
    // Add more routes as needed
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${baseUrl}${url}</loc>
    </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
