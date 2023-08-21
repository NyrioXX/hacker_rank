const resultados = ["V", "E", "V", "E"]

let pontuacao = 0

for (let ponto of resultados) {
    if (ponto == "V") {
        pontuacao += 3
    } else if (ponto == "E") {
        pontuacao += 1
    }
}

console.log(pontuacao)