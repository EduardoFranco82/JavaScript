// estrategia 1 para gerar valor padrao
function soma(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

console.log(soma(), soma(3), soma(1, 2, 3), soma(0, 0, 0));// 0,0,0 ao inves de somar igual a 0, ele resulta
                                                        // 3 pois, 0 entende como negativo
// estrategia 2,3,4 para gerar valor padrao
function soma2(a, b, c){
    a= a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c ;

    return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));// nesse caso consegue somar 0 0 0

// valor padrao para colocar em parametro de funçao es2015

function soma3(a =1, b=1, c=1){
    return a + b+ c;
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));// bem mais facil

