// Objecte senzill amb PROPIETATS

// Definim un objecte que representa un alumne
let alumne;

alumne = {
  nom: "Joan",
  edat: 20,
  curs: "PAI",
  aprovat: true
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
professor.experiencia = 10;

// Mostrem l'objecte
// console.log(professor);

// Objecte amb modificació de propietats

// Objecte que representa un llibre
let llibre = {
  titol: "El petit príncep",
  autor: "Antoine de Saint-Exupéry",
  preu: 15
};

// "Error" perque falta preu
// let llibre2 = {
//   titol: "El petit príncep",
//   autor: "Antoine de Saint-Exupéry"
// };

// console.log(llibre);

// Modifiquem el preu del llibre
llibre.preu = 12;

// Mostrem el llibre actualitzat
// console.log(
//   `Llibre: ${llibre.titol}, Autor: ${llibre.autor}, Preu actualitzat: ${llibre.preu}€`
// );

// Equival·lent amb concatenació
// console.log("Llibre de preu: " + llibre.preu + "€");

// Objectes. Funció constructora

// function Persona(nom, dni, dn) {
//   this.nom = nom;
//   this.dni = dni;
//   this.dataNaix = new Date(dn);
// }

// let persona1 = new Persona(
//   "Cristina Casanova Esteve",
//   "52535948W",
//   "2002/04/28"
// );
// let persona2 = new Persona("Andreu", "55214587T", "2002/02/03");

// function Auto(marca, modelo, potencia, antiguedad, precio) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.potencia = potencia;
//   this.antiguedad = antiguedad;
//   this.precio = precio;
// }
// let miAuto = new Auto("fdsfdsf", "Ibiza", 90, 2010, 0);
// let otroAuto = new Auto("Opel", "Astra", 92, 1995, 500);
// console.log(miAuto);
// miAuto.precio = 5000;
// miAuto.marca = "Fiat"; // canviem el contingut de la propietat
// console.log(miAuto);

// L'avantatge de la notació de claudàtors és que pots accedir a una propietat mitjançant el valor guardat en una variable

// let propietat = "precio";
// console.log(miAuto[propietat]); // Escriurà en la consola el valor de la propietat precio. Equivalent miAuto.precio

//FOR que recórrer OBJECTES
// for (let i in miAuto) {
//   // i anirà prenent els noms de totes les
//   // propietats que tingui miAuto
//   console.log(miAuto[i]); // Escriurà a la consola els valors de totes les propietats
// }

//EXEMPLE COMPARACIÓ OBJECTES
// Definimos la clase
// function Auto(marca, modelo, potencia, antiguedad, precio) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.potencia = potencia;
//   this.antiguedad = antiguedad;
//   this.precio = precio;
// }
// Definimos dos objetos iguales
// let miAuto = new Auto("Seat", "Ibiza", 90, 2010, 5000);
// let miAuto2 = new Auto("Seat", "Ibiza", 90, 2010, 5000);
// Los comparamos
// console.log(miAuto == miAuto2);
// Dice que no son iguales
// Creamos una función que compare todos los campos uno a uno
// function comparaAutos(auto1, auto2) {
//   let iguales = true;
//   for (let i in auto2) {
//     if (auto1[i] != auto2[i]) {
//       iguales = false;
//       break; // Atura el bucle quan trobi una diferència
//     }
//   }
//   return iguales;
// }

// Llamamos a la función
// console.log(comparaAutos(miAuto, miAuto2));

// La función nos dice correctamente que los dos objetos tienen los mismos valores en su propiedades

// Objecte amb un MÈTODE

// Objecte amb una funció (mètode) dins
// let cotxe = {
//   marca: "Toyota",
//   model: "Corolla",
//   any: 2020,
//   descripcio: function () {
//     return `Aquest cotxe és un ${this.marca} ${this.model} de l'any ${this.any}.`;
//   }
// };

// Cridem el mètode de l'objecte
// console.log(cotxe.descripcio());

//Equivalència
// console.log(`Aquest cotxe és un ${cotxe.marca} ${cotxe.model} de l'any ${cotxe.any}.`);

// Objecte dins d'un array

// Llista d'objectes (alumnes)
let alumnes = [
  { nom: "Anna", edat: 22 },
  { nom: "Pere", edat: 24 },
  { nom: "Marta", edat: 20 },
];

// Recorrem l'array i mostrem la informació de cada alumne
// for (let i = 0; i < alumnes.length; i++) {
//   console.log(`Nom: ${alumnes[i].nom}, Edat: ${alumnes[i].edat}`);
// }

//CLASSES
// class Persona {
//   constructor(nom, dni, dn) {
//     // Propietats
//     this.nom = nom;
//     this.dni = dni;
//     this.dataNaix = new Date(dn);
//   }
//   // Mètodes
//   edat() {
//     let avui = new Date();
//     let edad = avui.getFullYear() - this.dataNaix.getFullYear();
//     return edad;
//   }
//   escriuNom(vegades) {
//     for (let i = 0; i < vegades; i++) {
//       console.log(this.nom);
//     }
//   }
// }
// console.log(new Date());

// Crear objectes de la classe Persona
// let persona1 = new Persona("Anna Martí", "12345678A", "1990-05-15");
// let persona2 = new Persona("Joan López", "87654321B", "1985-11-20");

// Utilitzar el mètode edat()
// console.log(`L'edat de ${persona1.nom} és: ${persona1.edat()} anys.`);
// console.log(`L'edat de ${persona2.nom} és: ${persona2.edat()} anys.`);

// Utilitzar el mètode escriuNom()
// console.log("Nom d'Anna repetit 3 vegades:");
// persona1.escriuNom(3);

// console.log("Nom de Joan repetit 5 vegades:");
// persona2.escriuNom(5);

//Getters i Setters

// Getter per obtenir el nom
class Persona {
  constructor(nom, dni, dn) {
    this._nom = nom; // Propietats privades (amb _)
    this._dni = dni;
    this._dataNaix = new Date(dn);
  }

  // Getter per obtenir el nom
  get nom() {
    return this._nom;
  }

  // Setter per modificar el nom
  set nom(nouNom) {
    if (nouNom.length > 0) {
      this._nom = nouNom;
    } else {
      console.error("El nom no pot estar buit.");
    }
  }

  // Getter per obtenir el DNI
  get dni() {
    return this._dni;
  }

  // Setter per modificar el DNI
  set dni(nouDni) {
    if (nouDni.match(/^\d{8}[A-Z]$/)) {
      this._dni = nouDni;
    } else {
      console.error("El DNI no és vàlid. Ha de tenir 8 números seguits d'una lletra.");
    }
  }

  // Getter per obtenir la data de naixement
  get dataNaix() {
    return this._dataNaix;
  }

  // Setter per modificar la data de naixement
  set dataNaix(novaDataNaix) {
    const novaData = new Date(novaDataNaix);
    if (!isNaN(novaData.getTime())) {
      this._dataNaix = novaData;
    } else {
      console.error("La data de naixement no és vàlida.");
    }
  }

  // Mètode per calcular l'edat
  edat() {
    let avui = new Date();
    let edad = avui.getFullYear() - this._dataNaix.getFullYear();
    if (
      avui.getMonth() < this._dataNaix.getMonth() ||
      (avui.getMonth() === this._dataNaix.getMonth() && avui.getDate() < this._dataNaix.getDate())
    ) {
      edad--;
    }
    return edad;
  }

  // Mètode per escriure el nom diverses vegades
  escriuNom(vegades) {
    for (let i = 0; i < vegades; i++) {
      console.log(this._nom);
    }
  }
}

// Exemple d'ús
let persona = new Persona("Maria Soler", "12345678Z", "1995-10-25");

console.log(persona.nom()); // Accedir al nom amb el getter
persona.nom = "Joana Puig"; // Modificar el nom amb el setter
console.log(persona.nom());
persona.nom("Pedro");
console.log(persona.nom());

console.log(persona.dni()); // Accedir al DNI amb el getter
persona.dni = "87654321X"; // Modificar el DNI amb el setter
console.log(persona.dni());

console.log(`Edat: ${persona.edat()} anys`); // Calcular l'edat

// Provar d'escriure el nom 3 vegades
persona.escriuNom(3);

