// funcines estandar
const persona = {
    nombre: "juan",
    age: null
}

// console.log( isNaN(null)  )
// false - 0 - 0 

if (2 == "2") {
    // esto devuelve true
}

if (2 === "2") {
    // esto no es igual
}

console.log("5")
console.log( parseInt("5.25")  )

// console.log( parseFloat("5.25") )
// console.log( parseFloat(false) )
// false -- "false" -- NaN

// objetos
const perro = {
    nombre: "Manchas",
    comer: function() {
        console.log("comiendo.....")
    },
    domir: () => {
        console.log("mimiendo....")
    }
}

console.log( perro.nombre )
perro.domir()

perro.age = 11
perro["correr"] = function() {
    console.log("corriendo...")
}
console.log( perro )
perro.correr()

// Objetos estandar / Objetos globales

const total = 10
const total1 = new Number(10)
const total2 = Number(10)
console.log(total)
console.log(total1)
console.log(total2)

// objeto constructor para parsear valores
const parseNumber = Number("50")
const parseNumber1 = parseInt("50")
console.log(parseNumber)

const parseString = String(2)
console.log(parseString)
Boolean()
Array()

// Objeto Date
const date = new Date()
console.log(date.getMonth())
console.log(date.getFullYear())


// Metodos
const nombre2 = "Juan"
const nombre2Minuscula = nombre2.toLowerCase()
console.log(nombre2Minuscula)
console.log( nombre2Minuscula.includes("ju") )
console.log( nombre2.toUpperCase() )
console.log( nombre2Minuscula.length )

if (nombre2.length < 2) {
    console.log("el nombre debe tener una longitud minima de 2")
}

const notaTotal = 20
const numero3 = Number("30.568451")
console.log( notaTotal.toString() )
const numeroConDecimales = numero3.toFixed(2)
console.log( Number(numeroConDecimales) )

const n = Math.max(10, 20)

console.log("maximo: ", n )