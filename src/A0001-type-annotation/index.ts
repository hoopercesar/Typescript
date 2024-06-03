/* eslint-disable */

let nome: string = 'pepe';
let edad : number = 10;
let adulto : boolean = true;
let simbolo : symbol = Symbol('algun-simbolo');


// arrays

let numberArray : Array<number> = [1, 2, 3];
let numberArray2: number[] = [3, 2, 1];
let stringArray : Array<string> = ['a', 'b'];
let stringArray2 : string[] = ['b', 'a'];

// Objetos
let person: {name: string, age: number, adulto?: boolean} = {
    name: 'pepe',
    age: 30,
}

// functions

function suma(x:number, y:number) {
  return x + y;
}

function suma2(): (x:number, y:number) => number {
  return (x, y) => x + y;
} 

const result = suma2(); 

console.log(result(3,2));