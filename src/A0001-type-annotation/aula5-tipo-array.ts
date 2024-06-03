// Array <T> - T[] <>

function multiplica(...args: Array<number>): number {
  return args.reduce((arg, valor) => arg * valor, 1);
}

function concatenaString(...args: string[]): string {
  return args.reduce((arg, valor) => arg + valor);
}

console.log(multiplica(1, 2, 3));
console.log(concatenaString('a', 'b', 'c', 'd'));
