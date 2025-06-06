import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SEO = ({ 
  title = "Madewell Construction | General Contractor in Lafayette & Sussex County, NJ",
  description = "Madewell Construction is your trusted general contractor in Lafayette and Sussex County, NJ. Over 40 years of experience in home renovations, commercial construction, and custom projects. Serving Lafayette, Newton, Sparta, and all of Sussex County.",
  canonical = "https://madewellconstruction.org/"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Keywords for better SEO */}
      <meta name="keywords" content="general contractor lafayette nj, construction company sussex county, home renovation lafayette, commercial construction sussex county, contractor near me, custom home builder lafayette nj, remodeling services sussex county, construction company near me, lafayette nj contractor, sussex county builder" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://madewellconstruction.org/og-image.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://madewellconstruction.org/twitter-image.jpg" />
      
      {/* Local Business Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            "name": "Madewell Construction",
            "image": "https://madewellconstruction.org/logo.png",
            "url": "https://madewellconstruction.org",
            "telephone": "201-924-8164",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "176 Statesville Quarry Road",
              "addressLocality": "Lafayette",
              "addressRegion": "NJ",
              "postalCode": "07848",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.1018,
              "longitude": -74.6936
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 41.1018,
                "longitude": -74.6936
              },
              "geoRadius": "30000"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "16:00"
            },
            "priceRange": "$$",
            "servesCuisine": "Construction Services",
            "sameAs": [
              "https://www.facebook.com/madewellconstruction",
              "https://www.instagram.com/madewellconstruction"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Construction Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Home Renovation",
                    "description": "Complete home renovation services in Lafayette and Sussex County"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Construction",
                    "description": "Commercial construction and renovation in Sussex County"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Home Building",
                    "description": "Custom home construction in Lafayette and surrounding areas"
                  }
                }
              ]
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO; 