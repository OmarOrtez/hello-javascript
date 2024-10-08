/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let array1=[1,2,3,]
let [valor1,valor2]=array1
console.log(valor1,valor2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

    let [num1,num2,,num4=0]=array1
    console.log(num1,num2,num4)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person={
    nombre:'omar',
    apellido:'ortez',
    trabajo:'estudiante',

    direccion:{
        calle:'alberche ',  
        bloque:'numero 13'
    }
    
}

let animal={
    raza:'perro',
    edad:'5 años',
    nombre:'max'
}

var {nombre,apellido}=person

console.log(nombre,apellido)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {nombre:alumn1,apellido:apellidoAlumno1}=person

console.log(alumn1,apellidoAlumno1)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

var {nombre,apellido,direccion:{bloque}}=person


console.log(nombre,apellido,bloque)


// 6. Usa propagación para combinar dos arrays en uno nuevo
let array2=[4,5,6,7]

let sumarray=[...array1,...array2]

console.log(sumarray)


// 7. Usa propagación para crear una copia de un array
let copia=[...array1]
console.log(copia)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let serVivo={...person,...animal}
console.log(serVivo)

// 9. Usa propagación para crear una copia de un objeto

let alumno2={...person}
console.log (alumno2)

// 10. Combina desestructuración y propagación
// Desestructura las propiedades `nombre` y `apellido`
var { nombre, apellido } = person;

// Usa la propagación para crear un nuevo objeto combinando las propiedades
let nombrecompleto = { ...{ nombre }, ...{ apellido } };
console.log(nombrecompleto)