const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]

let maiorNota = 0
let menorNota = 99999999
let soma = 0
for (let i = 0; i < notas.length; i++) {

    if (notas[i] > maiorNota) {
        maiorNota = notas[i]
    }
    if (notas[i] < menorNota) {
        menorNota = notas[i]
    } soma = soma + notas[i]
}
console.log((soma - maiorNota - menorNota) / (notas.length - 2)) 