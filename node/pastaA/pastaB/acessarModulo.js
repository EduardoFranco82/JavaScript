// ACESSANDO OUTRO MODULOA CAMINHO RELATIVO
const moduloA = require('../../moduloA')

// ACESSANDO PELO CAMINHO ABSOLUTO, NAO ACONSELHAVEL, VAI EMCIMA DA PASTA E CLICA COM BOTAO DIREITO
//const moduloA = require('../../mnode\moduloA.jsoduloA')


console.log(moduloA.ola);

// ATRAVES DO NODEMODULE TAMBEM E POSSIVEL CRIAR E ACESSAR ARQUIVOS
//CRIEI UMA PASTA NO NODE.MODULE, CRIEI UM ARQUIVO INDEX.JS E FIZ UM OBJETO COM MODULE.EXPORTE
// NAO FAZER ASSIM, ESSES ARQUIVOS SERÃO GERADOS NO JSON

const saudacao = require('saudacao');// como veio do node.modules, basta chamar direto
console.log(saudacao.ola);

// IMPORTANDO NO PADRAO INDEX OU SEJA, VC NAO PRECISA REFERENCIAR O INDEX

const c = require('./pastaC')
console.log(c.ola2);



// TAMBEM DA PRA IMPORTAR OS MODULOS INTERNOS DO NODE COMO https

const http = require('http');
http.createServer((req,res)=>{
    res.write('Bom dia no servidor')
    res.end()
}).listen(8080);

// localhost8080