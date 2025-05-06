import image from "@/node_modules/next/image";
import { title } from "process";
import { IconType } from "react-icons";
import { GiWeight } from "react-icons/gi";
import { LuTimerReset } from "react-icons/lu";
import { text } from "stream/consumers";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Usluge",
    link: "/#usluge",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface WorkList {
  id: number;
  title: string;
}

export const workList = [
  {
    id: 1,
    title: "Bezbednost i zdravlje na radu",
  },
  {
    id: 2,
    title: "Zaštita životne sredine",
  },
  {
    id: 3,
    title: "Zaštita od požara",
  },
  {
    id: 4,
    title: "Vanredne situacije",
  },
  {
    id: 5,
    title: "Priprema dokumentacije iz radnih odnosa",
  },
];

export interface PageData {
  id: number;
  image: string;
  title: string;
  description: string[];
  text: string;
  text2: string;
}

export const pageData: PageData[] = [
  {
    id: 1,
    image: "/zastitanaradu.jpeg",
    title: "Bezbednost i zdravlje na radu",
    description: [
      "Izrada Akta o proceni rizika na radnom mestu i u radnoj sredini",
      "Izrada zakonom predviđen Obrazac br. 6",
      "Izrada Programa obuke za bezbedan i zdrav rad",
      "Izrada Pravilnika o bzbednosti i zdravlju na radu",
      "Izrada Evidencije o bezbednosti i zdravlja na radu 1-11",
      "Vrši obuku zaposlenih za bezbedan i zdrav rad",
      "Izrađuje uputstva za bezbedan i zdrav rad",
      "Prati primenu mera bezbednosti i zdravlja na radu kod pravnog lica, i druga dokumenta predviđena Zakonom",
      "Organizuje preventivne preglede opreme za rad",
      "Organizuje pregled i proveru električnih i gromobranskih instalacija i uslova radne sredine u zimskom i letnjem periodu",
      "Organizuje preventivne i periodične lekarske preglede za zaposlene – izrada uputa",
      "Organizuje osposobljavanje zaposlenih za pružanje prve pomoći",
      "Koordinira i sarađuje sa medicinom rada u vezi mišljenja za radna mesta sa povećanim rizikom",
    ],
    text: "Savetnik/saradnik za bezbednost i zdravlje na radu zastupa poslodavca pred inspekcijskim organima – inspekcija rada",
    text2:
      "INSTITUT LIRA DOO pruža kompletnu podršku poslodavcima u ispunjavanju svih zakonskih obaveza iz oblasti bezbednosti i zdravlja na radu. Naš tim stručnjaka brine da vaše poslovanje bude efikasno organizovano i u skladu sa propisima. U okviru ove oblasti, izrađujemo i sprovodimo sledeće:",
  },
  {
    id: 2,
    image: "/zastitazivotnesredine.jpg",
    title: "Zaštita životne sredine",
    description: [
      "Izrada Plana upravljanje otpadom",
      "Izrada Zahteva za integrisanu dozvolu (IPPC)",
      "Izveštavanje za Agenciju zaštite životne sredine (izrada godišnjih i dnevnih izveštaja o upravljanju otpada, godišnjih izveštaja o emisijama u vazduh, vodu i zemljište, godišnjih izveštaja o proizvodima koji postaju posebni tokovi otpada)",
      "Konsultantske usluge u oblasti zaštite životne sredine",
    ],
    text: "Naš tim stručnjaka pruža podršku u identifikaciji obaveza, prikupljanju podataka, izradi dokumentacije i komunikaciji sa nadležnim institucijama. Zaštitimo životnu sredinu zajedno – stručno, odgovorno i savesno.",
    text2:
      "INSTITUT LIRA DOO pruža stručne usluge u oblasti zaštite životne sredine u skladu sa važećim zakonima i propisima Republike Srbije. Naš cilj je da pomognemo pravnim licima da posluju odgovorno, održivo a u skladu sa zakonskom regulativom. U okviru usluga zaštite životne sredine nudimo:",
  },
  {
    id: 3,
    image: "/zastitaodpozara1.jpg",
    title: "Zaštita od požara",
    description: [
      "Izradu Plana zaštite od požara",
      "Izradu Pravilnika zaštite od požara",
      "Izradu Programa obuke za zaposlene iz oblasti zop",
      "Obuka zaposlenih iz zaštite od požara",
      "Izrade planova evakuacije",
      "Sprovođenje vežbe evakuacije",
      "Savetovanje u vezi ispravnosti i investicijama oko unapređenja zaštite od požara",
    ],
    text: "Naš stručni tim osigurava da svi dokumenti budu izrađeni pravovremeno, precizno i u skladu sa važećim propisima, uz punu podršku tokom inspekcijskih nadzora. Bezbednost je na prvom mestu – poverite nam svoju zaštitu od požara.",
    text2:
      "INSTITUT LIRA DOO pruža sveobuhvatne usluge iz oblasti zaštite od požara, usklađene sa zakonodavstvom i pravilnicima Republike Srbije. Naš cilj je da poslodavcima omogućimo bezbedno radno okruženje i efikasnu prevenciju rizika od požara. U okviru ove oblasti obavljamo:",
  },

  {
    id: 4,
    image: "/vanrednesituacije.jpg",
    title: "Vanredne situacije",
    description: [
      "Izrada Procene rizika od katastrofa",
      "Izrada Plana zaštite i spasavanja",
      "Izradu Plana zaštite od udesa",
    ],
    text: "Procena rizika predstavlja ključni dokument kojim se identifikuju potencijalne opasnosti (poput požara, poplava, zemljotresa hemijskih akcidenata i dr.) koje mogu ugroziti ljude, imovinu i životnu sredinu. Na osnovu te procene, izrađuje se Plan zaštite i spasavanja koji definiše konkretne mere i postupke za efikasno reagovanje u vanrednim situacijama. Ovi dokumenti su zakonska obaveza za jedinice lokalne samouprave, subjekte od posebnog značaja za zaštitu i spasavanje, privredna društva, zdravstvene ustanove (izuzev apoteka), predškolske i školske ustanove i fakultete, za sve objekte u kojima borave deca, odnosno objekte u kojima se odvija nastava, ustanove socijalne zaštite za objekte u kojima borave korisnici.",
    text2:
      "U skladu sa zakonskim obavezama i standardima, INSTITUT LIRA DOO pruža usluge planiranja i organizovanja sistema zaštite i spasavanja u slučaju vanrednih situacija. Naše usluge obuhvataju:",
  },
  {
    id: 5,
    image: "/pripremadokumentacije.jpg",
    title: "Priprema dokumentacije iz oblasti radnih odnosa ",
    description: [
      "Izrada Odluka o radnom vremenu",
      "Izrada Odluka o dnevnom, nedeljnom, mesečnom i godišnjem odmoru",
      "Izrada Rešenja o godišnjem odmoru",
      "Pomoć pri izradi / izrada sistematizacije",
      "Izrada Pravilnika o postupku unutrašnjeg uzbunjivanja",
      "Izrada Obaveštenja o mobingu, zabrani pušenja, zlostavljanja na radnom mestu",
    ],
    text: "Naš tim obezbeđuje usklađenost sa važećim zakonodavstvom, zaštitu interesa poslodavca i jasnoću u komunikaciji sa zaposlenima. Uredna dokumentacija – temelj svakog uspešnog kolektiva.",
    text2:
      "INSTITUT LIRA DOO nudi podršku u pripremi kompletne dokumentacije iz oblasti radnih odnosa, u skladu sa Zakonom o radu i drugim relevantnim propisima. Kvalitetna i pravovremena dokumentacija ključna je za zakonito poslovanje i stabilne odnose sa zaposlenima. Usluge obuhvataju:",
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Jelena R.",
    image: "/hero1.jpg",
    description:
      "Treninzi su odlični, atmosfera motivišuća, a instruktori puni znanja i energije! Već nakon nekoliko nedelja osećam ogromnu promenu u kondiciji i snazi. Preporučujem svima!",
  },
  {
    id: 2,
    title: "Ivana S.",
    image: "/hero1.jpg",
    description:
      "Fitnes klub je za mene više od mesta za vežbanje – ovde sam pronašla ekipu koja me inspiriše i podržava! Vežbamo zajedno, bodrimo se i družimo i van treninga. Ne bih ovo menjala ni za šta!",
  },
  {
    id: 3,
    title: "Ana M.",
    image: "/hero2.jpg",
    description:
      "Posle svakog treninga osećam se snažnije i zdravije! Programi su prilagođeni svim nivoima, a podrška trenera me stalno gura ka boljoj verziji sebe.",
  },
  {
    id: 4,
    title: "Katarina N.",
    image: "/hero3.jpg",
    description:
      "Od kada treniram ovde, imam više energije, manje stresa i bolju kondiciju! Ambijent je fantastičan, a treninzi su uvek dinamični i zanimljivi.",
  },
  {
    id: 5,
    title: "Milica P.",
    image: "/hero1.jpg",
    description:
      "Treniram ovde već nekoliko godina i mogu reći da mi je ovo druga porodica! Pored sjajnih treninga, upoznala sam divne ljude koji su mi postali bliski prijatelji. Motivacija i podrška su neverovatni!",
  },
];

