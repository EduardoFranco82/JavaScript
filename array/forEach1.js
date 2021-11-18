// retorna um callback com indice e nome

const aprovados = ['Ana', 'Edu', 'Paulo', 'Jose']

aprovados.forEach(function(nome,indice){// pode exibir o array como 3 parametro. (nome, indice, array) a partir do 4 da undefined
    console.log(`${indice}) ${nome}`);
})

// DA PRA FAZER PEGANDO SOMENTE O NOME, PASSANDO APENAS 1 PARAMETRO

aprovados.forEach(nome => console.log(nome) )// so pega o nome

// PASSANDO PARA UMA CONSTANTE, DEPOIS CHAMANDO UM FORECAH

const listaDeAprovados = aprovado => console.log(aprovado);// recebe um parametro e exibe ele
aprovados.forEach(listaDeAprovados)// pegou cada nome da lista e exibiu


