function Pessoa() {
    this.idade = 0

    setInterval(() => { // neste constexto, com arrow, o this ja e enxergado
        this.idade++
        console.log(this.idade)
    }, 1000)


}

new Pessoa