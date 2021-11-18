const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

// sem callback

const notasBaixas1 = []

for (let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i]);
    }

}
console.log(notasBaixas1);

// com callback

const notasBaixas2 = notas.filter(function(notaConquistada){
    return notaConquistada <7
})
console.log(notasBaixas2);

// exemplo com arrow

const notasMenorQue7 = notaQualquer => notaQualquer < 7
const notasBaixas3 = notas.filter(notasMenorQue7) // muito mais facil. Quando percorrer os arrays chame a funçao. isso e callback
console.log(notasBaixas3); 


