// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.forms[0].elements);
// console.log(document.forms[0].elements[0]);
// document.forms[0].elements[0].value = "Goofy";

//obté el formulari de la pàgina
// let mainFormulari = document.formulari;
//obté l’ element del formulari de la pàgina
// let primerElement = document.formulari.element;

// console.log(mainFormulari);
// console.log(primerElement);

// let mainFormulari2 = document.getElementById("formulari");
// let primerElement2 = document.getElementById("element");

// console.log(mainFormulari2);
// console.log(primerElement2);

// let mainFormulari3 = document.getElementsByTagName("form");
// let primerElement3 = document.getElementsByTagName("input");

// console.log(mainFormulari3[1]);
// console.log(primerElement3[3]);

//obté el valor del primer input
let valor1 = document.getElementById("firstname").value;
//let valor1 = formu.firstname.value;
// console.log(valor1);

let valor2 = document.getElementById("lastname").value;
//let valor2 = formu.lastname.value;
// console.log(valor2);

// document.getElementById("lastname").value = "cognomS";
// formu.firstname.value = "noM";

// console.log(formu.obs.value);

//determina si cada radiobutton ha estat seleccionat o no
//com que no son excloents, s’han de comprobar tots

let elements = document.getElementsByName("pregunta");
for (let i = 0; i < elements.length; i++) {
  console.log(
    "Element: " + elements[i].value + "\n Seleccionat:" + elements[i].checked);
}