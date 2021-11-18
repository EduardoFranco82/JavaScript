// Object.preventExtensions

const produto = Object.preventExtensions(
    {
        nome: 'qualquer',
        preco: 1.99,
        tag: 'promoçao'
        
    })

    produto.nome = 'borracha'// permite 
    produto.descricao = 'borracha escolar branca'// nao permite
    delete produto.tag// permite 
    console.log(produto);

    //Object.seal

    const pessoa = { nome: 'juliana', idade: 35}

    Object.seal(pessoa);// permite mudar apenas os valores, nao deleta, nao adiciona
    console.log('Selado:' , Object.isSealed(pessoa));

    pessoa.sobrenome = 'silva';//nao vai setar, pois nao adiciona
    delete pessoa.nome;// nao vai setar, pois nao deleta
    pessoa.idade = 29 // vai alterar

    console.log(pessoa);

