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

// Preguntem si la persona té carnet de conduir (sí o no)
let teCarnet = prompt("Tens carnet de conduir? (si/no)").toLowerCase();

// Comprovem si pot conduir
if (teCarnet === "si") {
  // Demanem el valor de la prova d'alcoholèmia
  let alcohol = parseFloat(
    prompt("Quin és el valor de la prova d'alcoholèmia?")
  );
  if (alcohol < 0.25) {
    console.log("Si, pots conduir.");
  } else {
    console.log("No, no pots conduir.");
  }
} else {
  console.log("No, no pots conduir.");
}

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
