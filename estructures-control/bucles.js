// WHILE

let estalvi = 0; // Comencem amb 0 euros estalviats
let mes = 1; // Comencem al mes 1
let aportacioMensual = 125; // Aportació fixa cada mes

while (estalvi < 1000) {
  // El bucle s'executa fins que l'objectiu de 1000 euros sigui assolit
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

// FOR

let text = "";
// let i;
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "El número és " + i + "<br>";
}
document.write(text); //al final, es mostra per pantalla fins el número 2...

// FOR amb titulars

for (let i = 1; i <= 6; i++) {
  document.write("<h" + i + ">Aquest és un títol h" + i + "</h" + i + ">");
}
