let arr1 = new Array(23, 445, 43, 77, 23);
let arr2 = Array("zero", "u", "dos");
let arr3 = [true, false, false, true, true];

// ARRAYS
console.log(arr1[1]);
console.log(arr2[2]);
console.log(arr3[2]);

let persona1 = [38, "Marc", "Docent"];

console.log("Sóc en " + persona1[1] + " i sóc " + persona1[2] + " i tinc " + persona1[0] + " anys");

persona1[0]=39; // Valors de persona 1 [39, "Marc", "Docent"]

// let alumnes = ["Maria", "Joan", "Anna", "Pere"];

// for (let i = 0; i < alumnes.length; i++) {
//     console.log(alumnes[i]);
// }

let alumnes = ["Maria", "Joan", "Anna", "Pere"];
let nomBuscat = "Anna";
let index = alumnes.indexOf(nomBuscat);
let posicio = 0;

while (index === -1 && posicio < alumnes.length) {
    if (alumnes[posicio] === nomBuscat) {
        index = posicio;
    }
    posicio++;
}

if (index !== -1) {
    console.log(`L'alumne ${nomBuscat} es troba a la posició ${index} de l'array.`);
} else {
    console.log(`L'alumne ${nomBuscat} no s'ha trobat a l'array.`);
}


let taula = [[10,2,7],[15,34,99]];
let taula2 = [[33,23,56,23],[23,45,23,55],[45,25,67,88]];
console.log(taula[1][2]);
console.log(taula2[0][3]);

let temperatura = [25, 24, 20, 23, 22, 25, 27, 26, 23, 27];

let tMaxima = temperatura[0];
let suma = 0;

for (let i = 0; i < temperatura.length; i++) {
  suma += temperatura[i];
  if (tMaxima < temperatura[i]) {
    tMaxima = temperatura[i];
  }
}

console.log("Temperatura màxima: ", tMaxima);
console.log("Temperatura mitjana: ", suma / temperatura.length);

// TROBAR NOMBRES PRIMERS
const LIMITE = 100;  // Valor límite para calcular los primos
let primos = [];  // Array donde guardaremos los primos que generemos
let nPrimos = 0;  // Variable donde guardaremos el número de primos encontrados

for (let i = 2; i <= LIMITE; i++){
  if (esPrimo(i)) {       // La función esPrimo nos dirá si el número actual es o no primo
    primos[nPrimos] = i;  // Guardamos en la tabla, en la posición indicada por nPrimos el nuevo primo encontrado
    nPrimos++;            // Incrementamos el contador de números primos encontrados. 
                          // También podríamos haber escrito primos[nPrimos++] = i; y substituir dos instrucciones por una sola
                          // Tal y como está ahora és algo más claro. Pero entendiendo bien el lenguaje las dos son sencillas
                          // de comprender.
  }
}

console.log(primos);  // Escribimos en la consola la tabla con los números primos encontrados

/* Función que nos dice si un número es primo.
   Para hacerlo, buscamos el resto de dividir es número por los más pequeños que él. Si el resto es 0, quiere decir que el número se puede
   dividir por otro más pequeño que él y, por tanto, no es primo.
   Solo hacemos la prueba hasta llegar a numero/2.
   No es importante entender porqué se busca así si un número es o no primo. Pero sí vale la pena entender las operaciones que se hacen
   dentro de la función.
*/

function esPrimo(numero) { 
  let loEs = true;          
  let divisor = 2;
  while (loEs && divisor < numero/2 ) {
    if (numero % divisor == 0) {
      loEs = false;
    }
    divisor++;
  }
  return (loEs);
}