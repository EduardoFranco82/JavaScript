// array é dinamico e heterogênio. Aceita varios tipos

const valores = [9.1, 8.4, 6.5, 7.2]
console.log(valores[0], valores[3]);
console.log(valores[4]);// retorna undefined


valores[4] = 2.9; // inserindo um valor no array
console.log(valores);
console.log(valores.length);

valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop());
console.log(valores)
console.log(valores.pop());
console.log(valores);

delete valores[0];
console.log(valores);

valores.push("eduardo")
console.log(valores);

valores[0]= 'vida'
console.log(valores);

console.log(typeof valores);// array em js e um tipo objeto

