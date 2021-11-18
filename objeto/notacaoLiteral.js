// sempre lembrar do conceito [chave]: valor

const a = 1
const b = 2
const c = 3

// e a mesma coisa. so que o mais de baixo e moderno
const obj1 = { a:a , b:b, c:c }
const obj2 = { a, b, c }
console.log(obj1, obj2);

//outra forma de atribuir

const nomeAtrr = 'nota'
const valorAtrr = 1000

const obj3 = {}
obj3[nomeAtrr] = valorAtrr// lembrar de [chave]: valor
console.log(obj3);

const obj4 = {[nomeAtrr]:valorAtrr}
console.log(obj4);

const obj5 = {
    funcao1: function () {
        //------
    }, 
    funcao2(){
        //-------
    }

}
console.log(obj5);