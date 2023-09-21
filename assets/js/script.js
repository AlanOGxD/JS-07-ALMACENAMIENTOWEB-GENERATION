/*
API de almacenamiento web


Nos permite almacenar informacion en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesion (los datos son volatiles)


Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.
*/



/*
Almacenamiento Local (localStorage)


La informacion que pongamos en un almacenamiento local se guarda indefinidiamente hasta que sea eliminada por codigo o borrada del navegador.

Casos de uso: articulos de un carrito de compras, guardamos un perfil de configuracion, historial de uso.
*/

//Guardando mi primer dato en LocalStorage
//LocalStorage.setItem(key, value);

localStorage.setItem("Nombre", "Felipe");
localStorage.setItem("Apellido", "Maqueda");
localStorage.setItem("Edad", "31");



//Guardando un carrito de compras
let carritoComprasFelipe = ["Sabritones", "CocaCola", "Chicles", "Tortillas"];


localStorage.setItem("CarritoCompras", carritoComprasFelipe);


let apellido = localStorage.getItem("Apellido");
console.log(apellido);

//recuperando el carrito de compras
let carrito = localStorage.getItem("CarritoCompras");
console.log(carrito);

//borrar un elemento del LocalStorage
//LocalStorage,removeitem(key)
localStorage.removeItem("CarritoCompras");


//conocer el largo o longitud del localStorage
//localstorage.lenght

let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);

//para modificar datos con set
localStorage.setItem("Apellido", "Gonzales");


