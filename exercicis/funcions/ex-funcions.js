// Exercici 3.1
// Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat una cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció. 

function parellSenar(nombre) {
    let text = "";
    if (nombre % 2 == 0) {
        text = "El nombre és parell";
    } else {
        text = "El nombre és senar";
    }
    return text;
}

// let numeroEnter = parseInt(prompt("Introdueix un nombre enter, si us plau"));
// console.log(parellSenar(numeroEnter));

// Exercici 3.2
// Escriu un script que comprovi si un any donat és de traspàs. Un any és de traspàs si és múltiple de 4, excloent els que siguin múltiples de 100, però no els que siguin múltiples de 400. Per exemple, l'any 1900 no va ser de traspàs, el 2000 sí i el 2100 no ho és. 

function esAnyDeTraspas(any) {
    if ((any % 4 === 0 && any % 100 !== 0) || (any % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Exemple d'ús
let numeroAny = parseInt(prompt("Introdueix un any per comprovar si és de traspàs:"));

if (esAnyDeTraspas(numeroAny)) {
    console.log(`${numeroAny} és un any de traspàs.`);
} else {
    console.log(`${numeroAny} no és un any de traspàs.`);
}
