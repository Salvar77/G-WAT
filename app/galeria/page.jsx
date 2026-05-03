import RealizationsClient from "./RealizationsClient";

export const metadata = {
  title: "Galeria realizacji G-WAT | Pomiary elektryczne i instalacje Opole",
  description:
    "Galeria zdjęć z realizacji G-WAT: pomiary instalacji fotowoltaicznych, odbiory techniczne, serwis falowników w Opolu i na Śląsku.",
  alternates: { canonical: "https://www.g-wat.pl/galeria" },
  keywords:
    "realizacje pomiary elektryczne, galeria instalacje fotowoltaiczne, zdjęcia pomiary fotowoltaika, odbiory techniczne Opole, serwis falowników Śląsk",
  openGraph: {
    url: "https://www.g-wat.pl/galeria",
    title:
      "Galeria G-WAT | Zdjęcia z pomiarów elektrycznych i instalacji fotowoltaicznych",
    description:
      "Galeria naszych realizacji: pomiary instalacji fotowoltaicznych, odbiory techniczne, serwis falowników i montaż zasilania awaryjnego. Zobacz zdjęcia z wykonanych prac.",
    type: "website",
    siteName: "G-WAT Pomiary Elektryczne",
    images: [
      {
        url: "https://www.g-wat.pl/g-wat10.png",
        width: 1200,
        height: 630,
        alt: "Realizacje G-WAT - pomiary elektryczne i instalacje fotowoltaiczne",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RealizationsPage() {
  return <RealizationsClient />;
}
