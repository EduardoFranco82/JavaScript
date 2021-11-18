var numero = 1;

{
    let numero = 2;
    console.log('dentro :' , numero); // 2 let tem escopo de bloco, alem de global e funçao
}

console.log('fora :' , numero); //1

