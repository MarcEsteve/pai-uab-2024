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
console.log(nombres); //posició buida

// 21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la taula a la consola. 

