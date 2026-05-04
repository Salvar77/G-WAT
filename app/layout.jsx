import "./globals.scss";
import Script from "next/script";
import ClientLayout from "@/components/More/ClientLayout";
import Footer from "@/components/Footer/Footer";
import ContactBubble from "@/components/Main/ContactBubble";

export const metadata = {
  title: "G-WAT Pomiary elektryczne",
  description: "G-WAT Pomiary elektryczne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager  */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `,
          }}
        />

        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ClientLayout>{children}</ClientLayout>

        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.g-wat.pl/#business",
              name: "G-WAT Pomiary Elektryczne",
              url: "https://www.g-wat.pl",
              logo: "https://www.g-wat.pl/g-wat-logo.svg",
              image: "https://www.g-wat.pl/g-wat-logo.svg",
              description:
                "Profesjonalne pomiary elektryczne i serwis instalacji fotowoltaicznych w Opolu. Certyfikowane pomiary, odbiory techniczne, zasilanie awaryjne.",
              telephone: "+48 503 416 319",
              email: "banach@g-wat.pl",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Stefana Okrzei 11/9",
                addressLocality: "Opole",
                postalCode: "45-713",
                addressCountry: "PL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 50.6666,
                longitude: 17.9233,
              },
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Opole i okolice",
              },
              hasMap: "https://share.google/8qNzN264gz3DJf777",
              sameAs: ["https://share.google/8qNzN264gz3DJf777"],
            }),
          }}
        />
        <Footer />
        <ContactBubble />
      </body>
    </html>
  );
}
