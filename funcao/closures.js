// closures é o escopo criado qunado uma funçao e declaradas
//esse escopo permite a funçao acessar e manipular variaveis externas a funçao 


// contexto lexico em açao
const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora();
console.log(minhaFuncao());// mesmo sendo uma funçao declardo noma variavel, tem que colocar ()
