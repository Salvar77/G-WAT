import localFont from "next/font/local";
import "./globals.scss";
import Nav from "@/components/Nav/Nav";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import ClientLayout from "@/components/More/ClientLayout";
import Footer from "@/components/Footer/Footer";
import GoogleMap from "@/components/More/GoogleMap";

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
      <body>
        <ClientLayout>{children}</ClientLayout>
        <GoogleMap />
        <Footer />
      </body>
    </html>
  );
}
