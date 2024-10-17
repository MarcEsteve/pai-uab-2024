let data = new Date(); // Obtenim la data i hora actuals
// let hora = data.getHours(); // Obtenim només l'hora actual
let hora =10;
let text;

console.log(data);
// Des de les 20 és bona nit fins les 5
// Des de les 6 fins a les 13 es bon dia
// Des de les 14 fins les 17 es bona tarda

if (hora >=20 || hora <=5) {
    text = "Bona nit!";
    console.log(text);
} else if (hora >=6 || hora <=13) {
    text = "Bona dia!";
    console.log(text);
} else {
    text = "Bona tarda!";
    console.log(text);
}
