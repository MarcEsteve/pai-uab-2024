// 1. Introducció bàsica a una funció
// Aquest exemple mostra una funció simple que no té paràmetres i només mostra un missatge.

function saludar() {
  console.log("Hola, benvinguts al curs!");
}

// Crida a la funció
saludar();

// Explicació: La funció saludar() es declara amb la paraula clau function, no té cap paràmetre i s’executa amb saludar();.

// 2. Funció amb paràmetres
// Aquest exemple afegeix paràmetres perquè la funció pugui personalitzar el missatge de salutació.

function saludarAlumne(nom) {
  console.log("Hola, " + nom + "! Benvingut/da a la classe.");
}

// Crida a la funció amb un nom com a argument
saludarAlumne("Maria");
saludarAlumne("Joan");
saludarAlumne();
saludarAlumne("Joan", "Marc");

// Explicació: La funció saludarAlumne(nom) pren un paràmetre nom i mostra un missatge de salutació personalitzat.

// 3. Funció amb retorn de valor
// En aquest exemple, la funció calcula el doble d’un nombre i retorna el resultat.

function calcularDoble(num) {
  let doble = num * 2;
  return doble;
}

// Utilitzem la funció i emmagatzemem el resultat en una variable
let resultat = calcularDoble(5);
console.log("El doble de 5 és: " + resultat);

// Exemple de assignació amb variables no constants

function suma(s1, s2) {
  let laSumaEs = s1 + s2;
  return laSumaEs;
}


let resultatPrompt;
let sumand1 = parseInt(prompt("introdueix un valor")); //3
let sumand2 = parseInt(prompt("introdueix un valor")); //5
resultatPrompt = suma(sumand1, sumand2); //crida de la funció
console.log(resultatPrompt); //es mostra el resultat que val 8
