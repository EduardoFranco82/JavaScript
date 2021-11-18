const porta = 3003

const express = require ( 'express' )
const app = express()
const bodyParser = require ( 'body-parser' )
const bancoDeDados = require ('./bancoDeDados')

app.use(bodyParser.urlencoded({extended : true}))// vai disparar e se o padrao for urlencoded ele resolve
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



app.get('/produtos',(req, res,next)=>{
    res.send(bancoDeDados.getProdutos())
})


app.get('/produtos/:id',(req, res, next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos',(req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})
// fazer o put para alterar
app.put('/produtos/:id',(req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})
// fazendo delente para excluir

app.delete('/produtos/:id',(req, res, next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)//JSON
})





//PARA PRIMEIRO EXEMPLO DA PRIMEIRA AULA, DESCOMENTAR 3 LINHAS
// app.get('/produtos',(req, res,next) => {// usando middlewares, porem sem o next
//     res.send({nome:'produto', preco : 123.45})// converte para json automaticamente
// })
// com use, nao precisa passa /produtos, ele atende todas url
// app.use((req, res,next) => {// usando middlewares, porem sem o next
//     res.send({nome:'produto', preco : 123.45})// converte para json automaticamente
// })

app.listen(porta, () => {
    console.log(`Executando com nodemon na porta ${porta}`)
})


// resumo da aula

// criou projeto
// npm init -y para criar o arquivo json
// npm i --save express@4.16.2 -E //para instalar a versao exata do express
// criar dentro do projeto uma pasta para codigo fonte src
// dentro de src o arquivo servidor.js // para configurar o servidor express. Express para trabalhar com servidor node

// const porta = 3003
// const express = require ( 'express' )
// const app = express()

// dentro de packege.json
//  "main": "src/servidor.js",
//   "scripts": {
//     "start": "nodemon",
// caso nao tenha salvo ainda o nodemon no projeto: npm i --save nodemon
// melhor instalar em dev- npm i --save-dev nodemon@1.14.11 -E 

// "scripts": {
//     "start": "nodemon",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "express": "4.16.2"
//   },

// "devDependencies": {
//   "nodemon": "1.14.11"
// }
// }
//  depois disso, qualquer mudança que eu faça no servidor.js ele restarta o nodemon.

// no postman http://localhost:3003/produtos no método get depois pressiona send

// com use, nao precisa passa /produtos, ele atende todas url
// app.use((req, res,next) => {// usando middlewares, porem sem o next
//     res.send({nome:'produto', preco : 123.45})// converte para json automaticamente
// })

//usando postman
// depois de resolvido, basta usar post mudar nome e valor e acrescentar produtos.
// se colocar get em produtos, vai devolver todos posts que fiz
//http://localhost:3003/produtos/3 // para pegar o produto de id 3
