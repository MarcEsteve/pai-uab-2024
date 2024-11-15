/****************************/
/* Definició de les classes */
/****************************/
// Classe Empresa
class Empresa {
    constructor(nom, adreca) {
      this.nom = nom;
      this.adreca = adreca;
      this.deute = 0; // Quan creem l'empresa té deute 0
    }
    incrementaDeute(n) {
      this.deute += n;
    }
    totPagat() {
      this.deute = 0;
    }
  }
  
  // Classe Paquet
  class Paquet {
    constructor(origen, destinacio, cost) {
      this.origen = origen;
      this.destinacio = destinacio;
      this.cost = cost;
      this.lliurat = false;
    }
    lliuramentFet() {
      this.origen.incrementaDeute(this.cost);
      this.lliurat = true;
    }
  }
  
  /************************************/
  /* Definició de funcions de llistat */
  /************************************/
  // Llistat d'empreses
  function llistatEmpreses() {
    document.write("<h3>Llistat d'empreses</h3>");
    for (var i = 0; i < empreses.length; i++) {
      document.write(
        "<b>Empresa: </b>" +
          empreses[i].nom +
          "; <b>Deute: </b>" +
          empreses[i].deute +
          "<br>"
      );
    }
  }
  // Llistat de paquets
  function llistatPaquets() {
    document.write("<h3>Llistat de paquets</h3>");
    for (var i = 0; i < paquets.length; i++) {
      document.write(
        "<b>Origen: </b>" +
          paquets[i].origen.nom +
          "; <b>Destinació: </b>" +
          paquets[i].destinacio.nom +
          "; <b>Cost: </b>" +
          paquets[i].cost +
          "<br>"
      );
    }
  }
  
  /***************************/
  /* Declaració de les dades */
  /***************************/
  // Dades d'empreses
  var empreses = new Array();
  empreses[0] = new Empresa("Empre SA", "Aragó, 125, Barcelona");
  empreses[1] = new Empresa("Sito SL", "València, 15, Barcelona");
  empreses[2] = new Empresa("Car SA", "Madrid, 333", "Barcelona");
  
  // Dades de paquets a enviar
  var paquets = new Array();
  paquets[0] = new Paquet(empreses[0], empreses[1], 50); // De Empre SA a Sito SL. Cost 50
  paquets[1] = new Paquet(empreses[1], empreses[2], 60); // De Sito SL a Car SA. Cost 60
  paquets[2] = new Paquet(empreses[0], empreses[2], 70); // De Empre SA a Car SA. Cost 70
  paquets[3] = new Paquet(empreses[2], empreses[1], 60); // De Car SA a Sito SL. Cost 60
  
  /**********************/
  /* Inici del programa */
  /**********************/
  
  // Primer fem un llistat d'empreses
  llistatEmpreses();
  // Després llistem els paquets
  llistatPaquets();
  
  // Ha arribat el primer paquet
  paquets[0].lliuramentFet();
  // Ha arribat el tercer paquet
  paquets[2].lliuramentFet();
  
  // Llistem ara les empreses per veure el deute que tenen
  llistatEmpreses();
  