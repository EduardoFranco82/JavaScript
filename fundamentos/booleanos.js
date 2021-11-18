let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// Se negar algum elemento 2 x torna-o booleano verdadeiro 
// Se negar uma vez o torna falso

// os que se tornam verdadeiro 
isAtivo = 1
console.log(!isAtivo);
console.log(!!isAtivo);

console.log("os que viram para verdadeiro");
console.log(!!3);
console.log(!! -1);
console.log(!! ' ');
console.log(!! 'texto');
console.log(!! []);
console.log(!! {});
console.log(!! {});
console.log(!! Infinity);
console.log(!!(isAtivo = true));

console.log(' ');

console.log("os que viram para falso");
console.log(!!0);
console.log(!!'');
console.log(!! null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log(" ");
console.log('pra finalizar, comparaçoes com ||');

console.log(!!(''|| null || 0 || 'epa ')); // assim retorna verdadeiro ou falso
console.log((''|| null || 0 || 'epa ')); // assim retorna o primeiro valor verdadeiro


// Fazendo teste com || 
let carro = 'fusca'

console.log(carro || "vendido");// nesse caso retorna vendido com carro = ''
console.log(carro || "vendido");