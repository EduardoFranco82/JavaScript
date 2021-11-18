const filhas = ['ana', 'paula']
const filhos = ['carlos', 'ricardo']

const todosFilhos = filhas.concat(filhos, 'eduardo')// da para passar outro parametro para adicionar no arry
console.log(filhas, filhos, todosFilhos);

console.log(['a','b'].concat([1,2],[3,4],5,[[6,7]]));//[ 'a', 'b', 1, 2, 3, 4, 5, [ 6, 7 ] ]