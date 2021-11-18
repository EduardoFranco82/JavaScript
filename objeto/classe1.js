// modo alternativo de trabalhar com funçoes construtoras
//pode usar em react. componente baseado em classe.
class Lancamento{
    constructor(nome = 'generico', valor = 0){
        this.nome = nome;
        this.valor = valor;
    }

}

class CicloFinanceiro{
    constructor(mes, ano){

        this.mes = mes;
        this.ano = ano;
        this.lancamentos=[]
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))// pegou todos os arrays e fez um forEach 
    }
    sumario(){
        let valorConsolidado = 0;
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado;

    }
}
const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario());