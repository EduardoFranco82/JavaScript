// v e v = v
// v e f = f
// f e ? = f

// f ou f = f
// v ou f = v
// v ou ? = v

 // ou exclusivo

// v xor v = f
// f xor v = v // operador binario 
// v xor f = v
// f xor f = f 

// !v = f // operador unario
// !f = v

function compras (trabalho1, trabalho2) {
    const comprarSorverte = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV32 = trabalho1 != trabalho2 
    const ficarSaudavel = !comprarSorverte

    return { comprarSorverte, comprarTV50, comprarTV32, ficarSaudavel}// para retornar um obj de constantes, nas precisa comprarSorvete: comprarSorvete

}

console.log(compras(true,true))