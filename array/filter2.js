Array.prototype.filter2 = function(callback){
    const newArray =[]
    for(let i=0; i< this.length; i++){
        if (callback(this[i], i, this)){

            newArray.push(this[i])
        }
    }
return newArray

}




const produtos = [

    {nome : "notebook"          , preco: 2499, fragil: true },
    {nome :"ipad"               , preco: 4199, fragil: true },
    {nome : "copo de vidro"     , preco: 12.49, fragil: true},
    {nome : "copo de plastico"  , preco: 18.99, fragil: false},
    
    ]
  
        
    const caro = p => p.preco >= 500
    const fragil = p => p.fragil // ou p.fragil == true
    
    console.log(produtos.filter2(caro).filter2(fragil));// retorna o array inteiro