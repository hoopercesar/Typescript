// las funciones del tipo void no retornan nada
// que una función retorne un void significa que el retorno es vacío
// es decir, no se asignar a otra variable el retorno de essa función.
// acá abajo un ejemplo. 

function funcionVoid(...args: string): void {
  console.log(args.join(' '));
}

funcionVoid('pepe', 'lucho');


const persona = {
  name: 'guan',
  surname: 'soto',
  
  mostrarName(): void {
    console.log(this.name + '' + this.surname);
  }
};

persona.mostrarName();


