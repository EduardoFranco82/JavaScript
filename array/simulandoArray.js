const quaseArray = { 0: 'Ana', 1: 'Bia', 2: 'Rafael'}

console.log(quaseArray);

Object.defineProperty(quaseArray,
    'toString', {
        value: function (){
            return Object.values(this)
        },
        enumerable: false
    })

    console.log(quaseArray[1]);// bia

    const meuArray = ['Ana','Bia','Rafael']
    console.log(meuArray.toString(), meuArray);