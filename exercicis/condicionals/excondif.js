// 13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge "el número llegit és negatiu" si el número és més petit que zero.
/*
dskfdsf
sdgfdsf
*/

// let numeroNegatiu = parseInt(prompt("Introdueix un número negatiu:"));

// if (numeroNegatiu<0) {
//     document.write("El número llegit és negatiu");
//     console.log("El número llegit és negatiu");

// }
// document.getElementById('resposta1').innerHTML = "Això és un altre output primer";
// document.getElementById('resposta2').innerHTML = "Això és un altre output sota el subtitular";

// 14.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el número es parell i “el número llegit es senar” en cas contrari.

// let numero = prompt("Escriu qualsevol número");

// if (numero % 2 == 0) {
//     console.log("El número llegit és parell");
//     document.write("El número llegit és parell");
//     document.getElementById('resposta1').innerHTML = "El número llegit és parell";
// } else {
//     console.log("El número llegit és senar");
//     document.write("El número llegit és senar");
//     document.getElementById('resposta2').innerHTML = "El número llegit és senar";
// }

// 14.3.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola quin és el més gran. Només pots fer servir una instrucció if-else.

// let num1 = parseInt(prompt("Escriu el primer número"));
// let num2 = parseInt(prompt("Escriu el segon número"));

// if (num1 < num2) {
//   console.log("El número més gran es el segon: " + num2);
// } else {
//   console.log("El número més gran es el primer: " + num1);
// }

// 14.4.- Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola quin es el més gran. Pista. Comprova si el primer número llegit és el més gran. Si no és així, comprova si el més gran és el segon. Si tampoc ho és, el més gran, sens dubte, serà el tercer.

// // Llegim tres números amb prompt
// let num1 = parseFloat(prompt("Introdueix el primer número:"));
// let num2 = parseFloat(prompt("Introdueix el segon número:"));
// let num3 = parseFloat(prompt("Introdueix el tercer número:"));

// // Comprova quin és el més gran
// if (num1 >= num2 && num1 >= num3) {
//     console.log("El número més gran és: " + num1);
// } else if (num2 >= num1 && num2 >= num3) {
//     console.log("El número més gran és: " + num2);
// } else {
//     console.log("El número més gran és: " + num3);
// }

// 14.5.- Escriu un programa que, donats tres números llegits amb prompt, escrigui a la consola els tres números ordenats.

// // Llegim tres números amb prompt
// let num1 = parseFloat(prompt("Introdueix el primer número:"));
// let num2 = parseFloat(prompt("Introdueix el segon número:"));
// let num3 = parseFloat(prompt("Introdueix el tercer número:"));

// // Comprovem i ordenem els números
// if (num1 <= num2 && num1 <= num3) {
//     if (num2 <= num3) {
//         console.log(num1 + ", " + num2 + ", " + num3);
//     } else {
//         console.log(num1 + ", " + num3 + ", " + num2);
//     }
// } else if (num2 <= num1 && num2 <= num3) {
//     if (num1 <= num3) {
//         console.log(num2 + ", " + num1 + ", " + num3);
//     } else {
//         console.log(num2 + ", " + num3 + ", " + num1);
//     }
// } else {
//     if (num1 <= num2) {
//         console.log(num3 + ", " + num1 + ", " + num2);
//     } else {
//         console.log(num3 + ", " + num2 + ", " + num1);
//     }
// }

// 14.6.- En un control d’alcoholèmia necessiten un programa que els hi digui si una persona pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25

// // Preguntem si la persona té carnet de conduir (sí o no)
// let teCarnet = prompt("Tens carnet de conduir? (si/no)").toLowerCase();

// // Comprovem si pot conduir
// if (teCarnet === "si") {
//   // Demanem el valor de la prova d'alcoholèmia
//   let alcohol = parseFloat(
//     prompt("Quin és el valor de la prova d'alcoholèmia?")
//   );
//   if (alcohol < 0.25) {
//     console.log("Si, pots conduir.");
//   } else {
//     console.log("No, no pots conduir.");
//   }
// } else {
//   console.log("No, no pots conduir.");
// }

// 13.7.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el resultat de restar al nombre més gran el nombre més petit.

// // Llegim dos números amb prompt
// let num1 = parseFloat(prompt("Introdueix el primer número:"));
// let num2 = parseFloat(prompt("Introdueix el segon número:"));

// // Comprovem quin és el més gran i fem la resta
// if (num1 > num2) {
//     console.log("El resultat de restar el nombre més petit del més gran és: " + (num1 - num2));
// } else if (num2 > num1) {
//     console.log("El resultat de restar el nombre més petit del més gran és: " + (num2 - num1));
// } else {
//     console.log("Els dos nombres són iguals, la resta és 0.");
// }

