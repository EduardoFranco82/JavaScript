function area (altura, largura){

   const area = altura * largura;// uma coisa e o nome da funcao, outra coisa e a variavel dentro da fun.
    if(area > 20){
        console.log(`não é permitido area maior que 20. sua area foi ${area} m²`);
    }else{
        return area;
    }

}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,27,42,44))
console.log(area(5,5))