const disparos = [0, 10, 50, 70, 80, 30]

disparosAprovados = 0

for (let tentativa of disparos) {
    if (tentativa >= 70) {
        disparosAprovados++
    }
}
if (disparosAprovados >= 3) {
    console.log(disparosAprovados)
} else console.log('ELIMINADO')