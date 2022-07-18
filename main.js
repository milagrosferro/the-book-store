
calcula_precio()

function calcula_precio() {
    let nombre= prompt("Ingresa tu nombre");
    if (nombre != "ESC" ){
        alert(`Estos son nuestros libros en stock ,  ${nombre}.`+
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
                    
                default:
                    alert("Actualmente no tenemos stock");
                    break;    
            }

            class Producto{
                constructor(nombre){
                    this.nombre = nombre;
                }
            }
            let productos = []
            
            const agregaCarrito =() =>{
                let nombre = prompt ("Ingresa el nombre del libro que deseas agregar a tu carrito.")
            
                let agregado = new Producto(nombre);
                productos. push (agregado);
                console.log(productos)
            }
            
            agregaCarrito()

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

