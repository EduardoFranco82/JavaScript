const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {

        console.log(i);
    })

}

funcs[2]()// teria que imprimir 2, mas imprime 10, pelo fato de var ter escopo global
funcs[6]() // teria que imprimir 6, mas imprime 10, pelo fato de var ter escopo global