const sequencia = ['>', '>', '>', '<', '>']

let imagem = 0

for (escolha of sequencia) {
    if (escolha === '>' && imagem < 6) {
        imagem++
    } else if (escolha === '>' && imagem >= 6) {
        imagem = 0
    } else if (escolha === '<' && imagem > 0) {
        imagem--
    } else if (escolha === '<' && imagem <= 0) {
        imagem = 6
    }
}

console.log(imagem)