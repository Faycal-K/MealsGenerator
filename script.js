function generateNum(array) {
  //generate a number not higher than the array length
  return Math.floor(Math.random() * array.length);
}

function generateBreakfast() {
  let component1 = ["Halfvolle kwark", "Magere kwark", "Skyr"];
  let component2 = [
    "40 gram gepofte spelt",
    "40 gram muesli",
    "40 gram granola",
  ];
  let component3 = [
    "één appel",
    "20 gram rozijnen",
    "één medium banaan",
    "100 gram blauwe bessen",
    "aarbeien",
  ];
  let component4 = ["theelepel honing"]; //Always eat a teaspoon of honey in the morning

  return `${component1[generateNum(component1)]}, ${
    component2[generateNum(component2)]
  }, ${component3[generateNum(component3)]} en één ${
    component4[generateNum(component4)]
  }`;
}

function generateLunch() {
  let component1 = ["Vier volkoren sneetjes brood"];
  let component2 = [
    "40 gram sambal smeerkaas",
    "40 gram sambal",
    "40 gram ricotta",
    "50 gram cottage",
  ];
  let component3 = ["magere kaas", "salami/worst", "jonge kaas"];

  return `${component1[generateNum(component1)]}, ${
    component2[generateNum(component2)]
  } en ${component3[generateNum(component3)]}`;
}

function generateSnack() {
  let component1 = [
    "Twee eieren met twee mais/rijstwafels",
    "150 gram Griekse yoghurt met 20 gram ongebrande noten",
  ];
  return `${component1[generateNum(component1)]}`;
}

function generateDinner() {
  return `Eet wat er op tafel ligt`;
}

function generateMeals() {
  //Combine all functions to generate meals for the day
  return `We hebben maaltijden gegenereerd voor je:
  - Ontbijt: ${generateBreakfast()};
  - Lunch: ${generateLunch()};
  - Tussendoortje: ${generateSnack()};
  - Avondeten: ${generateDinner()}.`;
}

console.log(generateMeals());
