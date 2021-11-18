// CADEIA DE PROTOTIPOS (PROTOTYPE CHAIN)

Object.prototype.attr0 = '0'// nao faça isso
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);// attr3 pegou o proprio filho

const carro = {
    velAtual: 0,
    velMaxima: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMaxima) {
            this.velAtual += delta
        } else {
            this.velMaxima = this.velMaxima
        }

    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`
    }

}
const ferrari = {
    modelo: 'F40',
    velMaxima: 324 // shadowing sobrepoe carro


}

const volvo = {

    modelo: 'V89',
    status(){
        return `${this.modelo}: ${super.status()}`// super chama propriedades dos pais
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

// chamando atributos separados

volvo.acelerarMais(100)
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari);