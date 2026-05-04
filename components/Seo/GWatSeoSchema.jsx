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
        "item": `${domain}/#cennik`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Pomiary Fotowoltaiki",
        "item": `${domain}/#technologie`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Galeria Realizacji",
        "item": `${domain}/#galeria`
      }
    ]
  };

  // 2. Services as Products (to get "Zakupy" report in GSC)
  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Pomiary instalacji fotowoltaicznych Opole",
      "image": `${domain}/g-wat10.png`,
      "description": "Profesjonalne pomiary strony DC i AC, rezystancja izolacji i uziemienia instalacji PV.",
      "brand": { "@type": "Brand", "name": "G-WAT" },
      "offers": {
        "@type": "Offer",
        "url": `${domain}/#cennik`,
        "price": "400.00",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Montaż zasilania awaryjnego Back-up",
      "image": `${domain}/g-wat10.png`,
      "description": "Instalacja trybu awaryjnego dla falowników Deye, GoodWe, FoxEss i innych.",
      "brand": { "@type": "Brand", "name": "G-WAT" },
      "offers": {
        "@type": "Offer",
        "url": `${domain}/#cennik`,
        "price": "1800.00",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock"
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
        "name": "O mnie",
        "url": `${domain}/#about`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Technologie",
        "url": `${domain}/#technologie`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Cennik",
        "url": `${domain}/#cennik`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Galeria",
        "url": `${domain}/#galeria`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
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
