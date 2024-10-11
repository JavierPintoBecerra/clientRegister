
//Clase cliente para el simulador
class Cliente {
    constructor(nombre, eddad, compras, telefono) {
        this.nombre = nombre
        this.eddad = eddad
        this.compras = compras  // Este es un array con los montos de compras realizadas
        this.telefono = telefono
    }
}

// Método para calcular el total de compras realizadas
totalCompras(){
    return this.compras.reduce((total, compra) => total + compra, 0); 
}

// Método para mostrar la información del cliente

mostrarInfo(){
    console.log(`Nombre: ${this.nombre} \nEdad: ${this.eddad} \nTeléfono: ${this.telefono} \nTotal de compras: ${this.totalCompras()}`)
}