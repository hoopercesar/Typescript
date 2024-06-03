let x; // x es tipo any

if (typeof x === 'undefined') x = 20; // aquí x es number porque lo definí como número después del if

x = 'hola'; // ahora x es un string
console.log(x);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
 firstName: string;
 lastName?: string;
}{
 return {
    firstName,
    lastName,
 };
}

console.log(createPerson('juan', 5));

export function squareOf(x: any) {
  if (typeof x === 'number') {
    return x * x;
  }
  return null;
}


const squareofTwo = squareOf(5);

if (squareofTwo === null) {
  console.log('Argumento no es un número');
} else {
  console.log(squareofTwo);
};


