function showMessage(mensaje: any) {
  return mensaje;
};
// any es cualquier cosa. puede retornar arreglo, numero, string, etc.
// puede ocasionar problemas, pero es ´util cuando uno necesita
// retornar una variable tanto numérica o string, que da lo mismo qué tipo de variable es.
console.log(showMessage('poto'));
console.log(showMessage([1, 2, 3]));
console.log(showMessage(1));



