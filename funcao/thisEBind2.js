function Pessoa() {

    this.idade = 0;
    const self = this;// criado no final para burlar o this

    setInterval(function () {
        self.idade++
        console.log(self.idade); // desta forma, nao fui eu quem chamou a funçao de set interval, portanto o this nao e visivel


    }/*.bind(this)*/, 1000)// se colocar .bind, ai ele enxerga o this

}

new Pessoa