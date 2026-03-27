// A partir da função abixo.
// crie as variações:
// (Adição, Subtração, Multiplicação, Divisão)

function divisao(n1, n2) {
    if(n2 != 0){
        console.log(" A divisão de " + n1+ " por " +n2+ " é = " + n1/n2)
        n1/n2
    } else {
        console.log("Impossivel dividir por Zero!")
    }
}
divisao(12, 2)

function adição(n1, n2){
    console.log("A adição de " + n1+ " por " + n2 + " é = " + (n1 + n2))
    n1+n2
}
adição(12, 0)

function Multiplicação(n1, n2){
    console.log("A multiĺicação de " + n1 + " por " + n2 + " é = " + (n1 * n2))
}
Multiplicação(12, 10)

function Subtração(n1, n2){
    console.log("A subtração de " + n1 + " por " + n2 + " é = " + (n1 / n2))
}
Subtração(12, 10)