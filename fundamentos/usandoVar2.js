var numero = 1;

{
    var numero = 2;
    console.log('dentro :' , numero); // 2, pois sobrescreveu
}

console.log('fora :' , numero); // 2, pois sobrescreveu

// fuja do escopo global sempre