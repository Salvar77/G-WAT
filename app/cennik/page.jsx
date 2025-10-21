import PriceList from "../../components/Main/PriceList";
import Contact from "../../components/Main/Contact";
import classes from "./Cennik.module.scss";

export const metadata = {
  title: "Cennik usług elektrycznych | G-WAT Pomiary Elektryczne Opole",
  description:
    "Sprawdź aktualne ceny pomiarów instalacji fotowoltaicznych, odbiorów technicznych, pomiarów elektrycznych i zasilania awaryjnego.",
  alternates: { canonical: "/cennik" },
  keywords:
    "cennik pomiary elektryczne, cena pomiary fotowoltaika, odbiory instalacji, zasilanie awaryjne cena, pomiary elektryczne Opole",
  openGraph: {
    url: "/cennik",
    title: "Cennik usług elektrycznych | G-WAT Pomiary Elektryczne Opole",
    description:
      "Poznaj szczegółowy cennik profesjonalnych usług elektrycznych: pomiary instalacji fotowoltaicznych, odbiory techniczne, pomiary elektryczne i montaż zasilania awaryjnego.",
    type: "website",
    siteName: "G-WAT Pomiary Elektryczne",
    images: [
      {
        url: "https://www.g-wat.pl/g-wat10.png",
        width: 1200,
        height: 630,
        alt: "Cennik usług elektrycznych G-WAT",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CennikPage() {
  return (
    <main>
      <h1 className={classes.cennik}>Cennik usług elektrycznych</h1>
      <PriceList />
      <Contact />
    </main>
  );
}
