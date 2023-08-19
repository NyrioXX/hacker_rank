const stringCorrompida = "*Canis %lupus )familiaris"

let limpo = '';

for (letra of stringCorrompida) {
    if (letra === '!' || letra === "@" || letra === "#" || letra === "$" || letra === "%" || letra === "&" || letra === "*" || letra === "(" || letra === ")") { }

    else {
        limpo += letra;
    }

}
console.log(limpo)
