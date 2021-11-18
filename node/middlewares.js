// PADRAO CHAIN OF RESPONSIBILITY, USADO NO EXPRESS, ONDE UMA FUNÇAO CHAMA A OUTRA ATRAVES DO NEXT

// EXEMPLIFICANDO O PADRAO MIDDLEWARES

const passo1 = (ctx, next) => {// o parametro ctx é o obj que esta sendo enviado de uma funçao a outra
    ctx.nome = 'eduardo',
    next()
}

const passo2 = (ctx, next) => {
    ctx.cidade = 'Itanhandu'
    next()
}

const passo3 = ctx => ctx.cep = 37464000

const exec = (ctx, ...middlewares) =>{
    const execPasso = indice =>{// execute os passos de indices 0,1,....
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1))
    }// se o array estiver setado e indice< que array
    execPasso(0)// sempre começa pelo passo 0
}
const ctx = {}
exec (ctx,passo1, passo2, passo3)// pode trocar os passos, isso e middleware
console.log(ctx);