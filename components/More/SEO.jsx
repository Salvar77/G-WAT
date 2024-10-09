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
            "contactType": "Customer Support"
          }
        }
      `}</script>
  </Head>
);

export default SEO;
