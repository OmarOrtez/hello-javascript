/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales

let animales=['oso','toro','caballo','tigre','leon']
let an=[]





// 2. Añade dos más. Uno al principio y otro al final

animales.unshift('perro')
animales.push('gato')
console.log(animales)



// 3. Elimina el que se encuentra en tercera posición

animales.splice(2,1)
console.log(animales)


// 4. Crea un set que almacene cinco libros

let mySet=new Set(['mago de oz','harry Potter','caperusita roja','los juesgos del hambre','las aventuras de tintin'])
console.log(mySet)




// 5. Añade dos más. Uno de ellos repetido
mySet.add('los tres cerditos','harry Potter')
console.log(mySet)

// 6. Elimina uno concreto a tu elección
console.log(mySet.delete('los tres cerditos'))
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let mons=new Map([
[1,'enero'],[2,'febrero'],[3,'marzo'],[4,'abril'],[5,'mayo'],[6,'junio'],[7,'julio'],[8,'agosto'],[9,'septiembre'],[10,'obtubre'],[11,'noviembre'],[12,'diciembre']

])

console.log(mons)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(mons.has(5),mons.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let estaciones=['verano','otoño','invierno','primavera']
mons.set('estaciones',estaciones)
console.log(mons.entries())

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let mySet2=new Set(animales)
 console.log(mySet2)
console.log(mySet2.delete('leon'))
 let mapAnimal=new Map([
    [1,mySet2]
 ])

 console.log(mapAnimal)

