/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicio
// 1. Crea un bucle que imprima los números del 1 al 20
let i=1;
let serie=""
while(i<=20){
    serie+=i+" "
    i++
}
console.log(serie)
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let num=1;
let suma=0
 
while (num<=100){
    suma+=num
    num++
}
console.log(suma)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
 serie=""
for(let i=2;i<50;i+=2){
    serie+=i+" "
}
console.log(serie)
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres=[]
for(let i=0;i<5;i++){
    nombres.push('nombre '+i)
}
for (const element of nombres) {
    console.log(element)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena='murcielago'
let cont=0
let vocales='aeiou'
for (const char of cadena) {
    if(vocales.includes(char)){
        cont++
    }
}
console.log(cont)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let multi=[2,3,4,5,6]
let n=1;

for (const a of multi) {
    n*=a
}
console.log(n)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for(let i=1;i<13;i++){
    console.log('5x'+i+'='+5*i)
}

// 8. Usa un bucle para invertir una cadena de texto 

let texto='hola mundo'

let delreves=''

for(let i=texto.length;i>=0;i--){
    delreves+=texto.charAt(i)
}
console.log(delreves);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

num=1;
let aux=0;
 let fibo=0;

for(let i=1;i<11;i++){
    fibo=num+aux;
    num=fibo
    aux=num;
}
console.log(fibo)


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let myarray=[2,4,8,19,20,30]
let maryor10=[]

for (const a of myarray) {
    if(a>10){
        maryor10.push(a)
    }
    
}
console.log(maryor10)