// tupla, para crear arrays con diferentes tipos string, number, etc

const datosCliente1: readonly [number, string] = [1, 'pepe'];
const datosCliente2: [number, string, string?] = [1, 'pepe'];

// algo
const datosCliente3: [number, string, ...string[]] = [1, 'pepe', 'algo', 'mas'];

console.log(datosCliente1);
console.log(datosCliente3);
