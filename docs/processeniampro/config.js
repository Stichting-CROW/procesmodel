var respecConfig = {
  // => https://github.com/stichting-crow/respec/wiki
  specStatus: "DRAFT",
  shortName: "procesmodel/processeniampro",
  specType: "Algemeen", // vrije tekst, kleine letter
  imprint: "crow",
  editors: [
    // alleen `name` is verplicht, https://respec.org/docs/#person
    {
      name: "Elisabeth de Vries",
    },
  ],
  github: "https://github.com/Stichting-CROW/procesmodel",
  license: "cc-by",
  lint: { "no-unused-dfns": false },

  // If you need to include a one-off reference that isn't in the SpecRef database or
  // if you need to override an existing reference with specific content, then you can use this configuration option.
  localBiblio: {
    Leidraad_SE_3: {
      title: "Leidraad SE versie 3",
      href: "https://www.leidraadse.nl/assets/files/downloads/LeidraadSE/V3/Leidraad_V3_SE_web.pdf",
      status: "Actueel",
      publisher: "Leidraad SE",
  },
  NEN_EN_ISO_9000_2015: {
    title: "NEN-EN-ISO 9000:2015 Kwaliteitsmanagementsystemen - Grondbeginselen en verklarende woordenlijst",
    href: "https://www.nen.nl/en/nen-en-iso-9000-2015-en-nl-211925",
    status: "Actueel",
    publisher: "NEN",
  },
  ISO_IEC_IEEE_29148_2018: {
    title: "ISO/IEC/IEEE 29148:2018 Systems and software engineering — Life cycle processes — Requirements engineering",
    href: "https://www.iso.org/standard/72089.html",
    status: "Actueel",
    publisher: "ISO",
  },
  ISO_IEC_IEEE_15288_2015: {
    title: "ISO/IEC/IEEE 15288 Systems and software engineering - System life cycle processes",
    href: "https://www.iso.org/standard/63711.html",
    status: "Actueel",
    publisher: "ISO",
  },
  NEN_2660_2_2022: {
    title: "NEN 2660-2 Regels voor informatiemodellering van de gebouwde omgeving - Deel 2: Praktische configuratie, extensie en implementatie van NEN 2660-1",
    href: "https://www.nen.nl/en/nen-2660-2-2022-nl-291667",
    status: "Actueel",
    publisher: "NEN",
  },
  NEN_2660_1_2022: {
    title: "NEN 2660-1 Rules for information modelling of the built environment - Part 1: Conceptual models",
    href: "https://www.nen.nl/en/nen-2660-1-2022-nl-291666",
    status: "Actueel",
    publisher: "NEN",
  },
  NEN_EN_ISO_55000_2014: {
    title: "ISO 55000:2014 Asset management — Overview, principles and terminology",
    href: "https://www.nen.nl/nen-iso-55000-2014-nl-193078",
    status: "Actueel",
    publisher: "NEN",
  },
  NEN_EN_ISO_19650_1_2019: {
    title: "Organisatie en digitalisering van informatie over gebouwen en civieltechnische werken, met inbegrip van building information modelling (BIM) - Informatiemanagement met behulp van bouw informatie modelling - Deel 1: Concepten en beginselen",
    href: "https://www.nen.nl/nen-en-iso-19650-1-2019-nl-275305",
    status: "Actueel",
    publisher: "NEN",
  },
  NEN_EN_ISO_19650_2_2019: {
    title: "Organisatie en digitalisering van informatie over gebouwen en civieltechnische werken, met inbegrip van building information modelling (BIM) - Informatiemanagement met behulp van building information modelling - Deel 2: Leveringsfase van de assets",
    href: "https://www.nen.nl/nen-en-iso-19650-2-2019-nl-275518",
    status: "Actueel",
    publisher: "NEN",
  },
NEN_EN_ISO_19650_3_2020: {
  title: "Organization and digitization of information about buildings and civil engineering works, including building information modelling (BIM) - Information management using building information modelling - Part 3: Operational phase of the assets",
  href: "https://www.nen.nl/nen-en-iso-19650-3-2020-en-275488",
  status: "Actueel",
  publisher: "NEN",
},
NEN_EN_ISO_19650_4_2022: {
  title: "Organization and digitization of information about buildings and civil engineering works, including building information modelling (BIM) - Information management using building information modelling - Part 4: Information exchange",
  href: "https://www.nen.nl/nen-en-iso-19650-4-2022-en-301119",
  status: "Actueel",
  publisher: "NEN",
},
NEN_EN_ISO_19650_5_2020: {
  title: "Organization and digitization of information about buildings and civil engineering works, including building information modelling (BIM) - Information management using building information modelling - Part 5: Security-minded approach to information management",
  href: "https://www.nen.nl/nen-en-iso-19650-5-2020-en-273276",
  status: "Actueel",
  publisher: "NEN",
},
NEN_EN_ISO_31000_2018: {
  title: "Risicomanagement - Richtlijnen",
  href: "https://www.nen.nl/nen-iso-31000-2018-en-244159",
  status: "Actueel",
  publisher: "NEN",
},
Kennisposter_BIM_toepassingen: {
  title: "Kennisposter BIM toepassingen",
  href: "https://www.bimloket.nl//documents/Kennisposter_BIM-toepassingen.pdf",
  status: "Actueel",
  publisher: "DigiGO",
},
Handboek_specificeren: {
  title: "Handboek functioneel specificeren",
  href: "https://www.crow.nl/publicaties/handboek-specificeren",
  status: "Actueel",
  publisher: "CROW",
},


  },
};