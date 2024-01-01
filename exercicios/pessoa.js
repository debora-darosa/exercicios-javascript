class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / Math.pow(this.altura, 2);
    }
}

let jose = new Pessoa('José', 80, 1.70)
console.log(jose.calcularImc())