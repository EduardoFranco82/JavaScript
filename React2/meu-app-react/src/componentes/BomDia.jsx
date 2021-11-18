import React from 'react';
// PASSANDO PARAMETROS PARA OS COMPONENTES


// NO CASO DE ARRAY, PRECISA PASSAR UMA KEY, PARA OTIMIZAR O PROCESSO NA DOM
export default props => [
<h1 key = 'h1'>Bom dia {props.nome}!</h1>,// quando faz com array, tem que referenciar com key
<h2 key = 'h2'>Tudo bem ai com voce?</h2>
]

// //FAZENDO COM REACT.FRAGMENT
// export default props => 
//     <React.Fragment>
//     <h1>Bom dia {props.nome}!</h1>,
//     <h2>Tudo bem ai com voce?</h2>
//     </React.Fragment>

    
// //FAZENDO COM DIV
//     export default props => 
//     <div>
//     <h1 >Bom dia {props.nome}!</h1>,
//     <h2 >Tudo bem ai com voce?</h2>
//     </div>