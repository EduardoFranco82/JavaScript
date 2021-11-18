const valor = 'Global'

function minhaFuncao() {
    console.log(valor);
}
minhaFuncao();// mesmo nao tendo parametro, reconheceu a variavel global


function exec(){
    const valor = 'local'
    minhaFuncao()
}

exec();// executa o valor global, nao local, pois no contexto lexico, a funçao chamada enxerga o lugar onde foi declarada