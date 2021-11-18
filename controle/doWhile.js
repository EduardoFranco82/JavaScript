function getValorAleatorio (min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

let numeroaleatorio = 0;// nao precisa inicializar a variavel
do {
numeroaleatorio = getValorAleatorio(-1, 10)
console.log(` o valor sorteado foi ${ numeroaleatorio }`);

}while (numeroaleatorio != -1)

console.log('fim de jogo');