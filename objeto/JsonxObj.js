// json e um formato textual que qualquer linguagem consegue interpretation
// e um formato de dados. NAO TEM FUNÇAO

const obj = { a:1, b:2, c:3,  soma() {return a + b + c }}

console.log(JSON.stringify(obj));// A FUNCAO NAO ENTRA

// OBEJTO GERADO A PARTIR DE UM JSON 

console.log(JSON.parse('{"a":1,"b":2,"c":3}'));// tem que respeitar o formato JSON. '' DEPOIS ""
                                                // TRASNFORMOU EM OBJ
// O QUE SUPORTA
console.log(JSON.parse('{"a":1.3,"b":"STRING","c":true,"d":{}, "e":[]}'));// tudo formato valido
