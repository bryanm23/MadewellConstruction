import { createWriteStream } from 'fs';
import { SitemapStream } from 'sitemap';

// Create a stream to write to
const sitemap = new SitemapStream({ hostname: 'https://madewellconstruction.org' });
const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

// Add your URLs
sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
sitemap.write({ url: '/#about', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/#services', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/#projects', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/#contact', changefreq: 'monthly', priority: 0.8 });

// Service-specific pages (these would be actual pages in a multi-page site)
sitemap.write({ url: '/services/residential-construction', changefreq: 'monthly', priority: 0.7 });
sitemap.write({ url: '/services/commercial-construction', changefreq: 'monthly', priority: 0.7 });
sitemap.write({ url: '/services/kitchen-bathroom-remodeling', changefreq: 'monthly', priority: 0.7 });
sitemap.write({ url: '/services/additions-expansions', changefreq: 'monthly', priority: 0.7 });
sitemap.write({ url: '/services/sustainable-building', changefreq: 'monthly', priority: 0.7 });

// Areas served (these would be location pages in a full site)
sitemap.write({ url: '/areas-served/lafayette-nj', changefreq: 'monthly', priority: 0.6 });
sitemap.write({ url: '/areas-served/newton-nj', changefreq: 'monthly', priority: 0.6 });
sitemap.write({ url: '/areas-served/sparta-nj', changefreq: 'monthly', priority: 0.6 });
sitemap.write({ url: '/areas-served/andover-nj', changefreq: 'monthly', priority: 0.6 });
sitemap.write({ url: '/areas-served/sussex-county-nj', changefreq: 'monthly', priority: 0.6 });

// End sitemap
sitemap.end();

console.log('Sitemap generated at ./public/sitemap.xml'); 