const imprimirResultado = function (valor) {

    switch (Math.floor(valor)) {

        case 10: case 9:
            console.log('Medalha de honra')
            // break                        // se tirar o break, ele tambem executa o de baixo
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:                        // nao e obg a colocar default, mas funciona como um else
            console.log('nota invalida')

    }


}

imprimirResultado(10)
// imprimirResultado(9)
// imprimirResultado(1)
