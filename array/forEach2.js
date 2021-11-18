Array.prototype.forEach2 = function(callback) {
     for (let i = 0; i < this.length; i++){
         callback(this[i],i,this)
     }}


const aprovados = ['Ana', 'Edu', 'Paulo', 'Jose']

aprovados.forEach2(function(nome,indice){// pode exibir o array como 3 parametro. (nome, indice, array) a partir do 4 da undefined
    console.log(`${indice}) ${nome}`);
})