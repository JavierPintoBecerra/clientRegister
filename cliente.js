
//Clase cliente para el simulador
class Cliente {
    constructor(nombre, eddad, compras, telefono) {
        this.nombre = nombre
        this.eddad = eddad
        this.compras = compras  // Este es un array con los montos de compras realizadas
        this.telefono = telefono
    }

    // Método para calcular el total de compras realizadas
    totalCompras(){
        return this.compras.reduce((total, compra) => total + compra, 0); 
    }

    // Método para mostrar la información del cliente

    mostrarInfo(){
        console.log(`Nombre: ${this.nombre} \nEdad: ${this.eddad} \nTeléfono: ${this.telefono} \nTotal de compras: ${this.totalCompras()}`)
    }

}

// Clase para el registro de clientes

class RegistroClientes{
    constructor(){
        this.clientes = []
    }


    // Método para registrar un nuevo cliente
    agregar(cliente){
        this.clientes.push(cliente)
    }

    // Método para buscar por nombre al cliente
    buscarPorNombre(nombre){
        return this.clientes.filter(cliente => cliente.nombre.toLowerCase() === nombre.toLowerCase());
    }

    // Método para buscar clientes por edad
    buscarPorEdad(edad){
        return this.clientes.filter(cliente => cliente.edad === edad);
    }

    //Método para categorizar clientes según sus compras

    categorizarClientes(){
        this.clientes.forEach(cliente => {
            const totalCompras = cliente.totalCompras();
            if (totalCompras > 1000) {
                console.log(`El cliente ${cliente.nombre} es un cliente VIP`); 
        } else if (totalCompras > 500) {
            console.log(`El cliente ${cliente.nombre} es un cliente Gold`);
        } else {
            console.log(`El cliente ${cliente.nombre} es un cliente nuevo o de bajo consumo`);
        }
    });

    }
}