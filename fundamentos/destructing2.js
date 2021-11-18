const [a] = [10];
console.log(a);

const [n1,,n3,,n5,n6= 0]  = [10,7,9,8] // a referencia vai por indice.
console.log(n1,n3,n5,n6); // 10,9,undefined,0


const [[,b,c],[,nota]]= [[,8,15] ,[9,6,8]]
console.log(b,nota,c);