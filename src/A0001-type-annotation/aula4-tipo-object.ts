const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  [key: string]: unknown; // se usa cuando se genera un string desconocido
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveC = 'Valor C';
objetoA.chaveD = 'Valor D';
objetoA.chaveH = 'Valor H';
objetoA.chaveM = 'Valor M';
objetoA.chaveA = 'Valor GUGU';

console.log(objetoA);
