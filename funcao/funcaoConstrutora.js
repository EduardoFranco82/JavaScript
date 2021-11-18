// nada mais e que uma classe que vc instancia depois. semelhante

function Carro( velocidadeMaxima = 200, delta = 5){

    // atributo privado com let, const ou var
    let velocidadeAtual = 0;

    // metodo publico ou seja, visivel fora da funçao. tem que colocar this
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        } else{
            velocidadeAtual = velocidadeMaxima
        }

        // metodo publico ou seja, visivel fora da funçao

        this.getVelocidadeAtual = function (){
            return velocidadeAtual;
        }


    }

}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(300, 40);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());