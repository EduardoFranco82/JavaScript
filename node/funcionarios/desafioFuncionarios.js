const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')// axios e um cliente para fazer requisiçoes http. ECMSP NOVO  // PEGAR ALGUM DADO DE UM SERVIDOR EXTERNO

// DESAFIO, NESTE JSON, PEGAR MULHER, CHINESA, MENOR SALARIOS
// FAZER COM FILTER, FILTER, REDUCE.

const mulher = mulher => mulher.genero === 'F'
const chines = chines => chines.pais === 'China'
const menorSalario = (func, funcAtual)=> {

    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response =>{
    const funcionarios = response.data;
    console.log(funcionarios);

    //mulher chinesa com menor salario 
    const func = funcionarios.filter(chines).filter(mulher).reduce(menorSalario)
    console.log(func);

} )


