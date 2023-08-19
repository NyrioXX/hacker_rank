const precos = [100, 500, 100, 200, 50]

let pagamento = 0;
let desconto = precos[0];

if (precos.length < 5) {
    for (indice = 0; indice < precos.length; indice++) {
        pagamento = pagamento + precos[indice];
    }
    console.log(pagamento);

} else if (precos.length >= 5) {
    for (let compra of precos) {
        if (desconto > compra) {
            desconto = compra;
        }
        pagamento = pagamento + compra;
    }
    console.log(pagamento - desconto);
}