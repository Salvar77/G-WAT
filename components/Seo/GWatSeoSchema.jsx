"use client";

const GWatSeoSchema = () => {
  const domain = "https://www.g-wat.pl";

  // 1. BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona Główna",
        "item": domain
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Cennik Usług",
        "item": `${domain}/cennik`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Pomiary Fotowoltaiki",
        "item": `${domain}/technologie`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Galeria Realizacji",
        "item": `${domain}/galeria`
      }
    ]
  };

  // 2. Services as Products (to get "Zakupy" report in GSC)
  const sharedReturnPolicy = {
    "@type": "MerchantReturnPolicy",
    "applicableCountry": "PL",
    "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
  };

  const sharedShipping = {
    "@type": "OfferShippingDetails",
    "shippingRate": {
      "@type": "MonetaryAmount",
      "value": "0",
      "currency": "PLN"
    },
    "shippingDestination": {
      "@type": "DefinedRegion",
      "addressCountry": "PL"
    },
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "handlingTime": {
        "@type": "QuantitativeValue",
        "minValue": 0,
        "maxValue": 1,
        "unitCode": "DAY"
      },
      "transitTime": {
        "@type": "QuantitativeValue",
        "minValue": 0,
        "maxValue": 1,
        "unitCode": "DAY"
      }
    }
  };

  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Pomiary instalacji fotowoltaicznych Opole",
      "image": `${domain}/g-wat-logo.svg`,
      "description": "Profesjonalne pomiary strony DC i AC, rezystancja izolacji i uziemienia instalacji PV.",
      "brand": { "@type": "Brand", "name": "G-WAT" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "24",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Dawid Kontowicz"
        },
        "reviewBody": "Usługa została zrealizowana w sposób w pełni profesjonalny i rzetelny. Pan Grzegorz wyróżnia się bardzo dużą wiedzą techniczną, wysokimi kompetencjami oraz precyzyjną oceną analizowanych zagadnień. Zdecydowanie polecamy firmę G-WAT."
      },
      "offers": {
        "@type": "Offer",
        "url": `${domain}/#cennik`,
        "price": "400.00",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock",
        "hasMerchantReturnPolicy": sharedReturnPolicy,
        "shippingDetails": sharedShipping
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Montaż zasilania awaryjnego Back-up",
      "image": `${domain}/g-wat-logo.svg`,
      "description": "Instalacja trybu awaryjnego dla falowników Deye, GoodWe, FoxEss i innych.",
      "brand": { "@type": "Brand", "name": "G-WAT" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "18",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Grzegorz Grudziński"
        },
        "reviewBody": "Instalacja wykonana z niezwykłą pedantycznością! Każdy element, od montażu falownika po integrację z systemem back-up, świadczy o wysokiej dbałości o szczegóły. To prawdziwy wzór dla innych realizacji!"
      },
      "offers": {
        "@type": "Offer",
        "url": `${domain}/#cennik`,
        "price": "1800.00",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock",
        "hasMerchantReturnPolicy": sharedReturnPolicy,
        "shippingDetails": sharedShipping
      }
    }
  ];

  // 3. FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak często należy wykonywać pomiary instalacji fotowoltaicznej?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zaleca się wykonywanie pełnych pomiarów kontrolnych co 5 lat, jednak w przypadku instalacji komercyjnych lub po gwałtownych zjawiskach pogodowych warto robić to częściej dla zachowania gwarancji i bezpieczeństwa."
        }
      },
      {
        "@type": "Question",
        "name": "Czy G-WAT wystawia protokoły do straży pożarnej i ubezpieczalni?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, po wykonaniu pomiarów wystawiamy pełną dokumentację techniczną i certyfikowane protokoły akceptowane przez ubezpieczycieli oraz organy kontrolne."
        }
      },
      {
        "@type": "Question",
        "name": "W jakim regionie działa G-WAT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Działamy głównie w województwie opolskim, dolnośląskim i śląskim, ale w przypadku większych zleceń lub odbiorów technicznych obsługujemy klientów w całej Polsce."
        }
      }
    ]
  };

  // 4. SiteNavigationElement
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Technologie",
        "url": `${domain}/technologie`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Realizacje",
        "url": `${domain}/galeria`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Cennik",
        "url": `${domain}/cennik`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Rezerwacje",
        "url": `${domain}/#kalendarz`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Referencje",
        "url": `${domain}/#referencje`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "Kontakt",
        "url": `${domain}/#kontakt`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />
      {services.map((service, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
    </>
  );
};

export default GWatSeoSchema;
