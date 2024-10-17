// IFELSE

let data = new Date(); // Obtenim la data i hora actuals
// let hora = data.getHours(); // Obtenim només l'hora actual
let hora = 10;
let text;

console.log(data);
// Des de les 20 és bona nit fins les 5
// Des de les 6 fins a les 13 es bon dia
// Des de les 14 fins les 17 es bona tarda

if (hora >= 20 || hora <= 5) {
  text = "Bona nit!";
  console.log(text);
} else if (hora >= 6 || hora <= 13) {
  text = "Bona dia!";
  console.log(text);
} else {
  text = "Bona tarda!";
  console.log(text);
}

// SWITCH

let semafor = "verd";
switch (semafor) {
  case "verd":
    text = "Pots passar";
    break;
  case "taronja":
    text = "Precaució";
    break;
  case "vermell":
    text = "T'has d'aturar!";
    break;
  default:
    text = "Semàfor apagat";
}
console.log(text); //mostra per consola... "Pots passar"

let dataS = new Date(); // Obtenim la data actual
let dia = dataS.getDay(); // Obtenim el dia de la setmana (0 = Diumenge, 6 = Dissabte)
let textS;

switch (dia) {
  case 0:
    textS = "Diumenge";
    break;
  case 1:
    textS = "Dilluns";
    break;
  case 2:
    textS = "Dimarts";
    break;
  case 3:
    textS = "Dimecres";
    break;
  case 4:
    textS = "Dijous";
    break;
  case 5:
    textS = "Divendres";
    break;
  case 6:
    textS = "Dissabte";
    break;
  default:
    textS = "Dia no vàlid";
}

console.log(textS);