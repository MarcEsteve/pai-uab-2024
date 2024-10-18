// Demanar els valors dels costats amb prompt()
let costat1 = parseFloat(prompt("Introdueix la longitud del primer costat en metres:"));
let costat2 = parseFloat(prompt("Introdueix la longitud del segon costat en metres:"));

// Càlcul del perímetre
let perimetre = 2 * (costat1 + costat2);

// Càlcul de l'àrea
let area = costat1 * costat2;

// Mostra els resultats a la consola
console.log("Perímetre del rectangle: " + perimetre + " metres");
console.log("Àrea del rectangle: " + area + " metres quadrats");
