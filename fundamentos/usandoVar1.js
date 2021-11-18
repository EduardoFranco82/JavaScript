{
    {
        {
            {
                var sera = 'Será'// No caso do VAR, ele sera rodado mesmo fora do bloco.*** com exceçao de funçoes
                console.log(sera); 

            }
        }
    }
}
console.log(sera);// No caso do VAR, ele sera rodado mesmo fora do bloco.*** com excecao de funçoes


function teste (){
    var local = 123
    console.log(local);    
}

teste();
//console.log(local);

// o Var tem 2 escopos, ou global, ou dentro de uma funçao.
// evitar criar variaveis com var