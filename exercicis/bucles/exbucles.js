// FOR
// 16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.

// for (let i = 1; i <= 10; i++) {
//   console.log("Estem fent bucles (for al console)");
// }

// 16.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els nombres del 5 al 20.

for (let i = 5; i <= 20; i++) {
    console.log(i);
}

// 16.3.- Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els nombres entre 1 i N. 

// Demanem a l'usuari que introdueixi un nombre N
let N = parseInt(prompt("Introdueix un nombre N:"));

// Variable per emmagatzemar la suma
let suma = 0;

// Bucle for per sumar tots els nombres entre 1 i N
for (let i = 1; i <= N; i++) {
    suma += i; // Afegim el valor de i a la suma
}

// Mostrem el resultat a la consola
console.log("La suma de tots els nombres entre 1 i " + N + " és: " + suma);


// WHILE ------------------------------------------------------
//17.1
// let j = 1,
//   text = "";
// while (j <= 10) {
//   text += "Estem fent bucles while</br>";
//   document.getElementById("identificador1").innerHTML = text;
//   j++;
// }
