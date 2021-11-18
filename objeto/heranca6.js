function Aula(nome, videoId){
    this.nome = nome;
    this.videoId = videoId;
}

const aula1 = new Aula('Bem vindo',123 )
const aula2 = new Aula('Até breve',456 )

console.log(aula1, aula2);

// simulandoo o new

function novo(f, ...params){

    const obj = {}// ja que nao estou usando o new, usar o literal
    obj.__proto__ = f.prototype;// fazer o prototipo do obj criado aponte para funçao. protot. 'aula.prototipe'
    f.apply(obj, params)//executar a funçao com apply passando o obj criado e os paramentros
    return obj;

}
const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Ate breve', 456)

console.log(aula3, aula4);
