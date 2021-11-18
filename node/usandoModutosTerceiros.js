// node -v => para ver a versao do node
// npm -v  => para ver a versao do npm => gerenciador de pacotes do node
// responsavel por baixar bibliotecas de tereceiros => ex. npm i jquery
//npm i lodash. ele instala e cria um node_modules, e dentro dele, o lodash
// node_module e muito grande, nao faz sentido mandar pro github, entao cria o .gitignore e coloca node_modules la dentro
// lodash muito bom para trabalhar com numeros e arrays. verificar depois q


const _ = require('lodash')// para referencia lodash, usa-se "_"
setInterval(() => console.log(_.random(1,5)),2000)// set interval recebe uma funçao. _.randow e uma funçao de lodash

// AGORA INSTALAR UMA BLIBLIOTECA DE MODO GLOBAL, OU SEJA, NAO ESTARA DENTRO DO node_modules

// instalar o nodemon
// npm i -g "global" nodemon instalando na pasta raiz, ou seja exercicios-js
// aagora eu entro na pasta node, e dou nodemon usandoModulosTerceiros.js 
// rs => comando que restarta o nodemon