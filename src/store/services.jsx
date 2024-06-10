import {
  FaCheckCircle,
  FaPencilAlt,
  FaLanguage,
  FaSpellCheck,
} from "react-icons/fa";
import { RiFileTextFill } from "react-icons/ri";

const services = [
  {
    name: "Gramatička korektura",
    description:
      "Ispravljanje gramatičkih grešaka kao što su pravopisne greške, greške u korištenju interpunkcijskih znakova, greške u konstrukciji rečenica i slično.",
    icon: <FaCheckCircle />,
  },
  {
    name: "Pravopisna korektura",
    description:
      "Provjera da li su sve riječi pravilno napisane prema jezičkim pravilima i standardima.",
    icon: <FaSpellCheck />,
  },
  {
    name: "Stilska korektura",
    description:
      "Poboljšanje stila pisanja, što može uključivati prilagođavanje stila teksta ciljanoj publici, poboljšanje čitljivosti, raznovrsnost rečenica i fluidnost teksta.",
    icon: <FaPencilAlt />,
  },
  {
    name: "Korektura interpunkcije",
    description:
      "Provjera i ispravljanje upotrebe interpunkcijskih znakova kako bi tekst bio jasniji i lakši za razumijevanje.",
    icon: <RiFileTextFill />,
  },
  {
    name: "Korektura formatiranja",
    description:
      "Provjera da li su svi dijelovi teksta formatirani u skladu sa zahtjevima (npr. naslovi, podnaslovi, odlomci, citati).",
    icon: <FaLanguage />,
  },
  {
    name: "Korektura stilizovanja",
    description:
      "Prilagođavanje teksta prema određenim stilskim smjernicama (npr. APA, MLA, Chicago stil), uključujući i provjeru citiranja i bibliografskih referenci.",
    icon: <FaPencilAlt />,
  },
  {
    name: "Provjera dosljednosti",
    description:
      "Osiguravanje dosljednosti u korištenju terminologije, pravopisa i drugih stilskih elemenata kroz cijeli tekst.",
    icon: <FaSpellCheck />,
  },
  {
    name: "Lektura sadržaja",
    description:
      "Ocjenjivanje sadržaja na logičnost, dosljednost i uvjerljivost, dajući sugestije za poboljšanje.",
    icon: <FaPencilAlt />,
  },
  {
    name: "Specijalizovane usluge",
    description:
      "Prilagođene usluge za određene vrste sadržaja kao što su akademski radovi, marketinški materijali, knjige, tehnički dokumenti i druge vrste tekstova.",
    icon: <FaCheckCircle />,
  },
];

export default services;
