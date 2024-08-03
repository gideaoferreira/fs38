// + Operador de Soma
// - Operador de Subtração
// * Multiplicação
// ** Potência
// / Divisão
// % Mod(Resultado de uma divisão)

// i = 1 e i <= 10
// 1 - Imprimir apenas números ímpares
// 2 - Apenas pares
// 3 - Multiplo de 3
// 4 - Primos

let isPrime = [];

for (let i = 0; i <= 10; i++) {
  let somaPrime = 0;
  for (let x = 0; x <= 10; x++) {
    if (i % x == 0) {
      somaPrime += 1;
    }
  }

  if (somaPrime == 2) {
    console.log(i);
  }
}

console.log(isPrime);
