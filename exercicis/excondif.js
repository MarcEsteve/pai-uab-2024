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

let numero = prompt("Escriu qualsevol número");

if (numero % 2 == 0) {
    console.log("El número llegit és parell");
    document.write("El número llegit és parell");
    document.getElementById('resposta1').innerHTML = "El número llegit és parell;
} else {
    console.log("El número llegit és senar");
    document.write("El número llegit és senar");
    document.getElementById('resposta2').innerHTML = "El número llegit és senar";
}