export interface Cards1Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards1Data: Cards1Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Naša uloga",
    text: "Institut LIRA pruža stručnu i kontinuiranu podršku poslodavcima u cilju ispunjavanja svih zakonskih obaveza u oblasti bezbednosti i zdravlja na radu.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Uskladjeno sa zakonom",
    text: "Svi dokumenti i usluge se izrađuju u skladu sa Zakonom o bezbednosti i zdravlju na radu („Sl. glasnik RS“, br. 101/2005, 91/2015 i 113/2017).",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Vaši benefiti",
    text: "Uz naše stručno vođenje, smanjujete rizike od povreda na radu, kazni i zastoja u poslovanju.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Podrška klijentima",
    text: "Naš tim pruža i stalno savetovanje, izradu internih akata, kao i edukaciju zaposlenih u skladu sa specifičnostima vašeg radnog procesa.",
  },
];

export interface ServisCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const servisCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Šlep automobila",
    text: "Vršimo šlep svih vrsta automobila, bez obzira na stanje vozila – havarisana, poluvozna ili ispravna.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Šlep motora",
    text: "Šlepamo motore, skutere, četvorotočkaše, motorne sanke i druga vozila brzo i sigurno.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Šlep kombija i kamiona",
    text: "Pružamo uslugu transporta kombija, kamiona i radnih mašina širom Srbije, uz sigurnost i brzinu.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Šlep vozila iz inostranstva",
    text: "Vršimo prevoz automobila iz inostranstva po najpovoljnijim cenama u Srbiji.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pomoc na putu 0-24h",
    text: "Svakom može zatrebati u nekom trenutku, naročito u hitnim slučajevima. Kada je potrebna šlep služba u Čačku i na teritoriji Zlatibora.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Šlep lakog i teškog tereta",
    text: "Za vas prevozimo i laki i teški teret, kako u Čačku, tako i u drugim gradovima Srbije.",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "Šlep havarisanog vozila",
    text: "Ukoliko ste imali havariju na putu, tu smo da pokupimo vaše vozilo i bezbedno ga odšlepamo do servisa.",
  },
  {
    id: 8,
    icon: GiWeight,
    title: "Šlep radnih mašina",
    text: "Šlep radnih mašina do lokacije na kojoj mogu nastaviti s poslom, brzo i sigurno.",
  },
  {
    id: 9,
    icon: GiWeight,
    title: "Izvlačenje sajlom vozila van puta",
    text: "Izvlačenje vozila sa puta sajlom, pažljivo izvedeno kako bi se izbegla dodatna oštećenja vozila.",
  },
  {
    id: 10,
    icon: GiWeight,
    title: "Prevoz poljoprivrednih mašina",
    text: "Prevoz poljoprivrednih mašina, priključaka i opreme – idealno rešenje za one koje je lakše transportovati nego voziti, kao i za neispravne mašine.",
  },
];

