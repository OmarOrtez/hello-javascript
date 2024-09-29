/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let name='omara'
if(name=='omar'){
    console.log(name)
}else{
    console.log('sin considenacia')
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario='admin'
let constraseña='1234'

if(usuario=='admin' && constraseña=='1234'){
console.log('autentificacion correcta')
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero=0

if(numero>0){
    console.log('positivo')
}else if(numero<0){
    console.log('el numero es negativo')

}else {
    console.log('el numero es 0')
}




// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad=19
if(edad>=18){
    console.log("puedes votar")
}else {
    console.log('no puedes votar te falta '+(18-edad)+' años')
}



// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let menatalidad= edad>18 ? console.log('adulto') : console.log('menor')


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes=11;

if (mes >= 6 && mes < 10) {
    console.log('verano')
} else if (mes >= 10 && mes <= 12) {
    console.log('otoño')
} else if (mes >= 1 && mes <= 3) {
    console.log('invierno')
} else if (mes > 3 && mes < 6) {
    console.log('primavera')
}
 // enero=1 febrero=2 marzo=3 abril=4 mayo=5 junio=6 julio=7 agosto=8 septiembre=9 obtubre=10 noviembre=11 diciembre=12




// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes==1 || mes==3 || mes==5||mes==6||mes==8 ||mes==10||mes==12){
    console.log('tienen 31 dias')
}else if(mes==4  || mes==6 || mes==9 ||mes==11){
    console.log('tienen 30 dias ')
}else{
    console.log('28 dias y en visiesto 29')
}



// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma='ingles'

switch(idioma){
case 'español':
            console.log('buenos dias')
    break;
case 'ingles':
        console.log('good morning')
    break;

}




// 9. Usa un switch para hacer de nuevo el ejercicio 6




switch (mes) {
    case 1:
        console.log('invierno')
        break;
    case 2:
        console.log('invierno')
        break;

    case 3 :
        console.log('invierno')
        break;
    case 4:
        console.log('primavera')
        break;
    case 5:
        console.log('primavera')
        break;
    case 6:
        console.log('verano')
        break;
    case 7:
        console.log('verano')
        break;
    case 8:
        console.log('verano')
        break;
    case 9:
        console.log('verano')
        break;
    case 10:
        console.log('otoño')
        break;
    case 11:
        console.log('otoño')
        break;
    case 12:
        console.log('otoño')
        break;
   
    default:
    console.log('mes incorrecto')

}


// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
    case 1:
        console.log('31 dias')
        break;
    case 2:
        console.log('28 dias')
        break;

    case 3 :
        console.log('31 dias')
        break;
    case 4:
        console.log('30 dias')
        break;
    case 5:
        console.log('31 dias')
        break;
    case 6:
        console.log('30 dias')
        break;
    case 7:
        console.log('31 dias')
        break;
    case 8:
        console.log('31 dias')
        break;
    case 9:
        console.log('30 dias')
        break;
    case 10:
        console.log('31 dias')
        break;
    case 11:
        console.log('30 dias')
        break;
    case 12:
        console.log('31 dias')
        break;
   
    default:
    console.log('mes incorrecto')

}