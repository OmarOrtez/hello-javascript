/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Crea una clase que reciba dos propiedades

// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 

class movil{
    
    constructor(marca,precio){
        this.marca=marca
        this.precio=precio
    }
    

    descuento(precio){
        let porcentaje=0
        if(precio>=500){
            porcentaje=precio-(precio*0.15)
        }else{
            porcentaje=precio
            console.log('para un descuento el movil tiene que tener un valor mayor o igual a 500€')
            return false
        }
        console.log(`el descuento es ${porcentaje}`)
    }

    static almacen(marca) {
        switch (marca) {
            case 'xiaomi':
                console.log(true)
                break;
            case 'samsung':
                console.log(true)
                break;
            case 'aphon':
                console.log(true)
                break;
            case 'lenovo':
                console.log(false)
                break;

            default:
                console.log('no tenemos esa marca ')
              break;
        }
    }

}

let movil1=new movil('xiaomi',485)
console.log(movil1)
movil1.descuento(movil1.precio)
movil.almacen(movil1.marca)


    class movilVendido extends movil{
        #dni
        #dirreccion
        #contacto
        #bank
        constructor(marca,precio,dni,dirreccion,contacto,bank){
            super(marca,precio)
           this.#dni=dni
            this.#dirreccion=dirreccion
            this.#contacto=contacto
            this.#bank=bank
        }

        get dirreccion(){
            return this.#dirreccion
        }

        set bank(bank){
            return this.#bank=bank
        }
        get bank(){
            return this.#bank
        }
        descuento(precio) {
            let porcentaje = 0;
            if (precio >= 500) {
                porcentaje = precio - (precio * 0.20);  // Mayor descuento para móviles vendidos
                console.log(`Descuento especial para móviles vendidos. El precio con descuento es ${porcentaje}€`);
            } else {
                console.log('No aplica descuento para este móvil.');
            }
        }



    }

    let usuario=new movilVendido('xiaomi',500,'18548060D','calle alberche 10',665313400,'465372842')
    usuario.bank=4653728222
    console.log(usuario.bank)
    console.log(usuario.marca)
    usuario.descuento(usuario.precio)

   




