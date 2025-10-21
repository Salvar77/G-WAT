import AboutClient from "./AboutClient";

export const metadata = {
  title:
    "Technologie G-WAT | Certyfikowany sprzęt do pomiarów elektrycznych Opole",
  description:
    "Wykorzystujemy certyfikowany miernik Sonel MPI-540PV do pomiarów instalacji fotowoltaicznych. Obsługa Huawei, SolarEdge, FoxEss, GoodWe i innych.",
  alternates: { canonical: "/technologie" },
  keywords:
    "technologie pomiary elektryczne, Sonel MPI-540PV, certyfikaty magazyny energii, pomiary fotowoltaika Opole",
  openGraph: {
    url: "/technologie",
    title: "Technologie G-WAT | Certyfikowany sprzęt do pomiarów elektrycznych",
    description:
      "Profesjonalny sprzęt pomiarowy Sonel MPI-540PV i certyfikaty dla magazynów energii. Obsługa wszystkich popularnych falowników.",
    type: "website",
    siteName: "G-WAT Pomiary Elektryczne",
    images: [
      {
        url: "/og/g-wat10.png",
        width: 1200,
        height: 630,
        alt: "Technologie G-WAT - certyfikowany sprzęt pomiarowy",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TechnologiePage() {
  return <AboutClient />;
}
