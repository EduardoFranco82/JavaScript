import React, { Component } from 'react';

export default class Saudacao extends Component {

    state = {
        //tipo: 'Fala',
        tipo : this.props.tipo,
       // nome: 'Pedro',
        nome: this.props.nome
    }

    constructor (props){
        super(props)
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        // console.log(e.target.value);// se clicar no console, ele da as letras
        // this.props.tipo = e.target.value// valores sao somente para leitura de this.props, nao consegue alterar. POR ISSO PRECISA DO STATE FEITO ACIMA
        this.setState({ tipo: e.target.value })// assim consigo mudar o estado do componente
    }//EM REACT, DEPOIS QUE O ESTADO MUDA, MUDA O COMPONENTE
    // por exemplo: se eu colocar tipo:'blabla', quando eu clicar no campo, o nome vai automaticamente pra blabla

    setNome (e){
        this.setState({ nome: e.target.value})
    }


    render() {
        //const {tipo, nome} = this.props; MUDANDO PARA STATE
        const { tipo, nome } = this.state;
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} /> 
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }

}
// 2 MANEIRAS DE FAZER COM INPUT, UMA COM ARROW, COM STATE FORA DO CONSTRUCTOR E OUTROS COM THIS.BIND DENTRO DO CONSTRUCTOR