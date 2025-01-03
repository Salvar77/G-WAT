import "./globals.scss";
import Script from "next/script";
import ClientLayout from "@/components/More/ClientLayout";
import Footer from "@/components/Footer/Footer";
import ContactBubble from "@/components/Main/ContactBubble";

// Metadane muszą być eksportowane z komponentu serwerowego (bez "use client").
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
          strategy="lazyOnload"
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
              })(window,document,'script','dataLayer','GTM-PQVL22FS');
            `,
          }}
        />

        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQVL22FS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ClientLayout>{children}</ClientLayout>

        <Footer />
        <ContactBubble />
      </body>
    </html>
  );
}
