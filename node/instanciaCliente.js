const contadorA = require('./instanciaUnica')// toda vez que chamar incrementa, e o resultado tambem vai para variavel B
const contadorB = require('./instanciaUnica')



const contadorC = require('./instanciaNova')()// funçao factori retornando obj
const contadorD = require('./instanciaNova')()// funçao factori retornando obj


contadorA.inc()//2
contadorA.inc()//3
console.log(contadorB.valor);//3 

contadorC.inc()// incrementa so o C
contadorC.inc()// incrementa so o C
console.log(contadorD.valor);//1 pq nao foi incrementado
console.log(contadorC.valor)//3 pq foi incrementado 2x

// RESUMINDO, É MELHOR CRIAR FACTORY PARA NAO CAIR NA PEGADINHA DE CASHING