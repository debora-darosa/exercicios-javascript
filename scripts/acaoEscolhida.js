// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = gets();

// Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
const acaoEscolhida = gets();

// TODO: Implemente uma solução utilizando lógica de programação;
function realizarAcao(nomePersonagem, acaoEscolhida) {
    if (acaoEscolhida === "Fugir" || acaoEscolhida === "Atacar") {
      return nomePersonagem + " escolheu " + acaoEscolhida + "!";;
    } else {
      return "Tente novamente";
    }
}
  
//TODO: Verifique a ação escolhida e exibir a mensagem correspondente:
var resultado = realizarAcao(nomePersonagem, acaoEscolhida);
print(resultado);