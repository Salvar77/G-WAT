import {
  heroImageDesktop,
  heroImageMobile,
  photo1,
  photo2,
  photo3,
  photo4,
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  FaEnvelope,
  FaPhoneAlt,
  mail,
  phone,
} from "../assets";

const priceList = [
  {
    id: 1,
    name: "Pomiary instalacji fotowoltaicznych",
    description:
      "Pomiary strony DC i AC, pomiary napięć i strat modułów fotowoltaicznych, rezystancje izolacji, rezystancje uziemienia. Dodatkowo analiza strat uzysków instalacji względem projektów.",
    details: [
      "Pomiary strony DC",
      "Pomiary napięć i strat modułów fotowoltaicznych",
      "Rezystancja izolacji",
      "Rezystancja uziemienia",
      "Pomiary strony AC (zabezpieczenia różnicowo-prądowe i nadprądowe)",
      "Interpretacja strat uzysków względem projektów",
    ],
    regions: [
      {
        region: "opolskie",
        priceBrutto: "800 zł",
        priceNetto: "732 zł",
      },
      {
        region: "śląskie / dolnośląskie",
        priceBrutto: "950 zł",
        priceNetto: null,
      },
    ],
    imagePath: foto1,
  },
  {
    id: 2,
    name: "Odbiory instalacji fotowoltaicznych jako niezależny inspektor",
    description:
      "Pomiary elektryczne, interpretacja doboru konstrukcji, sprawdzanie prawidłowości montażu.",
    details: [
      "Pomiary elektryczne",
      "Interpretacja doboru konstrukcji",
      "Sprawdzanie prawidłowości montażu",
    ],
    regions: [
      {
        region: "opolskie",
        priceBrutto: "1000 zł",
        priceNetto: null,
      },
      {
        region: "śląskie / dolnośląskie",
        priceBrutto: "1150 zł",
        priceNetto: null,
      },
    ],
    imagePath: foto2,
  },
  {
    id: 3,
    name: "Pomiary instalacji elektrycznej w domach jednorodzinnych",
    description:
      "Pomiary punktów przyłącza oraz pomiary rezystancji uziemienia dla domów jednorodzinnych.",
    details: [
      "Pomiary punktów przyłącza (15 zł netto od punktu)",
      "Pomiary rezystancji uziemienia",
    ],
    regions: [
      {
        region: "Cała Polska",
        priceBrutto: "15 zł netto za punkt przyłącza",
        priceNetto: null,
      },
      {
        region: "Rezystancja uziemienia",
        priceBrutto: "500 zł netto",
        priceNetto: null,
      },
    ],
    imagePath: foto3,
  },
];

const contactInfo = {
  title: "Kontakt",
  address: {
    street: "Stefana Okrzei 21",
    city: "46-020 Opole",
  },
  phone: {
    icon: phone,
    number: "503 416 319",
  },
  email: {
    icon: mail,
    address: "banach@sunlight-com.net",
  },
};

export { priceList, contactInfo };