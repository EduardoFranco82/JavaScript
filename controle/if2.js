function teste1(numero) {
    if (numero > 7)
        console.log('maior que 7: ', numero);// o If sem chaves, pode ter 1 bloco associado a ele
    console.log('final'); // esse bloco nao esta associado ao If. Sempre será executado

}

// teste1(5)
// teste1(15)

function teste2 (outronumero){
    if(outronumero > 7) ;       // nao usar ; em estruturas de controle. nesse caso,
    {                           // o if esta sem bloco de execuçao, finalizando no ';'
        console.log(outronumero)// o bloco console.log esta executando tudo, pq nao esta associado ao if
    }
}

teste2(6) // vai executar
teste2(8) // vai executar

