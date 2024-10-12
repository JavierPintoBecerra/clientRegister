
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

    // Método para mostrar la información de todos los clientes
    mostrarClientes(){
        for (let cliente of this.clientes){
            cliente.mostrarInfo();
        }
    }
}


// Crear clientes

const cliente1 = new Cliente("Juan", 30, [100, 200, 300], 123456789);
const cliente2 = new Cliente("Pedro", 25, [200, 300], 987654321);
const cliente3 = new Cliente("Maria", 35, [500, 600], 456789123);

// Crear registro de clientes

const registro = new RegistroClientes();

// Agregar clientes

registro.agregar(cliente1);
registro.agregar(cliente2);
registro.agregar(cliente3);

// Mostrar todos los clientes

console.log("Todos los clientes en el registro:");
registro.mostrarClientes();

// Buscar cliente por nombre 

console.log("\nBuscar cliente por nombre:");
const encotnrarPorNombre = registro.buscarPorNombre("pedro");
encotnrarPorNombre.forEach(cliente => {
    cliente.mostrarInfo();
})

// Buscar cliente por edad

console.log("\nBuscar cliente por edad:");
const encotnrarPorEdad = registro.buscarPorEdad(30);
encotnrarPorEdad.forEach(cliente => {
    cliente.mostrarInfo();
})

// Categorizar clientes por compras

console.log("\nCategorizar clientes por compras:");
registro.categorizarClientes();
