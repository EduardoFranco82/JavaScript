const sequencia = {
    _valor: 1, // isso e uma convençao para falar que e atributo privado

    get valor() { return this._valor++; }, // apenas pegando o valor padrao
    set valor(valor) {
        if (valor > this._valor) {// mudando o valor padrao usando set
          return  this._valor = valor;
        } 
    }

}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000; // fazendo set ou setando o valor
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 200; // fazendo set ou setando o valor
console.log(sequencia.valor, sequencia.valor);