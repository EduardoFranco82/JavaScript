const fs = require('fs');// filesistem ou fs já e um modulo interno do node
const caminho = __dirname + '/arquivo.json'// __dirname = diretorio atual


//FORMA SINCRONA (NAO RECOMENDDADA) POIS VAI TER QUE ESPERAR ATE CHAMAR A OUTRA

const conteudo = fs.readFileSync(caminho,'utf-8')// se for arquivo grande vai demorar demais para ler

console.log(conteudo);

//FORMA ASSINCRONA IDEAL A SE FAZER USANDO UMA CALLBACK, VAI MANDAR A REQ, QUANDO O ARQUIVO ESTIVER PREPARADO, ELE RETORNA

fs.readFile(caminho,'utf-8',(err,conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);
})

// JA LENDO NO FORMATO JSON DIRETO

const config = require('./arquivo.json')// tem que colocar certo, arquivo.json
console.log(config.db);// foi executado antes do outro de cima por ser sincrono

//LEITURA DE PASTA, BEM SIMPLES

fs.readdir(__dirname,(err,eduardo)=>{//__dirname representa o diretorio atual
    console.log('conteudo da pasta...');
    console.log(eduardo);
})