/****** Exercici 5.1 ******/

// Opció a: Número d'enllaços que hi ha a la pàgina
function e51a() {
  const numEnllacos = document.links.length;
  alert(`Número d'enllaços a la pàgina: ${numEnllacos} .`);

  // alert("Número d'enllaços a la pàgina: " + numEnllacos);
}

// Opció b: Adreça (URL) del penúltim enllaç
function e51b() {
  const numEnllacos = document.links.length;
  if (numEnllacos >= 2) {
    const penultimEnllac = document.links[numEnllacos - 2].href;
    alert(`URL del penúltim enllaç: ${penultimEnllac}`);
  } else {
    alert("No hi ha prou enllaços per mostrar el penúltim.");
  }
}

// Opció c: Número d'enllaços que apunten a http://www.uab.cat
function e51c() {
  const uabEnllacos = Array.from(document.links).filter(
    (enllac) => enllac.href === "http://www.uab.cat/"
  ).length;
  alert(`Número d'enllaços que apunten a http://www.uab.cat: ${uabEnllacos}`);
}

//  5.1C Amb condicionals i bucles senzills sense filter()
// function e51c() {
//   let uabEnllacos = 0; // Comptador inicialitzat a 0
//   for (let i = 0; i < document.links.length; i++) {
//     // Iterem per tots els enllaços
//     if (document.links[i].href === "http://www.uab.cat/") {
//       // Comprovem si l'enllaç apunta a uab.cat
//       uabEnllacos++; // Si és així, incrementem el comptador
//     }
//   }
//   alert(`Número d'enllaços que apunten a http://www.uab.cat: ${uabEnllacos}`);
// }

// Opció d: Número d'enllaços al tercer paràgraf
function e51d() {
  const tercerParagraf = document.getElementById("aquest");
  const enllacosTercerParagraf =
    tercerParagraf.getElementsByTagName("a").length;
  alert(`Número d'enllaços al tercer paràgraf: ${enllacosTercerParagraf}`);
}

/****** Exercici 5.2 ******/
// a. Al final de dels paràgrafs existents.
function e52a() {
  // Crear un nou paràgraf
  const nouParagraf = document.createElement("p");
  nouParagraf.textContent = "Hola món!";

  // Afegir-lo al final del body
  document.body.appendChild(nouParagraf);
}

// b. Entre el segon i el tercer paràgraf.
function e52b() {
  // Crear un nou paràgraf
  const nouParagraf = document.createElement("p");
  nouParagraf.textContent = "Hola món!";

  // Localitzar el tercer paràgraf
  const tercerParagraf = document.querySelectorAll("p")[2]; // Index 2 perquè és el tercer (0-based)

  // Afegir el nou paràgraf abans del tercer paràgraf
  tercerParagraf.parentNode.insertBefore(nouParagraf, tercerParagraf);
}

/****** Exercici 5.3 ******/
// Afegir "Salve Mundi!" a la llista en penúltima posició.
function e53a() {}
// Canviar l'estil de la llista
function e53b() {}

/****** Exercici 5.4 ******/
// Amagar el 2on paràgraf
function e54() {}
