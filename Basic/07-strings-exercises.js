/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Concatena dos cadenas de texto

console.log('hola '+'que tal')

// 2. Muestra la longitud de una cadena de texto
let cadena='hola mundo'

console.log(cadena.length)

// 3. Muestra el primer y último carácter de un string
console.log(cadena[0],cadena[9])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena.toUpperCase)
console.log(cadena.toLowerCase)

// 5. Crea una cadena de texto en varias líneas
let texto=`hola que tal 
esto es  una cadena de texto en 
varias lineas`



// 6. Interpola el valor de una variable en un string

let variable='adios'
console.log(`palabra para despedirse ${variable}`)


// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(texto.replace(/ /g,'-'))


// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(texto.includes('texto'))

// 9. Comprueba si dos strings son iguales

console.log(texto===variable )

// 10. Comprueba si dos strings tienen la misma longitud
console.log(texto.length==variable.length)

