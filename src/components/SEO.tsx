import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SEO = ({ 
  title = "Madewell Construction | General Contractor in Sussex County, NJ",
  description = "Madewell Construction is a trusted general contractor in Sussex County, NJ with over 40 years of experience delivering quality construction services. Expert home renovations, commercial build-outs, and custom projects.",
  canonical = "https://madewellconstruction.org/"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
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
            "@type": "LocalBusiness",
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
            "priceRange": "$$"
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO; 