// Objecte senzill amb PROPIETATS

// Definim un objecte que representa un alumne
let alumne = {
  nom: "Joan",
  edat: 20,
  curs: "PAI",
};

// Mostrem les propietats de l'objecte a la consola
// console.log("Nom:", alumne.nom); // Accés a la propietat "nom"
// console.log("Edat:", alumne.edat); // Accés a la propietat "edat"
// console.log("Curs:", alumne.curs); // Accés a la propietat "curs"

// Objecte BUIT i afegir propietats després

// Creem un objecte buit
let professor = {};

// Afegim propietats a l'objecte
professor.nom = "Laura";
professor.assignatura = "Programació";
professor.experiència = 10;

// Mostrem l'objecte
// console.log(professor);

// Objecte amb modificació de propietats

// Objecte que representa un llibre
let llibre = {
  titol: "El petit príncep",
  autor: "Antoine de Saint-Exupéry",
  preu: 15,
};

// Modifiquem el preu del llibre
llibre.preu = 12;

// Mostrem el llibre actualitzat
// console.log(
//   `Llibre: ${llibre.titol}, Autor: ${llibre.autor}, Preu actualitzat: ${llibre.preu}€`
// );

// Objectes. Funció constructora

function Persona(nom, dni, dn) {
  this.nom = nom;
  this.dni = dni;
  this.dataNaix = new Date(dn);
}

let persona1 = new Persona(
  "Cristina Casanova Esteve",
  "52535948W",
  "2002/04/28"
);
let persona2 = new Persona("Andreu Oliveres Martí", "55214587T", "2002/02/03");

// function Auto(marca, modelo, potencia, antiguedad, precio) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.potencia = potencia;
//   this.antiguedad = antiguedad;
//   this.precio = precio;
// }
// let miAuto = new Auto("Seat", "Ibiza", 90, 2010, 5000);
// let otroAuto = new Auto("Opel", "Astra", 92, 1995, 500);
// console.log(miAuto);
// miAuto.marca = "Fiat"; // canviem el contingut de la propietat
// console.log(miAuto);

// L'avantatge de la notació de claudàtors és que pots accedir a una propietat mitjançant el valor guardat en una variable

let propietat = "precio";
// console.log(miAuto[propietat]); // Escriurà en la consola el valor de la propietat precio.

//FOR que recórrer OBJECTES
// for (let i in miAuto) {
//   // i anirà prenent els noms de totes les
//   // propietats que tingui miAuto
//   console.log(miAuto[i]); // Escriurà a la consola els valors de totes les propietats
// }

//EXEMPLE COMPARACIÓ OBJECTES
// Definimos la clase
function Auto(marca, modelo, potencia, antiguedad, precio) {
  this.marca = marca;
  this.modelo = modelo;
  this.potencia = potencia;
  this.antiguedad = antiguedad;
  this.precio = precio;
}
// Definimos dos objetos iguales
let miAuto = new Auto("Seat", "Ibiza", 90, 2010, 5000);
let miAuto2 = new Auto("Seat", "dsadsa", 90, 2010, 5001);
// Los comparamos
console.log(miAuto == miAuto2);
// Dice que no son iguales
// Creamos una función que compare todos los campos uno a uno
function comparaAutos(auto1, auto2) {
  let iguales = true;
  for (let i in auto2) {
    if (auto1.i == auto2.i) {
      iguales = false;
    }
  }
  return iguales;
}

// Llamamos a la función
console.log(comparaAutos(miAuto, miAuto2));

// La función nos dice correctamente que los dos objetos tienen los mismos valores en su propiedades

// Objecte amb un MÈTODE

// Objecte amb una funció (mètode) dins
let cotxe = {
  marca: "Toyota",
  model: "Corolla",
  any: 2020,
  descripcio: function () {
    return `Aquest cotxe és un ${this.marca} ${this.model} de l'any ${this.any}.`;
  },
};

// Cridem el mètode de l'objecte
console.log(cotxe.descripcio());

// Objecte dins d'un array

// Llista d'objectes (alumnes)
let alumnes = [
  { nom: "Anna", edat: 22 },
  { nom: "Pere", edat: 24 },
  { nom: "Marta", edat: 20 },
];

// Recorrem l'array i mostrem la informació de cada alumne
for (let i = 0; i < alumnes.length; i++) {
  console.log(`Nom: ${alumnes[i].nom}, Edat: ${alumnes[i].edat}`);
}

class Persona {
  constructor(nom, dni, dn) {
    // Propietats
    this.nom = nom;
    this.dni = dni;
    this.dataNaix = new Date(dn);
  }
  // Mètodes
  edat() {
    let avui = new Date();
    let edad = avui.getFullYear() - this.dataNaix.getFullYear();
    return edad;
  }
  escriuNom(vegades) {
    for (let i = 0; i < vegades; i++) {
      console.log(this.nom);
    }
  }
}
