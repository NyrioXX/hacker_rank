const palpite = "a";
const input = "abelha";

let acertos = 0;

for (let letra of input) {
  if (letra == palpite) {
    acertos++;
  }
}
console.log(acertos);
