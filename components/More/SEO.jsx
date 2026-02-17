import Head from "next/head";

const SEO = ({ title, description, image }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://www.g-wat.pl",
        "name": "G-WAT",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+48-503-416-319",
          "contactType": "Customer Support",
          "areaServed": "Opole, Poland",
          "availableLanguage": ["Polish", "English"]
        },
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.g-wat.pl/g-wat10.png"
        },

        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ul. Stefana Okrzei 11",
          "addressLocality": "Opole",
          "postalCode": "45-713",
          "addressCountry": "PL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "50.675106",
          "longitude": "17.921298"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${title}",
        "description": "${description}",
        "image": "${image}",
        "author": {
          "@type": "Organization",
          "name": "G-WAT"
        },
        "publisher": {
          "@type": "Organization",
          "name": "G-WAT",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.g-wat.pl/g-wat10.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.g-wat.pl"
        }
      }
      `}</script>
  </Head>
);

export default SEO;
