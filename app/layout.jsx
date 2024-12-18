import "./globals.scss";
import ClientLayout from "@/components/More/ClientLayout";
import Footer from "@/components/Footer/Footer";
import ContactBubble from "@/components/Main/ContactBubble";

export const metadata = {
  title: "G-WAT Pomiary elektryczne",
  description: "G-WAT Pomiary elektryczne",
};

if (typeof window !== "undefined") {
  Modal.setAppElement("#__next");
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="4ff350f7-5c40-43d1-8e72-520c9043fac2"
          data-blockingmode="auto"
          type="text/javascript"
        ></script>

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>

        <Footer />
        <ContactBubble />
      </body>
    </html>
  );
}
