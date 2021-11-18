const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {

        console.log(i);
    })

}

funcs[2]()// imprimiu 2
funcs[6]() // imprimiu6 pq let tem escopo de bloco, entao guarda valor