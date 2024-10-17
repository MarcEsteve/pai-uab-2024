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

// WHILE

let estalvi = 0; // Comencem amb 0 euros estalviats
let mes = 1; // Comencem al mes 1
let aportacioMensual = 125; // Aportació fixa cada mes

while (estalvi < 1000) { // El bucle s'executa fins que l'objectiu de 1000 euros sigui assolit
  estalvi += aportacioMensual; // Afegim l'aportació mensual al total d'estalvi
  console.log("Mes " + mes + ": Estalviat = " + estalvi + " euros");
  mes++; // Incrementem el mes
}

console.log("Objectiu assolit en " + (mes - 1) + " mesos.");

// DO WHILE

let contrasenyaCorrecta = "1234";
let entradaUsuari;
let intents = 0;

do {
  entradaUsuari = prompt("Introdueix la contrasenya:"); // Simula una entrada de contrasenya
  intents++; // Incrementa el número d'intents
} while (entradaUsuari !== contrasenyaCorrecta && intents < 3);

if (entradaUsuari === contrasenyaCorrecta) {
  console.log("Contrasenya correcta. Benvingut!");
} else {
  console.log("Has superat el nombre d'intents permesos.");
}
