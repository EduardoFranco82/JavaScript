let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global);// true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)//false
comparaComThis(obj)//true

//funçao arrow aponta para modulo atual com this
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global)// false
comparaComThisArrow(module.exports)//true

// forçar uma funçao arrow para apontar para um obj
comparaComThisArrow = comparaComThisArrow.bind(obj) 
comparaComThisArrow(obj)//false
comparaComThisArrow(module.exports)//true