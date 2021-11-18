console.log(module.exports === this); // true
console.log(module.exports === exports); // true

this.a =1
exports.b =2
module.exports.c =3

exports = 55; // nao vai alterar, porque o que tem mais força e o module.export portanto da a=1, b=2,c=3
                // vai pegar o de cima
console.log(module.exports);

exports ={
    nome:'teste'
}
console.log(module.exports);// tambem pega a1 b2 c3

module.exports = {public :true}