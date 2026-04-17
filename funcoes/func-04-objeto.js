// Funções de retorno podem retornar objetos 
// Chamamos isso de 'Função Construtora'
// Isso permite criamos vários intâncias 
// do mesmo objeto  de forma dinâmica!

function fabricarCarro(marca, modelo, montadora, motor){
    return { 
        marca: marca,
        modelo: modelo,
        montadora: montadora,
        motor: motor,
        }
}
const carro02 ={
    marca: 'BMW',
    modelo: 'X5',
    montadora: 'BMW S.A',
    motor: 'V8 6.0'
}
const camaro = fabricarCarro("Camaro", "Camaro v387", "chevrolet", "v8") // tenho 2 problemas!!!
const BMW = fabricarCarro(carro02.marca, carro02.modelo, carro02.montadora, carro02.motor)
console.log(camaro)
console.log(BMW)