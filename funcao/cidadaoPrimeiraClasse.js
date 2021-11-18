// Funçao em JS é firs-class Object (Citizens)
//Higer-order Function

// criar em forma literal

function fun1(){}

//Armazenar em uma variavel

const fun2 = function(){}

// Armazenar em um Array 
const array = [function(a,b){return a + b;}, fun1, fun2];
console.log(array[0](2,3));

// Armazenar em um atributo de obj

const obj = {}
obj.name = function(){return 'eduardo'}
console.log(obj.name());

// Passar funçao como parametro de outra funçao

function fun5(fun6){
    fun6()

}
fun5(function fun6(){console.log('bom dia!!');})// atencao. precisa declarar funçao como parametro

// uma funçao pode retornar / conter outra funçao
function soma(a,b){
    return function(c){
        console.log(a + b + c);
    }

}
soma ( 2,3)(4);

const cincoMais = soma (2,3)
cincoMais(4);