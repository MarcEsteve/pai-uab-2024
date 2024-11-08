// 21.1.- Fes un programa que faci el següent: ● Defineix una variable de tipus taula, buida. ● Afegeixi el valor “Hola” a la posició 0. ● Afegeixi el valor “Adeu” a la posició 1. ● Escrigui a la consola el contingut de la taula.

let arai = [];
arai[0] = "Hola";
arai[1] = "Adéu";
console.log(arai);

// 21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log()) per a fer el següent: 
// ● Afegeixi el valor “Nom” a la posició 2 de la taula. 
// ● Escrigui a la consola el contingut de la taula. 
// ● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “ 
// ● Escrigui a la consola el contingut de la taula.

arai[2] = "Nom";
console.log(arai);
arai[1]=", ";
console.log(arai);

// 21.3.- Fes un programa que faci el següent: 
// ● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73]. 
// ● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula. 
// ● Guardi a la posició 6 de la taula la suma dels elements  
// ● Escrigui a la consola el contingut de la taula. Què passa a la posició 5? 

let nombres = [23,45,98,73];
console.log(nombres[0] + nombres[2]);
nombres[6]= nombres[0] + nombres[1] + nombres[2] + nombres[3];
console.log(nombres); //posició 5ena buida

// 21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la taula a la consola. 

// Demana un número a l'usuari
let numero = parseInt(prompt("Introdueix un número:"));

// Crea una taula (array) amb el doble i el triple del número
let dobleTriple = [numero * 2, numero * 3];

// Escriu la taula a la consola
console.log("Taula amb el doble i el triple del número:");
console.log(dobleTriple);


// 21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la multiplicació i la divisió dels dos valors introduïts. 

// Demana dos números a l'usuari
let numero1 = parseFloat(prompt("Introdueix el primer número:"));
let numero2 = parseFloat(prompt("Introdueix el segon número:"));

// Crea una taula amb els resultats de les operacions
let resultats = [
    numero1 + numero2,  // Suma
    numero1 - numero2,  // Resta
    numero1 * numero2,  // Multiplicació
    numero1 / numero2   // Divisió
];

// Escriu la taula a la consola
console.log("Resultats de la suma, resta, multiplicació i divisió:");
console.log(resultats);


// 21.6.- Donada aquesta taula: 
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]; 
// Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició de la taula. 

let taula = [23, 45, 63, 78, 23, 68, 3, 78, 32, 53, 93, 21, 53, 5, 62, 78];

// Accedim al primer element de la taula (índex 0)
let primerValor = taula[0];

// Accedim a l'últim element de la taula
let ultimValor = taula[taula.length - 1];

// Escrivim els resultats a la consola
console.log("Primer valor de la taula:", primerValor);
console.log("Últim valor de la taula:", ultimValor);

// O bé directament
// console.log(taula[0]);
// console.log(taula[taula.length-1]);

// 21.7.- Fes un programa que escrigui a la consola tots els valors emmagatzemats a la taula, un a un.

// Utilitzem un bucle per recórrer tots els elements de la taula
for (let i = 0; i < taula.length; i++) {
    console.log(taula[i]);
}

// 21.8.- Fes un programa que escrigui a la consola la suma tots els valors emmagatzemats a la taula. 

let suma = 0;

// Utilitzem un bucle per recórrer tots els elements de la taula i sumar-los
for (let i = 0; i < taula.length; i++) {
    suma += taula[i];
}

// Escrivim la suma total a la consola
console.log("La suma de tots els valors de la taula és:", suma);

// 21.9.- Fes un programa que crei una segona taula i emmagatzemi a ella tots els valors de la taula, tot sumant-los 25 (així les tres primeres posicions de la nova taula emmagatzemarien [48, 70, 88] Un cop fet haurà d’escriure la nova taula a la consola.

let novaTaula = [];

// Recorrem cada element de la taula original, hi sumem 25 i l'emmagatzemem a la nova taula
for (let i = 0; i < taula.length; i++) {
    novaTaula[i] = taula[i] + 25;
}

// Escrivim la nova taula a la consola
console.log("Nova taula amb 25 sumat a cada element:", novaTaula);

// 21.10.- Fes un programa que calculi la mitjana dels valors emmagatzemats a la taula i l’escrigui a la consola (la mitjana es calcula sumant tots els valors i dividint pel nombre de valors). 

suma = 0;

// Recorrem la taula per calcular la suma de tots els valors
for (let i = 0; i < taula.length; i++) {
    suma += taula[i];
}

// Calculem la mitjana
let mitjana = suma / taula.length;

// Escrivim la mitjana a la consola
console.log("La mitjana dels valors de la taula és:", mitjana);

