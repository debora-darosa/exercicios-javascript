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

    classificarImc(){
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obsedidade Grave';
        }
    }
}

let jose = new Pessoa('José', 80, 1.70)
console.log(jose.calcularImc())
let debora = new Pessoa('Débora', 58.8, 1.62)
console.log(debora.calcularImc())
console.log(debora.classificarImc())