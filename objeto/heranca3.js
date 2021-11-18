const pai = {nome : 'Pedro', corCabelo : 'preto'}

const filha1 = Object.create(pai)
filha1.nome ='ana livia'
console.log(filha1.nome);

const filha2 = Object.create(pai, { nome:{ value:'bia', writable: false, enumerable: true}})

console.log(filha2.nome);
filha2.nome = 'alice'
console.log(`${filha2.nome} tem cabelo ${filha2.cabelo}`);


console.log(Object.keys(filha1));// pega as chaves existentes
console.log(Object.keys(filha2));// pega as chaves existentes

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`)// pra ver se vem por herança ou nao
}


