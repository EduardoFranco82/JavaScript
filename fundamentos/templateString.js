const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!!'

const template = ` 
    Ola 
    ${nome}!`

console.log(concatenacao + template);

// expressoes
console.log(`1 + 1 = ${ 1 + 1}`);

const up = texto => texto.toUpperCase() // arrow function
console.log(`Ei.... ${up('cuidado')}`);

const down = texto => texto.toLowerCase() // arrow
console.log(`Ola tudo bem qual seu nome? ${down(`Eduardo`)}`);