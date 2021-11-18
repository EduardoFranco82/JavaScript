console.log(typeof String);// function
console.log(typeof Array);// function
console.log(typeof Object);// function

String.prototype.reverse = function(){
return this.split('').reverse().join('');
}
console.log('eduardo de jesus'.reverse());

Array.prototype.first = function(){
    return this[0]
}
console.log([1,2,3,4,5].first());
console.log(['a', 'b', 'c', 'd', 'e'].first());

String.prototype.toString = function(){// vai mudar o tostring, posso chamar eduardo, mas vai mudar o lascou tudo
    return 'Lascou tudo'                // nao substitua compartamento global
}

console.log('eduardo de jesus'.reverse());