export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Licencirani stručnjaci",
    text: "",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Brza i efikasna usluga",
    text: "",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Iskustvo sa preko 200 firmi",
    text: "",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Nacionalna pokrivenost",
    text: "",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Pružamo usluge izrade, montaže i održavanja elektro ormana za domaćinstva, poslovne prostore i industrijska postrojenja. Naš tim vodi računa o kvalitetu instalacija i bezbednosti sistema, uz poštovanje svih standarda i propisa.",
};

export interface Reference {
  title: string;
  img: string;
}

export const reference: Reference[] = [
  {
    title: "Aerodromi Srbije",
    img: "/logo-aerodromi-srbije-lat.png",
  },
  {
    title: "JKP NAISSUS NIŠ",
    img: "/LOGO.svg",
  },
  {
    title: "JKP MEDIANA NIŠ",
    img: "/logo_m.png",
  },
  {
    title: "PARKING SERVIS NIŠ",
    img: "/logolong.png",
  },
  {
    title: "EKO SRBIJA BEOGRAD (na teritoriji cele Srbije)",
    img: "/logo.png",
  },
  {
    title: "ZORAN REISEN JAGODINA",
    img: "/Zoran-Reisen-logo.png",
  },
  {
    title: "OPŠTINA MEDIJANA NIŠ",
    img: "/logo (1).png",
  },
  {
    title: "OPŠTINA BELA PALANKA",
    img: "/logo (2).png",
  },
  {
    title: "OPŠTINA BABUŠNICA",
    img: "/10101010.png",
  },
  {
    title: "Zdravstveni centar KNJAŽEVAC - Dom zrdavlja, bolnica i hitna pomoć",
    img: "/logo100px1.jpg",
  },
  {
    title: "HABAU SRL OGRANAK BEOGRAD",
    img: "/habau_pps_pipeline_systems_logo.jpeg",
  },
  {
    title: "MIKKELSEN ELECTRONICS DOO NIŠ",
    img: "/eb0d45a6-4ce7-4b3f-8977-7ad7a69fa543-extent-thumbnail.jpg",
  },
  {
    title: "SPINTEC PRECISION DOO Niš",
    img: "/Spintec logo white.avif",
  },
  {
    title: "JKP GRDELICA-GRDELICA",
    img: "/grdelica.png",
  },
  {
    title: "POMETON DOO Bor",
    img: "/pometon_spa_logo.jpeg",
  },
  {
    title: "MARKO & CO BEOGRAD 1990",
    img: "/Marco_Co_-_Logo-1.png",
  },

  {
    title: "CENTROPAK DOO ALEKSANDROVO",
    img: "/cropped-logo-1.png",
  },
  {
    title: "LAMBINO PLUS DOO STARA PAZOVA",
    img: "/logo-mali.png.webp",
  },
  {
    title: "CENTAR ZA DNEVNI BORAVAK DECE OMETENE U RAZVOJU MARA NIŠ",
    img: "/Logo-novi-mara-2.png",
  },
  {
    title: "MAKSI CO DONJI ADROVAC",
    img: "/logoOnly.png",
  },
  {
    title: "ZOREX PHFARM ŠABAC",
    img: "/zorexpharma-logo.svg",
  },
  {
    title: "CENTAR ZA SOCIJANI RAD SURDULICA",
    img: "/surdulica-logo.png",
  },
];

export interface Tim {
  name: string;
  title: string;
  image: string;
}

export const tim: Tim[] = [
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
];
