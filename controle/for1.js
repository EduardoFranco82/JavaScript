// fazendo um contador com while

let contador = 1

while (contador <= 10){
    console.log(`o numero é ${contador}`);
    contador++
}

// fazendo com for

for (let i = 0; i <= 10; i++) { // fazendo o i como variavel normal, considerando o i uma variavel
    console.log(`o numero é ${i}`);

}

// fazendo com array

const array = [6.9, 9.5, 4.2, 1.0];
for (i = 0; i <= array.length; i++) {
    console.log(`os índices do array sao: ${i} = ${ array[i]}`); // se colocar so o i pega os indices, 
                                                        // se colocar o valor da const + i pega o valor
}