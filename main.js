
calcula_precio()

function calcula_precio() {
    let nombreUsuario= prompt("Ingresa tu nombre");
    if (nombreUsuario != "ESC" ){
        alert(`Estos son nuestros libros en stock ,  ${nombreUsuario}.`+
        " 1 Reino de papel, "+
        " 2 Heartstopper, "+
        " 3 De sangre y cenizas. ");
       let precio= prompt("Ingresa el numero listado del libro a consultar. Si no quieres hacerlo esribe 'ESC'");
        while (precio.toUpperCase() != "ESC"){
            switch(precio.toUpperCase()){
                case "1":
                    alert( "El precio de Reino de papel por unidad es de $2.299,00");
                    const rdp = prompt("Ingresa la cantidad de unidades deseas")
                    total(rdpPrecio(rdp));
                    break;

                case "2":
                    alert( "El precio de Heartstopper por unidad es de $1.999,00");
                    const heartstopper = prompt("Ingresa la cantidad de unidades deseas")
                    total(heartstopperPrecio(heartstopper));
                    break;
                    
                case "3":
                    alert( "El precio de De sangre y cenizas por unidad es de $1.999,00");
                    const dsc = prompt("Ingresa la cantidad de unidades deseas")
                    total(dscPrecio(dsc));
                    break;   
                    
                default:search
                    alert("Actualmente no tenemos stock");
                    break;    
            }

            class Producto{
                constructor(nombre){
                    this.nombre = nombre;
                }
            }
            let listaProductos=[
                {nombre:"Heartstopper", precio: 1999, genero: "Romance"},
                {nombre:"Heartless", precio: 2499, genero: "Romance"},
                {nombre:"De Sangre y Cenizas ", precio: 2990, genero: "Fantasia"},
                {nombre:"Asesino de brujas", precio: 2390, genero: "Romance"},
                {nombre:"Reino de papel", precio: 2299, genero: "Romance"},
                {nombre:"El bosque de las cosasearchs perdidas", precio: 2299, genero: "Misterio"}
            ]

            let filterGenero = prompt("??Que genero buscas?");
            let buscarGenero = listaProductos.filter(producto => producto.genero)
            console.log(buscarGenero);

            let productos = [
               
            ]

            
            const agregaCarrito =() =>{
                let nombre = prompt ("Ingresa el nombre del libro que deseas agregar a tu carrito.")
                let agregado = new Producto(nombre);
                productos. push (agregado);
                console.log(productos)
            }


            
            agregaCarrito()

            let totalCarrito
            productos.forEach(producto => {
                console.log (`Agregaste ${producto.nombre}`)
                totalCarrito 
            })


            precio= prompt ("Si quieres saber el valor de otro libro vuelve a seleccionar el numero listado"+
            " 1 Reino de papel, "+
            " 2 Heartstopper, "+
            " 3 De sangre y cenizas. "+
            "Si ya terminaste tu consulta escribe `ESC`");
        }
    }else{
        alert("Gracias por la consulta")
    }

}

function rdpPrecio (rdp){
    return rdp * 2299;

}

function heartstopperPrecio (heartstopper){
    return heartstopper * 1999;

}

function dscPrecio (dsc){
    return dsc * 2299;

}
 
function total (cantidades){
    alert(`Tu total es de $ ${cantidades}`)
}

