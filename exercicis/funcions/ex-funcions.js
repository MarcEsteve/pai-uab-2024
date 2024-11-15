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

// let numeroEnter = parseInt(prompt("Introdueix un nombre enter, si us plau"));
// console.log(parellSenar(numeroEnter));

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
let numeroAny = parseInt(
  prompt("Introdueix un any per comprovar si és de traspàs:")
);

// let anyTraspas = esAnyDeTraspas(numeroAny); 

if (esAnyDeTraspas(numeroAny)) {
  console.log(`${numeroAny} és un any de traspàs.`);
} else {
  console.log(`${numeroAny} no és un any de traspàs.`);
}

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
const frase = "Hola, avui tenim una gran festa de cine.";
const resultat = comptarParaulesDeCincCaracters(frase);
console.log(`La frase conté ${resultat} paraules de 5 caràcters.`);

//SEGONA PART


