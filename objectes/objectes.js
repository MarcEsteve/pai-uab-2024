// 1. Objecte senzill amb propietats

// Definim un objecte que representa un alumne
let alumne = {
  nom: "Joan",
  edat: 20,
  curs: "PAI",
};

// Mostrem les propietats de l'objecte a la consola
console.log("Nom:", alumne.nom); // Accés a la propietat "nom"
console.log("Edat:", alumne.edat); // Accés a la propietat "edat"
console.log("Curs:", alumne.curs); // Accés a la propietat "curs"

// 2. Objecte amb un mètode

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

// 3. Objecte amb modificació de propietats

// Objecte que representa un llibre
let llibre = {
  titol: "El petit príncep",
  autor: "Antoine de Saint-Exupéry",
  preu: 15,
};

// Modifiquem el preu del llibre
llibre.preu = 12;

// Mostrem el llibre actualitzat
console.log(
  `Llibre: ${llibre.titol}, Autor: ${llibre.autor}, Preu actualitzat: ${llibre.preu}€`
);

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

function Auto(marca, modelo, potencia, antiguedad, precio) {
  this.marca = marca;
  this.modelo = modelo;
  this.potencia = potencia;
  this.antiguedad = antiguedad;
  this.precio = precio;
}
let miAuto = new Auto("Seat", "Ibiza", 90, 2010, 5000);
let otroAuto = new Auto("Opel", "Astra", 92, 1995, 500);
console.log(miAuto);
miAuto.marca = "Fiat"; // canviem el contingut de la propietat
console.log(miAuto);

for (let i in miAuto) {
  // i anirà prenent els noms de totes les
  // propietats que tingui miAuto
  console.log(miAuto[i]); // Escriurà a la consola els valors de totes les propietats
}
