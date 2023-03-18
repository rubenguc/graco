// console.log("hola mundo")

// forma no recomendada
var name = "Lonel";

// forma recomendada
let lastName = "Messie";

// forma recomendada 
const age = 35;

name = "Juan"

lastName = 10

// console.log(name, lastName)

// Tipos de datos - Numeros
const notaTotal = 5000000000
const suma = 40 + 20
const resta = 10 - 5
const multiplicacion = 2 * 5 
const division = 10 / 2
const modulo = 10 % 5
// console.log(notaTotal, suma, resta, multiplicacion, division, modulo)

// acortadores operaciones matematicas
let total = 0
total += 1 // total = total + 1
total -= 1 
total *= 1 // total = total * 1
total /= 1
total %= 1

total++
total--

// String
const nombre = "Maria "
const apellido = 'Perez'
// console.log( nombre + ' ' + apellido )
// console.log( 'Su nota es: ' + 18 )

// console.log( '10' * 5 )

// template string
const texto = `
Su nota es ${18}
nombre: ${nombre}
apellido
`

const nuevoDiv = `
    <div>
        texto
    </div>
`
// console.log(texto)

// boleanos
const isActive = true
const isLoading = false
const isUnderage = age < 18 
// console.log(isActive, isLoading, isUnderage)

// console.log( 10 - true )

// arrays
const fruits = [ 'manzana', 'pera', 'uva' ]
console.log(fruits)
console.log( fruits[5] )

const matriz = [ [1,2,3], age, name ]
const posicion1 = matriz[0]
// console.log( posicion1[1] )

// console.log( 10 + [] )

// condicionales
// if
if (age > 40 && nombre != "") {
    console.log('es mayor de edad')
} else if ( age < 30 || nombre == "messie" ) {
    console.log('es menor de edad')
} else {
    console.log("no hagas")
}

const numero = 20

if (20 == "20") {
    // console.log("los 20 son iguales dos iguales")
}

// forma recomendada
if (20 === "20") {
    // console.log("los 20 son iguales tres iguales")
}

if (20 != '20') {}
if (20 !== 20) {}

const longituArreglo = 10
// evaluamos numeros
if (longituArreglo) {
    // codigo
    console.log("condicion verdadera", longituArreglo)
}

const fruta = ""
// evaluamos string
if (fruta) {
    // codigo
    console.log("el string no esta vacio")
}

// switch
const userType = 1
switch (userType) {
    case 1:
        console.log("admin")
        break;
    case 2:
        console.log("customer")
        break;
    default:
        break;
}

// for
for (let index = 0; index < fruits.length; index++) {
    console.log( fruits[index]  )
}

// funciones
function printHelloWorld() {
    console.log("hola mundo")
}

printHelloWorld()