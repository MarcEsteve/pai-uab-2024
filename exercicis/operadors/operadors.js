// 4.1.- Quins valors s'escriuran a la consola després d'executar aquest codi?
let a = 25;
let b = 15 + a;
let c = b * 2;
console.log(a, b, c);

// 4.2.- Quins valors s'escriuran a la consola després d'executar aquest codi?
a = 10; //10
b = 20; //20
c = 5; //5
a = a + 3; //13
b = b + 4 - a; //11
c = a + b + c;
a = a + c;
b = 4;
c = c + 3 - b + 2;
console.log(a, b, c);

// 4.3.- Quins valors s'escriuran a la consola després d'executar aquest codi?

a = 5; //5
b = 18; //18
c = 15; //15
d = 22; //22
a = a + 10; //15
console.log(a);
b = b + 5 - c; //18 + 5 - 15 = 8
c = c + 4 + b; //15 + 4 + 8 = 27
d = d + b + a; //...
a = a + 1;
b = b + c;
c = b + c;
d = b + b;

console.log(a,b,c,d);