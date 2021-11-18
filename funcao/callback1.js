const fabricantes = ['mercedes', 'bmw', 'audi'];

function imprimir (nome, indice){
    	
    console.log(`${indice + 1}. ${nome}`);

}
fabricantes.forEach(imprimir );
// essa funçao e call back, por que fica chamando cada indice do array

fabricantes.forEach(fabricante => console.log(fabricante))// for each pega sempre o conteudo