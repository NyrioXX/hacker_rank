const letra = "m";
const inputs = ["mamao", "maca", "melao", "melancia", "laranja"];

let soma = 0;
for (let escolha of inputs) {
  if (escolha[0] !== letra) {
    soma++;
  }
}
console.log(soma);
