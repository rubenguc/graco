// variables locales
// var name = "Messie"
let name = "Messie"

function printName() {
    // ambito local de la funcion
    // var name = "Pedro"
    let name = "Pedro"
    console.log("imprimiendo en funcion", name)
}

if (2 == 2) {
    // ambito local del if
    // var name = "Juan"
    let name = "Juan"
}

printName()
console.log(name)

// funciones con parametros
let num1 = 1
function sumarNumeros(num1, num2) {
    const total = num1 + num2
    console.log(total)
}
sumarNumeros(10, 20)

// funciones
const restarNumeros = function (num1, num2) {
    // codigo
    const total = num1 - num2
    console.log(total)
}

// funciones de flecha
const restarNumeros2 = (num1, num2) => {
    // codigo
    const total = num1 - num2
    console.log(total)
}