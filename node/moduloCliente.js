// BACK END TRABALHA EXPORTANDO PASTAS, ARQUIVOS, E IMPORTANDO EM OUTRAS PASTAS
// esse modulo que vai receber de outros. Sempre que usar Cliete, esse vai receber 
// para quando estiver na mesma pasta
const moduloA = require('./moduloA')// NAO PRECISA POR .JS
const moduloB = require('./moduloB');

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);// retorna um objeto inteiro

console.log(moduloB.boaNoite);//[Function: boaNoite]
console.log(moduloB.boaNoite());//Boa noite
console.log(moduloB.bomDia);
console.log(moduloB);//{ bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }
