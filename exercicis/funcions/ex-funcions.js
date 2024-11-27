// Exercici 3.1
// Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat una cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció.

function parellSenar(nombre) {
  let text = "";
  if (nombre % 2 === 0) {
    text = "El nombre és parell";
  } else {
    text = "El nombre és senar";
  }
  return text;
}

// "nombre" és un parámetre per REBRE el valor de l'argument

let numeroEnter = parseInt(prompt("Introdueix un nombre enter, si us plau"));
console.log(parellSenar(numeroEnter));

// "numeroEnter" és un argument per ENVIAR el valor a la funció a través del paràmetre

// Exercici 3.2
// Escriu un script que comprovi si un any donat és de traspàs. Un any és de traspàs si és múltiple de 4, excloent els que siguin múltiples de 100, però no els que siguin múltiples de 400. Per exemple, l'any 1900 no va ser de traspàs, el 2000 sí i el 2100 no ho és.

function esAnyDeTraspas(any) {
  if ((any % 4 === 0 && any % 100 !== 0) || any % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
// "any" és el paràmentre dins del bloc de la funció per REBRE valors

// Exemple d'ús
// "numeroAny" és un argument per DONAR el valor a la funció
// let numeroAny = parseInt(
//   prompt("Introdueix un any per comprovar si és de traspàs:")
// );

// let anyTraspas = esAnyDeTraspas(numeroAny); 

// if (esAnyDeTraspas(numeroAny)) {
//   console.log(`${numeroAny} és un any de traspàs.`);
// } else {
//   console.log(`${numeroAny} no és un any de traspàs.`);
// }

// Exercici 3.3
// Feu un script que inclogui una funció que, donat un enter N, retorni ∑ (1 / n2 ) per a 0 < n ≤ N.

function sumaSerie(N) {
    let suma = 0;

    for (let n = 1; n <= N; n++) {
        suma += 1 / (n * n);
    }

    return suma;
}

// Exemple d'ús
// let N = parseInt(prompt("Introdueix un nombre enter positiu N:"));
// if (N > 0) {
//     console.log(`La suma de la sèrie per N = ${N} és: ${sumaSerie(N)}`);
// } else {
//     console.log("Introdueix un valor positiu per N.");
// }


// Exercici 3.4
// Feu una funció que calculi la nota final d'un alumne. L'script ha de rebre per teclat el següent:  Nota final d’avaluació continuada, Nota de pràctiques i Nota d’examen, i es mostrarà per pantalla la nota final en base a les formules donades.

// El càlcul de la nota final serà diferent depenent de si l’estudiant ha seguit o no l’avaluació continuada, i de la nota d’aquesta:

// Si la nota d’avaluació continuada és més gran o igual que 5, la nota final la calcularem com: 

// NOTA_FINAL = 0,2 * NOTA_AC + 0,4 * NOTA_PRACT + 0,4 * NOTA_EXAMEN 

// Si la nota d’avaluació continuada és menor que 5, la nota final la calcularem com: 

// >NOTA_FINAL = 0,4 * NOTA_PRACT + 0,6 * NOTA_EXAMEN 

// On NOTA_FINAL és la nota final de l’assignatura que hem de calcular, NOTA_AC és la nota d’avaluació continuada, NOTA_PRACT és la nota de pràctiques, i NOTA_EXAMEN és la nota de l’examen. 

// La funció ha de retornar una cadena que contingui el valor numèric de la nota final obtinguda per l’alumne, seguit de la nota però en format lletra, fent servir la següent taula de conversió: 


// Si la nota final és menor que 5 tindrà una D. 
// Si la nota final és major o igual que 5 i menor que 6,5 tindrà una C.
// Si la nota final és major o igual que 6,5 i menor que 8 tindrà una B. 
// Si la nota final és major o igual que 8 i menor que 10 tindrà una A.
// >I si la nota final és un 10 tindrà una H. 
// Important: Totes tres notes seran valors numèrics, i podem suposar que sempre tindrem els tres valors i seran més grans o iguals que 0. 

function calcularNotaFinal(notaAC, notaPractiques, notaExamen) {
  let notaFinal;

  // Comprovem si la nota d'avaluació continuada és major o igual que 5
  if (notaAC >= 5) {
      notaFinal = 0.2 * notaAC + 0.4 * notaPractiques + 0.4 * notaExamen;
  } else {
      notaFinal = 0.4 * notaPractiques + 0.6 * notaExamen;
  }

  // Convertim la nota final a format lletra
  let notaLletra;
  if (notaFinal < 5) {
      notaLletra = "D";
  } else if (notaFinal >= 5 && notaFinal < 6.5) {
      notaLletra = "C";
  } else if (notaFinal >= 6.5 && notaFinal < 8) {
      notaLletra = "B";
  } else if (notaFinal >= 8 && notaFinal < 10) {
      notaLletra = "A";
  } else if (notaFinal === 10) {
      notaLletra = "H";
  }

  // Retornem la nota final en format numèric i en lletra
  return `Nota final: ${notaFinal.toFixed(2)} (${notaLletra})`;
}

// Exemple d'ús de la funció
// let notaAC = parseFloat(prompt("Introdueix la nota d'avaluació continuada:"));
// let notaPractiques = parseFloat(prompt("Introdueix la nota de pràctiques:"));
// let notaExamen = parseFloat(prompt("Introdueix la nota de l'examen:"));

// console.log(calcularNotaFinal(notaAC, notaPractiques, notaExamen));

// Exercici 3.5
// Hem organitzat un concurs a Twitter que consisteix en fer relats curs (màxim 280 caràcters) amb el màxim número de paraules de 5 caràcters. Per poder donar el premi, el que volem fer és classificar tots  els tuits segons el nombre de paraules de 5 caràcters que tenen i, per tant, necessitem una funció que, donada una frase, ens retorni el número de paraules de 5 caràcters que té.

// Per fer aquesta funció haurem de tenir en compte que: 

// Totes les frases acaben en un punt (.) y totes comencen sempre per una paraula. 
// Una paraula acaba quan apareix una coma (,) o un espai en blanc. 
// Les frases només poden tenir lletres, comes, espais en blanc y el punt final. No tindrem en compte que pugui aparèixer cap altre caràcter. 
// Per conèixer la llargària de la frase (quants caràcters té) podem fer servir la propietat length del Strings de JavaScript (consulteu https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Str ing/length per saber com fer-la servir) 

function comptarParaulesDeCincCaracters(frase) {
  let paraulesDeCinc = 0; // Comptador per a paraules de 5 caràcters
  let paraulaActual = ""; // Variable temporal per construir cada paraula

  // Recorrem tota la frase
  for (let i = 0; i < frase.length; i++) {
      const car = frase[i]; // Agafem el caràcter actual

      if (car === " " || car === "," || car === ".") {
          // Si trobem un espai, una coma o un punt, hem acabat una paraula
          if (paraulaActual.length === 5) {
              // Si la paraula té exactament 5 caràcters, incrementem el comptador
              paraulesDeCinc++;
          }
          paraulaActual = ""; // Reiniciem la paraula actual
      } else {
          // Si no és un separador, afegim el caràcter a la paraula actual
          paraulaActual += car;
      }
  }

  return paraulesDeCinc; // Retornem el nombre de paraules de 5 caràcters
}

// Exemple d'ús
// const frase = "Hola, avui tenim una gran festa de cine.";
// const resultat = comptarParaulesDeCincCaracters(frase);
// console.log(`La frase conté ${resultat} paraules de 5 caràcters.`);

//Exercici 3.6
// A partir de l’experiència del concurs anterior hem decidir fer un concurs semblant cada setmana. Però cada setmana volem comptar paraules amb diferents números de lletres. Així aquesta setmana seran paraules de 7 lletres, la setmana vinent de 4 i l’altre de 3. Què cal modificar a la funció per a que puguem fer servir la mateixa funció totes les setmanes? 

function comptarParaulesDeLongitud(frase, longitud) {
  let comptador = 0; // Comptador de paraules amb la longitud desitjada
  let paraulaActual = ""; // Variable temporal per construir cada paraula

  // Recorrem tota la frase
  for (let i = 0; i < frase.length; i++) {
      const car = frase[i]; // Agafem el caràcter actual

      if (car === " " || car === "," || car === ".") {
          // Si trobem un espai, una coma o un punt, hem acabat una paraula
          if (paraulaActual.length === longitud) {
              // Si la paraula té la longitud desitjada, incrementem el comptador
              comptador++;
          }
          paraulaActual = ""; // Reiniciem la paraula actual
      } else {
          // Si no és un separador, afegim el caràcter a la paraula actual
          paraulaActual += car;
      }
  }

  return comptador; // Retornem el nombre de paraules amb la longitud desitjada
}

// Exemple d'ús
// const frase = "Aquestes paraules tenen diferents longituds, oi? algunes si tenen 7";
// const longitud = 7; // Aquesta setmana busquem paraules de 7 lletres
// const resultat = comptarParaulesDeLongitud(frase, longitud);
// console.log(`La frase conté ${resultat} paraules de ${longitud} lletres.`);

// Exercici 3.7 
// Un conegut que ha vist els nostres concursos ens ha preguntat com ho fem per comptar les paraules d’un determinat número de lletres. Un cop l’hem explicat ens ha demanat si li podíem fer una funció que, donada una frase, ens retorni a una taula quantes paraules hi ha amb 1, 2, 3, 4, 5, 6 o 7 lletres.

function comptarParaulesPerLongitud(frase) {
  let comptadors = [0, 0, 0, 0, 0, 0, 0]; // Taula per comptar paraules de longituds 1 a 7
  let paraulaActual = ""; // Variable temporal per construir cada paraula

  // Recorrem tota la frase
  for (let i = 0; i < frase.length; i++) {
      const car = frase[i]; // Agafem el caràcter actual

      if (car === " " || car === "," || car === ".") {
          // Si trobem un separador (espai, coma, punt)
          if (paraulaActual.length >= 1 && paraulaActual.length <= 7) {
              // Si la paraula està dins del rang 1-7, incrementem el comptador corresponent
              comptadors[paraulaActual.length - 1]++;
          }
          paraulaActual = ""; // Reiniciem la paraula actual
      } else {
          // Si no és un separador, afegim el caràcter a la paraula actual
          paraulaActual += car;
      }
  }

  return comptadors; // Retornem la taula de comptadors
}

// Exemple d'ús
// const frase = "Avui és un dia preciós i amb molta tasca per fer abans del cap de setmana.";
// const resultats = comptarParaulesPerLongitud(frase);

// Mostrem el resultat
// for (let i = 0; i < resultats.length; i++) {
//   console.log(`Paraules amb ${i + 1} lletres: ${resultats[i]}`);
// }

// 19.1.- Crea una funció que rebi un nombre i retorni aquest nombre elevat al quadrat.

// Definició de la funció
function elevarQuadrat(nombre) {
  return nombre * nombre; // Multipliquem el nombre per ell mateix
}

// Exemple d'ús
// let num = parseFloat(prompt("Introdueix un número:")); // Demanem un número a l'usuari
// let resultat = elevarQuadrat(num); // Cridem la funció
// console.log(`El quadrat de ${num} és: ${resultat}`); // Mostrem el resultat

// 19.2.- Crea una funció que rebi un nombre i retorni aquest nombre elevat al cub. 

// Funció per elevar un nombre al cub
function elevarCub(valor) {
  return valor * valor * valor; // Multipliquem el valor per ell mateix tres vegades
  // return Math.pow(valor, 3); // Elevem el nombre a la potència 3 amb mètode Math-pow(,)
}

// Exemple d'ús
// let numCub = parseFloat(prompt("Introdueix un número per elevar-lo al cub:")); 
// Demanem un número a l'usuari
// let resultatCub = elevarCub(numCub); // Cridem la funció
// console.log(`El cub de ${numCub} és: ${resultatCub}`); // Mostrem el resultat

// 19.3.- Crea una funció que rebi dos nombres i retorni el primer nombre elevat al segon.  

// Funció per elevar el primer nombre al segon
function elevarAPotencia(base, exponent) {
  return Math.pow(base, exponent); // Elevem la base a l'exponent
}

// Exemple d'ús
// let baseNombre = parseFloat(prompt("Introdueix el primer número (base):")); 
// Demanem la base a l'usuari
// let exponentNombre = parseFloat(prompt("Introdueix el segon número (exponent):")); 
// Demanem l'exponent
// let resultatPotencia = elevarAPotencia(baseNombre, exponentNombre); 
// Cridem la funció
// console.log(`${baseNombre} elevat a ${exponentNombre} és: ${resultatPotencia}`); 
// Mostrem el resultat

// 19.4.- Crea una funció que donat un valor en milles retorni la seva equivalència en metros.  1 milla = 1852 metros. 

// Funció per convertir milles a metres
function convertirMillesAMetres(milles) {
  const METRES_PER_MILLA = 1852; // Constant: 1 milla = 1852 metres
  return milles * METRES_PER_MILLA; // Multipliquem el valor en milles pels metres per milla
}

// Exemple d'ús
// let valorMilles = parseFloat(prompt("Introdueix un valor en milles:")); 
// Demanem el valor en milles
// let resultatMetres = convertirMillesAMetres(valorMilles); // Cridem la funció
// console.log(`${valorMilles} milles equivalen a ${resultatMetres} metres.`); // Mostrem el resultat

// 19.5.- Crea una funció que, donat un nombre del 0 al 10 retorni una cadena de caràcters amb el nom del nombre donat.  
// Funció per retornar el nom del nombre donat
function nombreEnText(numero) {
  const noms = [
      "zero", "un", "dos", "tres", "quatre",
      "cinc", "sis", "set", "vuit", "nou", "deu"
  ];

  if (numero >= 0 && numero <= 10) {
      return noms[numero]; // Retornem el nom corresponent al número
  } else {
      return "El número no està entre 0 i 10."; // Missatge d'error
  }
}

// Exemple d'ús
// let numeroEntrada = parseInt(prompt("Introdueix un número entre 0 i 10:")); // Demanem el número
// let resultatText = nombreEnText(numeroEntrada); // Cridem la funció
// console.log(`El número ${numeroEntrada} s'escriu com: ${resultatText}`); // Mostrem el resultat

// 19.6.- Crea una funció que, rebut un nombre de segons retorni una cadena de caràcters on es digui quantes hores minuts i segons són.  

// Funció per convertir segons a hores, minuts i segons
function convertirTemps(segons) {
  let hores = Math.floor(segons / 3600); // Calculem les hores
  let minuts = Math.floor((segons % 3600) / 60); // Calculem els minuts restants
  let segonsRestants = segons % 60; // Calculem els segons restants

  return `${hores} hores, ${minuts} minuts, ${segonsRestants} segons.`; // Retornem la cadena formatada
}

// Exemple d'ús
// let segonsEntrada = parseInt(prompt("Introdueix un nombre de segons:")); // Demanem el nombre de segons
// let resultatTemps = convertirTemps(segonsEntrada); // Cridem la funció
// console.log(resultatTemps); // Mostrem el resultat

// 19.7.- Crea una funció que, donades les hores treballades en una setmana i el salari brut per hora, calculi el seu salari. Si les hores treballades són més de 40, aquestes hores sobreres, es pagaran un 50% més cares que una hora normal. 
