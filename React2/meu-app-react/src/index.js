import React from 'react';
import ReactDOM from 'react-dom'
import Eduardo from './componentes/Primeiro'// nao importa o nome aqui do import, o que vale e o caminho
import BomDia from './componentes/BomDia'
import {BoaTarde, BoaNoite} from './componentes/Multiplos'// usando o destructing
//import Multi,{BoaNoite} from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'

//PRIMEIRA MANEIRA DE SE FAZER
// const elemento = <h1>React 2</h1> 
// ReactDOM.render(elemento , document.getElementById('root'))


// SEGUNDA MANEIRA IMPORTANDO UM COMPONENTE
// ReactDOM.render(<Eduardo/> , document.getElementById('root'))

//TERCEIRA MANEIRA PASSANDO PARAMETRO
// ReactDOM.render(<BomDia nome = 'Edu Franco'/>, document.getElementById('root'))

//QUARTA FORMA, MULTIPLOS COMPONENTES

// ReactDOM.render(
// <div>
// <BoaTarde nome = 'Ana'/>
// {/*<Multi.BoaTarde nome = 'Ana'/>*/}
// <BoaNoite nome = 'Alice'/>
// </div>
// , document.getElementById('root'))

// QUINTA FORMA, COMPONENTES DE CLASSE

// ReactDOM.render(
// <div>
// <Saudacao tipo = 'Bom dia' nome ='joao'/>
// </div>, document.getElementById('root'))

// SEXTO EXEMPLO COMPONENTES TIPO PAI E FILHO

ReactDOM.render(

<div>
<Pai nome = 'Paulo' sobrenome = 'silva'/>

</div>, document.getElementById('root')

)