// 1. Objecte senzill amb propietats

// Definim un objecte que representa un alumne
let alumne = {
    nom: "Joan",
    edat: 20,
    curs: "PAI"
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
    descripcio: function() {
        return `Aquest cotxe és un ${this.marca} ${this.model} de l'any ${this.any}.`;
    }
};

// Cridem el mètode de l'objecte
console.log(cotxe.descripcio());

// 3. Objecte amb modificació de propietats

// Objecte que representa un llibre
let llibre = {
    titol: "El petit príncep",
    autor: "Antoine de Saint-Exupéry",
    preu: 15
};

// Modifiquem el preu del llibre
llibre.preu = 12;

// Mostrem el llibre actualitzat
console.log(`Llibre: ${llibre.titol}, Autor: ${llibre.autor}, Preu actualitzat: ${llibre.preu}€`);
