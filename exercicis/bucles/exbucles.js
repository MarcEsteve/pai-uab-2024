// FOR
// 16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.

for (let i = 1; i <= 10; i++) {
  console.log("Estem fent bucles (for al console)");
}

// WHILE
//17.1
let j = 1,
  text = "";
while (j <= 10) {
  text += "Estem fent bucles while</br>";
  document.getElementById("identificador1").innerHTML = text;
  j++;
}
