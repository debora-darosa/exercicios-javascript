class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque genérico";
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
        return `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
    }
}

function getNameHero() {
    const nome = document.getElementById("nameHero").value;
    const idade = document.getElementById("ageHero").value;
    const tipo = document.getElementById("classe").value;

    const heroi = new Heroi(nome, idade, tipo);
    const mensagemAtaque = heroi.atacar();

    // Exibir a mensagem na descrição do personagem
    const describePersonagem = document.querySelector(".describe__personagem");
    describePersonagem.textContent = mensagemAtaque;
}

// Adicione este bloco para capturar o envio do formulário
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    getNameHero();
});
