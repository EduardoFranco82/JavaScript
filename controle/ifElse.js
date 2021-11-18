const imprimirResulatado = function (nota) {
    if (nota > 7) {
        console.log('aprovado ', nota)
    } else {                           // tomar cuidado com o ';'
        console.log('reprovado ', nota)

    }
}

imprimirResulatado(5)
imprimirResulatado(10)
imprimirResulatado('epa!!') // isso vai dar positivo porem != de sete entao vai executar reprovado.