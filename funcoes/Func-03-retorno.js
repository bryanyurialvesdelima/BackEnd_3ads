// Funções de retorno exigem o termo 'return'
// Permitem tornar disponíveis os dados processados
// Reaproveitamento e ações sequenciais
// podemos armazenar as funções de retorno
// a variáveis, funções, arrys, etc.

function meuSalario(salario) {
    const contaLuz = 145.0
    const aluguel =1350.0
    const restoSalario = salario - (contaLuz+aluguel)
    //console.log(restoSalario) // não serve p/ usuário
    return `O resto do seu salario é R$ ${restoSalario.toFixed(2).replace(",",",")}`
}
 const resto = meuSalario(3500.0)
 console.log(resto)