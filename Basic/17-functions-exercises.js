/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(num, num2){
return num+num2
}

let sumarrow =(num1,num2)=>{
    return num1+num2
}

suma=suma(4,4);
console.log(suma)
suma=sumarrow(4,6);
console.log(suma)


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let mayor=(array=[])=>{
   let M=0
    for (const num of array) {
        if(M<num){
            M=num
        }
    }
    return M
}
 let array=[5,6,7,8,9,10]
 let numMayor=mayor(array)
    console.log(numMayor)


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

const cuentavocales=function(frase){
    let vocales='aeiou'
    let sum=0
    for (const i of frase) {
        if(vocales.includes(i)){
            sum++
        }
    }
    console.log(sum)
}
cuentavocales('eucalicto')



// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let mayusculas=(array=[])=>{
    let may=[]
    for (const palabra of array) {
         let palabraMayuscula= palabra.toUpperCase()
        may.push(palabraMayuscula)
    }
    return may
}
let frase=['hola','que','tal','estamos']

let restul=mayusculas(frase)
console.log(restul)

// let mayusculas=(array=[])=>{
//     let may=[]
//     for (let i=0;i<array.length;i++) {
//         let palabra=array[i]
//         let palabraMayuscula=palabra.toUpperCase()
//         may.push(palabraMayuscula)
//     }
//     return may
// }
// let frase=['hola','que','tal','estamos']

// let restul=mayusculas(frase)
// console.log(restul)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function primo(num) {
    if(num<=1){
        return false
    }
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true
}

console.log(primo(-1))


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// function similar(array1=[],array2=[]){
//     let indice
//     let resul=[]
//     if(array1.length>array2.length){
//          indice=array1.length
         
//     }else{
//         indice=array2.length
       
//     }

//     for(let i=0;i<indice;i++){
//         if(array2.includes(array1[i])){
//             resul.push(array1[i])

//         }
       
//     }

//     console.log(resul )

// }

// let num1=[1,2,3,4,5,6,7,8,9,10]
// let num2=[5,6,7,8,9,10]

// similar(num1,num2)

function similar(array1 = [], array2 = []) {
    const resul = array1.filter(element => array2.includes(element)); // Filtra los elementos de array1 que están en array2
    console.log(resul);
}

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num2 = [5, 6, 7, 8, 9, 10];

similar(num1, num2); // Esto imprimirá [5, 6, 7, 8, 9, 10]
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumPares(array=[]){

    let sumapares=array.filter(num=> num%2==0).reduce((acomulador,num)=>acomulador+num, 0)

    return sumapares

}

let sumaPar=sumPares(num1)
console.log(sumaPar)



// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function cuadrado(array=[]){

    const suma=array.map(num =>num*num)

    console.log(suma)

}

cuadrado(num1)

const resultados = num1.map((num, index) => {
    return `El cuadrado de ${num} (en la posición ${index}) es ${num * num}`;
});

console.log(resultados);


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let abc=['a','b','c','d','e','f','g','h']

let inverso=(array=[])=>{
    let element=[]
    console.log(array.length)
    for (let i = array.length-1; i >=0 ; i--) {
        element.push(array[i])
        
    }
    console.log(element)
}

let abc2=abc.slice().reverse()
console.log(abc2)

inverso(abc)





 let txt='hola mundo que tal '
 console.log(txt.charAt(0))
function inv (frase){
    let element=''

    for (let index = frase.length-1; index >= 0; index--) {
         element = element.concat(frase.charAt(index));
        
    }

    console.log(element)
}
inv(txt)

let txt2 = 'hola mundo que tal';

function inv2(frase) {
    let reversed = frase.split('').reverse().join('');
    console.log(reversed);
}

inv2(txt2);

let txt3 = 'hola mundo que tal';

function inv3(frase) {
    let reversed = [...frase].reverse().join('');
    console.log(reversed);
}

inv3(txt3);



// 10. Crea una función que calcule el factorial de un número dado

let numero=7

function factorial(num){
    let acomulador=1

    for (let index = 1; index <=num; index++) {
       acomulador*=index;
    }
    console.log(acomulador)
}

factorial(numero)


