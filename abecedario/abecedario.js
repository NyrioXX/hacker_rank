const letra = "m"
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"]

let soma = 0;
for (let escolha of palavras) {
    if (escolha[0] !== letra) {
        soma++
    }
} console.log(soma)