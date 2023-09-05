const primeiraLetra = "a";
const segundaLetra = "v";
const inputs = ["aveia", "manha", "ave"];

encontrouinput = false;
for (let input of inputs) {
  if (input[0] == primeiraLetra && input[1] == segundaLetra) {
    console.log(input);
    encontrouinput = true;
  }
}
if (!encontrouinput) {
  console.log("NENHUMA");
}
