/****** Exercici 5.1 ******/


// Opció a: Número d'enllaços que hi ha a la pàgina
function e51a() {
  const numEnllacos = document.links.length;
  alert(`Número d'enllaços a la pàgina: ${numEnllacos}`);
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
  const uabEnllacos = Array.from(document.links).filter(enllac => enllac.href === "http://www.uab.cat/").length;
  alert(`Número d'enllaços que apunten a http://www.uab.cat: ${uabEnllacos}`);
}

// Opció d: Número d'enllaços al tercer paràgraf
function e51d() {
  const tercerParagraf = document.getElementById("aquest");
  const enllacosTercerParagraf = tercerParagraf.getElementsByTagName("a").length;
  alert(`Número d'enllaços al tercer paràgraf: ${enllacosTercerParagraf}`);
}



/****** Exercici 5.2 ******/
// a. Al final de dels paràgrafs existents.
function e52a() {}
// b. Entre el segon i el tercer paràgraf.
function e52b() {}

/****** Exercici 5.3 ******/
// Afegir "Salve Mundi!" a la llista en penúltima posició.
function e53a() {}
// Canviar l'estil de la llista
function e53b() {}

/****** Exercici 5.4 ******/
// Amagar el 2on paràgraf
function e54() {}
