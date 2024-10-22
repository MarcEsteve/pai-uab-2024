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

// // Demanem a l'usuari que introdueixi un nombre N
// let N = parseInt(prompt("Introdueix un nombre N:"));

// // Variable per emmagatzemar la suma
// let suma = 0;

// // Bucle for per sumar tots els nombres entre 1 i N
// for (let i = 1; i <= N; i++) {
//     suma += i; // Afegim el valor de i a la suma
// }

// Mostrem el resultat a la consola
console.log("La suma de tots els nombres entre 1 i " + N + " és: " + suma);

// 16.4.- Escriu un programa que, donat un nombre N, escrigui a la consola el factorial d’aquest nombre.
// let N = parseInt(prompt("Introdueix un número N:"));
// let factorial = 1;

// for (let i = 1; i <= N; i++) {
//     factorial *= i;
// }

// console.log("El factorial de " + N + " és: " + factorial);

// 16.5.- Escriu un programa que, donat dos números N i M (on N sempre serà menor que M), calculi la suma de tots els números entre N i M (ambdós inclosos).

// let N = parseInt(prompt("Introdueix el primer número N:"));
// let M = parseInt(prompt("Introdueix el segon número M:"));
// let suma = 0;

// for (let i = N; i <= M; i++) {
//     suma += i;
// }

// console.log("La suma de tots els números entre " + N + " i " + M + " és: " + suma);

// 16.6.- Escriu un programa que, donat un número N, calculi la suma de tots els números parells entre 2 i N.

// let N = parseInt(prompt("Introdueix un número N:"));
// let suma = 0;

// for (let i = 2; i <= N; i++) {
//     if (i % 2 == 0) {
//         suma += i;
//     }
// }

// console.log("La suma de tots els números parells entre 2 i " + N + " és: " + suma);

// 16.7.- Escriu un programa que, donat un número N, escrigui a la consola la taula de multiplicar de N.
// let N = parseInt(prompt("Introdueix un número N:"));

// for (let i = 1; i <= 10; i++) {
//     console.log(N + " x " + i + " = " + (N * i));
// }

// 16.8.- Escriu un programa que, donat un número N, escrigui a la consola tots els números de N a 1 (en ordre descendent).

// let N = parseInt(prompt("Introdueix un número N:"));

// for (let i = N; i >= 1; i--) {
//     console.log(i);
// }

// 16.9.- Escriu un programa que, donat un número N, escrigui N asteriscos (*).

// let N = parseInt(prompt("Introdueix un número N:"));

// for (let i = 1; i <= N; i++) {
//     console.log("*");
// }

// 16.10.- Escriu un programa que, donat un número N, escrigui el següent dibuix (per exemple, si N és 5):
// *
// **
// ***
// ****
// *****

// let N = parseInt(prompt("Introdueix un número N:"));

// for (let i = 1; i <= N; i++) {
//     let asteriscos = "";
//     for (let j = 1; j <= i; j++) {
//         asteriscos += "*";
//     }
//     console.log(asteriscos);
// }

// 16.11.- Escriu un programa que, donat dos números N i M, creï i sumi una sèrie com la següent:
// Si N = 2 i M = 5, la sortida ha de ser:

// 2
// 22
// 222
// 2222
// 22222
// La suma de la sèrie és: 24690

// let N = parseInt(prompt("Introdueix un número N:"));
// let M = parseInt(prompt("Introdueix un número M:"));
// let suma = 0;

// for (let i = 1; i <= M; i++) {
//     let nombre = "";
//     for (let j = 1; j <= i; j++) {
//         nombre += N;
//     }
//     suma += parseInt(nombre);
//     console.log(nombre);
// }

// console.log("La suma de la sèrie és: " + suma);



// WHILE ------------------------------------------------------
//17.1

// let j = 1,
//   text = "";
// while (j <= 10) {
//   text += "Estem fent bucles while</br>";
//   document.getElementById("identificador1").innerHTML = text;
//   j++;
// }

//17.2

// let i = 5;
// while (i <= 20) {
//     console.log(i);
//     i++;
// }


//17.3

// let N = parseInt(prompt("Introdueix un número N:"));

// while (N >= 1) {
//     console.log(N);
//     N--;
// }


//17.4 Fibonacci

// let N = parseInt(prompt("Introdueix un número N per a la seqüència de Fibonacci:"));
// let a = 1, b = 1, sum = 0;
// let i = 1;

// console.log(a);
// if (N > 1) {
//     console.log(b);
// }

// while (i <= N - 2) {
//     sum = a + b;
//     console.log(sum);
//     a = b;
//     b = sum;
//     i++;
// }


//17.5

// let N = parseInt(prompt("Introdueix un número N:"));
// let M = parseInt(prompt("Introdueix un número M:"));
// let i = 1;

// while (i <= M) {
//     let resultat = N * i;
//     if (resultat > 999999) {
//         break;
//     }
//     console.log(resultat);
//     i++;
// }