// 21.11.- Fes un programa que calculi i escrigui a la consola els valors més gran i més petit de la taula. 

// Inicialitzem les variables per al màxim i mínim amb el primer valor de la taula
let max = taula[0];
let min = taula[0];

// Recorrem la taula per trobar el màxim i mínim
for (let i = 1; i < taula.length; i++) {
    if (taula[i] > max) {
        max = taula[i];
    }
    if (taula[i] < min) {
        min = taula[i];
    }
}

// Escrivim els resultats a la consola
console.log("El valor més gran de la taula és:", max);
console.log("El valor més petit de la taula és:", min);

// 21.12.- Fes un programa que crei una nova taula on s’emmagatzemin només els valors parells de la taula i que escrigui el contingut d’aquesta nova taula a la consola. 

let taulaParells = [];

// Recorrem la taula original per trobar els valors parells
for (let i = 0; i < taula.length; i++) {
    if (taula[i] % 2 === 0) { // Comprovem si el valor és parell
        taulaParells.push(taula[i]); // Afegim el valor a la nova taula
    }
}

// Escrivim la nova taula de valors parells a la consola
console.log("Taula de valors parells:", taulaParells);

// 21.13.- Fes un programa que demani a l’usuari un valor (fent servir prompt()) i escrigui a la consola quants cops apareix aquest valor a la taula. 

// Demana a l'usuari un valor per buscar a la taula
let valor = parseInt(prompt("Introdueix un valor per buscar a la taula:"));
let contador = 0;

// Recorrem la taula per comptar quantes vegades apareix el valor
for (let i = 0; i < taula.length; i++) {
    if (taula[i] === valor) {
        contador++;
    }
}

// Mostra el resultat a la consola
console.log(`El valor ${valor} apareix ${contador} cop(s) a la taula.`);

// 21.14.- Fes un programa que, donats dos arrays de números, comprovi si tots dos tenen el mateix número d’elements i, si és així, crei una nova taula que contingui la suma de cada element que es trobi a la mateixa posició als dos arrys. Exemple: [1,2,3] + [2,3,4] → [3,5,7] 

let arrayNumeros1 = [1, 2, 3];
let arrayNumeros2 = [2, 3, 4];
let arraySuma = [];

// Comprova si els dos arrays tenen el mateix nombre d'elements
if (arrayNumeros1.length === arrayNumeros2.length) {
    // Recorre els elements dels arrays i suma els elements de la mateixa posició
    for (let i = 0; i < arrayNumeros1.length; i++) {
        arraySuma.push(arrayNumeros1[i] + arrayNumeros2[i]);
    }

    // Escriu la nova taula a la consola
    console.log("La taula resultant amb les sumes és:", arraySuma);
} else {
    console.log("Els arrays no tenen el mateix nombre d'elements.");
}

// 21.15.- Fes un programa que, donats una taula amb números, guardi a una nova taula els valors de la primera però donant-li la volta.  Exemple: [1,2,3,4,5] → [5,4,3,2,1]

let taulaOriginal = [1, 2, 3, 4, 5];
let taulaInversa = [];

// Recorrem la taula original des de l'últim element fins al primer
for (let i = 0; i < taulaOriginal.length; i++) {
    taulaInversa[i] = taulaOriginal[taulaOriginal.length - 1 - i];
}

// Escrivim la nova taula invertida a la consola
console.log("Taula original:", taulaOriginal);
console.log("Taula inversa:", taulaInversa);


// 21.16.- Fes un programa que demani un número a l’usuari (fent servir prompt()) i escrigui a la consola si es troba o no a la taula. IMPORTANT: Fes-lo fent servir un while de manera que si es troba l’element, s’acabi el bucle. 

// Demana a l'usuari un número per buscar a la taula
let valorBuscat = parseInt(prompt("Introdueix un número per comprovar si es troba a la taula:"));
let trobat = false; // Variable per indicar si hem trobat el valor
let i = 0;

// Bucle while per buscar el valor a la taula
while (i < taula.length && !trobat) {
    if (taula[i] === valorBuscat) {
        trobat = true; // Indica que hem trobat el valor
    }
    i++;
}

// Mostra el resultat a la consola
if (trobat) {
    console.log(`El valor ${valorBuscat} es troba a la taula.`);
} else {
    console.log(`El valor ${valorBuscat} no es troba a la taula.`);
}

// 21.17.- Fes un programa que demani un número a l’usuari (fent servir prompt()) i escrigui a la consola si hi ha algun valor més gran a la taula. IMPORTANT: Fes-lo fent servir un while de manera que si es troba que hi ha un element més gran, s’acabi el bucle. 

