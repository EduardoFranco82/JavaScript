const escola = "Cod3r"
console.log(escola.charAt(3));
console.log(escola.charAt(5));// nao da resposta alguma
console.log(escola.charCodeAt(3));// da o codigo na tabela asc
console.log(escola.indexOf(3)); // da o indice de

console.log(escola.substring(1));// corta a primeira letra
console.log(escola.substring(0,3)); // começa na primeira e para na segunda


console.log("Escola ".concat(escola).concat(" !!"));
console.log("Escola " + escola + " !!");
console.log(escola.replace("C", "x"));

console.log("Ana, Maria, Juliana".split(","));