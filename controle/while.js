function getValorAleatorio (min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){

    opcao = getValorAleatorio (-1 , 10) // atencao que tem que colocar novos valores na variavel
    console.log(`o valor sorteado foi ${opcao}`);

}
console.log('fim de jogo');