// Demana un número a l'usuari
let valorBuscat17 = parseInt(prompt("Introdueix un número per veure si hi ha algun valor més gran a la taula:"));
let hiHaMesGran = false; // Variable per indicar si s'ha trobat un valor més gran
i = 0; //Ja existeix al codi, sino faríem "let"

// Bucle while per cercar un valor més gran a la taula
while (i < taula.length && !hiHaMesGran) {
    if (taula[i] > valorBuscat17) {
        hiHaMesGran = true; // Indica que hem trobat un valor més gran
    }
    i++;
}

// Mostra el resultat a la consola
if (hiHaMesGran) {
    console.log(`Hi ha un valor més gran que ${valorBuscat17} a la taula.`);
} else {
    console.log(`No hi ha cap valor més gran que ${valorBuscat17} a la taula.`);
}

// 21.18.- Fes un programa que escrigui “Sí” si el primer número de la taula està repetit i “No” en cas contrari. 

primerValor = taula[0];
let repetit = false; // Variable per indicar si el primer valor està repetit
i = 1; // Comencem a la posició 1 per evitar comparar el primer element amb ell mateix

// Bucle while per buscar si el primer valor està repetit
while (i < taula.length && !repetit) {
    if (taula[i] === primerValor) {
        repetit = true; // Indica que hem trobat el primer valor repetit
    }
    i++;
}

// Mostra el resultat a la consola
if (repetit) {
    console.log("Sí");
} else {
    console.log("No");
}

// 21.19.- Fes un programa que donades dues taules de la mateixa mida, crei una nova taula amb la unió de les dues taules de manera alterna. Per exemple: [1,2,3] unió [4,5,6] → [1,4,2,5,3,6] 

let taula1 = [1, 2, 3];
let taula2 = [4, 5, 6];
let taulaUnio = [];

// Recorrem les dues taules i afegim els elements de forma alterna a la nova taula
for (let i = 0; i < taula1.length; i++) {
    taulaUnio[2 * i] = taula1[i];       // Afegim l'element de taula1 en posició parella
    taulaUnio[2 * i + 1] = taula2[i];   // Afegim l'element de taula2 en posició senar
}

// Escrivim la taula de la unió a la consola
console.log("Taula unió alterna:", taulaUnio);


// 21.20.- Fes un programa que, donada una taula i un valor, crei una nova taula sense el valor proporcionat. 

let valorAEliminar = parseInt(prompt("Introdueix un valor per eliminar de la taula:"));
novaTaula = [];
let j = 0; // Índex per a la nova taula

// Recorrem la taula original i copiem els elements diferents al valor proporcionat
for (let i = 0; i < taula.length; i++) {
    if (taula[i] !== valorAEliminar) {
        novaTaula[j] = taula[i];
        j++;
    }
}

// Escrivim la nova taula a la consola
console.log("Taula sense el valor proporcionat:", novaTaula);

// 21.21.- Fes un programa que, donada una taula i una posició, guardi a una altra taula la taula inicial, però des de la posició donada fins al final. Per exemple [1,2,3,5,6,7,8,9,0] i 4 → [6,7,8,9,0] 

let taula21 = [1, 2, 3, 5, 6, 7, 8, 9, 0];
let posicioInicial = parseInt(prompt("Introdueix una posició inicial (índex) per copiar a la nova taula21:"));
let novaTaula21 = [];

// Comprovem que la posició inicial sigui vàlida
if (posicioInicial >= 0 && posicioInicial < taula21.length) {
    // Recorrem la taula21 original des de la posició donada fins al final
    for (let i = posicioInicial; i < taula21.length; i++) {
        novaTaula21[i - posicioInicial] = taula21[i];
    }
    // Mostrem la nova taula21 a la consola
    console.log("Nova taula21 des de la posició donada fins al final:", novaTaula21);
} else {
    console.log("La posició introduïda no és vàlida.");
}


// 21.22.- Fes un programa que, donada una taula escrigui a la pantalla el primer número que estigui repetit. 

trobat = false; // Variable per indicar si s'ha trobat un número repetit
let primerRepetit;

// Bucle per trobar el primer número repetit
for (let i = 0; i < taula.length; i++) {
    for (let j = i + 1; j < taula.length; j++) {
        if (taula[i] === taula[j]) {
            primerRepetit = taula[i];
            trobat = true;
            break;
        }
    }
    if (trobat) break;
}

// Mostrem el resultat a la consola
if (trobat) {
    console.log("El primer número repetit és:", primerRepetit);
} else {
    console.log("No hi ha cap número repetit a la taula.");
}