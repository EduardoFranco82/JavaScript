// funçao factor e uma funçao que retorna um object

module.exports = () => { 
    return { 
        valor:1, 
        inc (){
            this.valor++
        }
    }
}