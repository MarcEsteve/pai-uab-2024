let taula = [25, 68, 74, 22, 66, 74, 23, 98, 7, 78, 56, 33, 21, 59, 98, 45];

function modificaTaula(t, f) {
  let ret = [];
  for (let i = 0; i < t.length; i++) {
    ret[i] = f(t[i]);
  }
  return ret;
}

const f1 = function (valor) {
  return valor > 50;
};

const f2 = function (valor) {
  let ret;
  if (valor > 50) {
    ret = valor;
  } else if (valor > 40) {
    ret = Math.round(valor * 1.05);
  } else if (valor > 30) {
    ret = Math.round(valor * 1.1);
  } else {
    ret = Math.round(valor * 1.15);
  }
  return ret;
};

console.log(modificaTaula(taula, f1));
console.log(modificaTaula(taula, f2));
