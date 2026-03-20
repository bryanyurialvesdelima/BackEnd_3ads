// Um array é um grupo indeixado de valores
// Podem ser homogêneros / heterogêneros
// Seus índices vão de "0"..."infinito"
// Possuem funções nativas (prontas)
// Podem ser Interados e Checados

const time =['Petter', 'Pan', true, , 56]
   // indices    0       1      2     3
time [55] // underfined

for (const jogador of time) {
   console.log ("jogador: " +jogador)
}
   