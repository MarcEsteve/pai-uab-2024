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

// FOR
// 16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.

for (let i = 1; i <= 10; i++) {
  console.log("Estem fent bucles");
}

// WHILE
//17.1
let j = 1,
  text = "";
while (j <= 10) {
  text += "Estem fent bucles</br>";
  document.getElementById("resposta1").innerHTML = text;
  j++;
}
