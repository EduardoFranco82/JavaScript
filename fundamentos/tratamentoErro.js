function imprimirNomeGritado (grito){
    try {
        console.log(grito.name.toUpperCase() + ' !!!');
    } catch (i) {

        tratarErroELancar(i)
    } finally{

        console.log('deu certo!!!');

    }
 

}
const grito = { name: 'Eduardo' };// para testar trocar o atributo nome ou name
imprimirNomeGritado(grito);


function tratarErroELancar (i){
    // throw new Error ('....')
    // throw 10
    // throw true
    throw 'eduardo achou um erro'

}