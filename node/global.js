// assim como window é objeto global do navegador, do node é global

// NOTE-SE QUE NO GLOBAL, NAO NECESSITA FAZER O EXPORT
global.MinhaApp = {
    saudacao(){

        return 'Estou em todos os lugares'
    },
    nome : 'sistema legal'
}

// COLOCANDO UM FREEZE PARA NAO MODIFICAR EM OUTROS ARQUIVOS

// global.MinhaApp = Object.freeze ({
//     saudacao(){

//         return 'Estou em todos os lugares'
//     },
//     nome : 'sistema legal'
// })