console.log(Math.ceil(1.65));   //usando ponto na funçao Math


// usando ponto como notaçao para criação de instancias de obj
const obj1 = {}
obj1.nome = 'eduardo';
obj1.idade = 55;
obj1.altura = 1.55;
console.log(obj1.nome);


function obj (nome){
    this.nome = nome;

    this.exec = function (){
    console.log('executando...!!!');
    }

    const obj1 = new obj('mesa');
    const obj2 = new obj('cadeira');
    console.log(obj1.nome);
    console.log(obj2.nome);
    obj2.exec()


}

