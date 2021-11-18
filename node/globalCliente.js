require('./global')// nao precisa atribuir, ja estara disponivel para aplicaçao

console.log(MinhaApp.saudacao());// pode chamar direto , nao precisa colocar o global.MinhaApp  


//O OBJ PODE SER MODIFICADO, TOMAR ATENÇAO COM ISSO, A NAO SER QUE FAÇA UM FREEZE
MinhaApp.nome = 'eduardo modificou'
console.log(MinhaApp.nome);// nesse caso