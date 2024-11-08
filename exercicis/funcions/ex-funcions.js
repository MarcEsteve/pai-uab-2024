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
let N = parseInt(prompt("Introdueix un nombre enter positiu N:"));
if (N > 0) {
    console.log(`La suma de la sèrie per N = ${N} és: ${sumaSerie(N)}`);
} else {
    console.log("Introdueix un valor positiu per N.");
}
