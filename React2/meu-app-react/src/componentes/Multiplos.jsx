import React from 'react';

export const BoaTarde = props => <h1>Boa tarde, meu nome é {props.nome}!</h1>
export const BoaNoite = props => <h1>Boa noite, meu nome é {props.nome}!</h1>
// se fizer export default BoaNoite ele reclama, nao aceita



// // pode exportar assim, muda a forma de chamar
// export default BoaTarde
// // pode exportar assim, muda a forma de chamar
// export default {BoaTarde, BoaNoite}