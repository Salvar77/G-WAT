import RealizationsClient from "./RealizationsClient";

export const metadata = {
  title: "Cennik usług elektrycznych | G-WAT Pomiary Elektryczne Opole",
  description:
    "Cennik pomiarów instalacji fotowoltaicznych, odbiorów technicznych i zasilania awaryjnego. Profesjonalne usługi elektryczne w Opolu i na Śląsku.",
  alternates: { canonical: "/realizacje" },
  keywords:
    "realizacje pomiary elektryczne, galeria instalacje fotowoltaiczne, zdjęcia pomiary fotowoltaika, odbiory techniczne Opole, serwis falowników Śląsk",
  openGraph: {
    url: "/realizacje",
    title:
      "Realizacje G-WAT | Galeria pomiarów elektrycznych i instalacji fotowoltaicznych Opole",
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