// 14.8.- Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una quantitat (el que cal pagar) per teclat fent servir la instrucció prompt. En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que el cost total és de 30€ donat que el transport és gratis. En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que consistirà en l’introduït més 4.95€ en concepte de cost d’enviament.

// // Demanem a l'usuari la quantitat a pagar
// let quantitat = parseFloat(prompt("Introdueix l'import de la teva compra:"));

// // Condicionals per calcular el cost total amb o sense enviament
// if (quantitat >= 30) {
//   console.log("El cost total és de " + quantitat +" donat que el transport és gratuït.");
// } else {
//   let costEnviament = 4.95;
//   let total = quantitat + costEnviament;
//   console.log(
//     "El cost total és de " +
//       total.toFixed(2) +
//       "€ (amb " +
//       costEnviament +
//       "€ d'enviament)."
//   );
// }

// 14.9

// // Demanem a l'usuari si vol un conus o una terrina
// let tipusGelat = prompt("Vols un conus (c) o una terrina (t)?").toLowerCase();

// // Demanem a l'usuari quin sabor vol
// let saborGelat = prompt(
//   "Tria un sabor: Vainilla, Xocolata, Turró, Menta, Oreo, Crema, Gerds, Ametlles"
// ).toLowerCase();

// // Variables per al cost del gelat
// let costBase = 0;
// let costFinal = 0;
// let error = false;

// // Comprovem el tipus de gelat i assignem el cost base
// if (tipusGelat === "c") {
//   costBase = 3.45;
// } else if (tipusGelat === "t") {
//   costBase = 3.95;
// } else {
//   error = true;
// }

// // Comprovem el sabor i afegim el suplement si cal
// if (saborGelat === "vainilla" || saborGelat === "xocolata") {
//   costFinal = costBase; // Sense afegir cost extra
// } else if (
//   saborGelat === "turró" ||
//   saborGelat === "menta" ||
//   saborGelat === "oreo"
// ) {
//   costFinal = costBase + 0.5; // Afegim 0.5€
// } else if (
//   saborGelat === "crema" ||
//   saborGelat === "gerds" ||
//   saborGelat === "ametlles"
// ) {
//   costFinal = costBase + 1; // Afegim 1€
// } else {
//   error = true;
// }

// // Si totes les dades són correctes, es mostra el preu final
// if (!error) {
//   console.log("El preu final del teu gelat és: " + costFinal.toFixed(2) + "€");
// } else {
//   console.log("Error dades mal introduïdes");
// }

// SWITCH

// 15.1.- Fent servir la instrucció switch escriu un programa que donat amb prompt un número de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon.
// let mes = parseInt(prompt("Escriu un mes de l'any del 1 (Gener) fins al 12 (Desembre):"));

// switch (mes) {
//   case 1:
//     console.log("Gener");
//     break;
//   case 2:
//     console.log("Febrer");
//     break;
//   case 3:
//     console.log("Març");
//     break;
//   case 4:
//     console.log("Abril");
//     break;
//   case 5:
//     console.log("Maig");
//     break;
//   case 6:
//     console.log("Juny");
//     break;
//   case 7:
//     console.log("Juliol");
//     break;
//   case 8:
//     console.log("Agost");
//     break;
//   case 9:
//     console.log("Setembre");
//     break;
//   case 10:
//     console.log("Octubre");
//     break;
//   case 11:
//     console.log("Novembre");
//     break;
//   case 12:
//     console.log("Desembre");
//     break;
//   default:
//     console.log("Mes no vàlid");
//     break;
// }

// 15.2
// Demanem a l'usuari si vol un conus o una terrina
let tipusGelat = prompt("Vols un conus (c) o una terrina (t)?").toLowerCase();

// Demanem a l'usuari quin sabor vol
let saborGelat = prompt(
  "Tria un sabor: Vainilla, Xocolata, Turró, Menta, Oreo, Crema, Gerds, Ametlles"
).toLowerCase();

// Variables per al cost del gelat
let costBase = 0;
let increment = 0;
let costFinal = 0;

// Comprovem el tipus de gelat i assignem el cost base
if (tipusGelat === "c") {
  costBase = 3.45;
} else if (tipusGelat === "t") {
  costBase = 3.95;
} else {
  console.log("Error dades mal introduïdes del tipus de gelat");
}

// Utilitzem switch per calcular l'increment segons el sabor
switch (saborGelat) {
  case "vainilla":
  case "xocolata":
    increment = 0; // Sense increment
    break;
  case ("turró", "menta", "oreo"):
    increment = 0.5; // Increment de 0.5€
    break;
  case "crema":
  case "gerds":
  case "ametlles":
    increment = 1; // Increment de 1€
    break;
  default:
    console.log("Error dades mal introduïdes de sabor");
    break;
}

// Calculem el preu final si les dades són correctes
if (costBase > 0 && increment >= 0) {
  costFinal = costBase + increment;
  console.log("El preu final del teu gelat és: " + costFinal.toFixed(2) + "€");
}
