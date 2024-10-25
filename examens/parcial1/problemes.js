// 1.- (2 punts) Escriu un programa en JavaScript que, donat un número llegit amb prompt, escrigui per la consola el missatge "El número és positiu" si el número és més gran que zero, "El número és negatiu" si és més petit que zero, o "El número és zero" si és igual a zero. Utilitza if-else.

let numero1 = parseFloat(prompt("Introdueix un número:"));

if (numero1 > 0) {
  console.log("El número és positiu");
} else if (numero1 < 0) {
  console.log("El número és negatiu");
} else {
  console.log("El número és zero");
}


// 2.- (2 punts) Escriu un programa que, donat un número entre 1 i 7, escrigui a la consola el dia de la setmana corresponent (1 = dilluns, 2 = dimarts, etc.). El programa he de controlar que el número estigui entre 1 i 7

// OPCIÓ 1 amb if senzill

let numero2 = parseInt(prompt("Introdueix un número entre 1 i 7:"));

if (numero2 >= 1 && numero2 <= 7) {
  if (numero2 === 1) {
    console.log("Dilluns");
  } else if (numero2 === 2) {
    console.log("Dimarts");
  } else if (numero2 === 3) {
    console.log("Dimecres");
  } else if (numero2 === 4) {
    console.log("Dijous");
  } else if (numero2 === 5) {
    console.log("Divendres");
  } else if (numero2 === 6) {
    console.log("Dissabte");
  } else if (numero2 === 7) {
    console.log("Diumenge");
  }
} else {
  console.log("Error: el número introduït ha d'estar entre 1 i 7.");
}

// OPCIÓ 2 amb if + bucle while previ

let numero21 = parseInt(prompt("Introdueix un número entre 1 i 7:"));

//Bucle per sol·lucionar la segona part on diu que controlem l'entrada entre 1 i 7
while (numero21 < 1 || numero21 > 7) {
  numero21 = parseInt(prompt("Error! Introdueix un número entre 1 i 7:"));
}

if (numero21 === 1) {
  console.log("Dilluns");
} else if (numero21 === 2) {
  console.log("Dimarts");
} else if (numero21 === 3) {
  console.log("Dimecres");
} else if (numero21 === 4) {
  console.log("Dijous");
} else if (numero21 === 5) {
  console.log("Divendres");
} else if (numero21 === 6) {
  console.log("Dissabte");
} else if (numero21 === 7) {
  console.log("Diumenge");
}

// OPCIÓ 3 amb switch + bucle for previ

let numero22;

for (;;) {
  // Bucle infinit
  numero22 = parseInt(prompt("Introdueix un número entre 1 i 7:"));
  if (numero22 >= 1 && numero22 <= 7) {
    break; // Sortim del bucle si el número és vàlid
  } else {
    console.log("Error! Introdueix un número entre 1 i 7:");
  }
}

switch (numero22) {
  case 1:
    console.log("Dilluns");
    break;
  case 2:
    console.log("Dimarts");
    break;
  case 3:
    console.log("Dimecres");
    break;
  case 4:
    console.log("Dijous");
    break;
  case 5:
    console.log("Divendres");
    break;
  case 6:
    console.log("Dissabte");
    break;
  case 7:
    console.log("Diumenge");
    break;
}

// 3.- (2 punts) Escriu un programa en JavaScript que demani a l'usuari un número N i mostri a la consola tots els números de l'1 fins a N. Pots fer-ho utilitzant tant un bucle for com un bucle while.

// Opció amb FOR

let nFor = parseInt(prompt("Introdueix un número N:"));

for (let i = 1; i <= nFor; i++) {
  console.log(i);
}

// Opció amb WHILE

let nWhile = parseInt(prompt("Introdueix un número N:"));
let i = 1;

while (i <= nWhile) {
  console.log(i);
  i++;
}
