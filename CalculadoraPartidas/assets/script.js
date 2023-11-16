function getVictories(){
    let victories = document.getElementById("victories").value;
    let mensagemVictories = document.getElementById("victoriesMensagem");

    if (mensagemVictories){
        mensagemVictories.textContent = `O número de vitórias é ${victories}`
    } else {
        console.error("Elemento não encontrado. Verifique os IDs dos elementos HTML.");

    }
}

function checkNivel(){
    // Obtenha os valores das vitórias e derrotas dos elementos de entrada HTML
    let victories = document.getElementById("victories").value;
    let defeats = document.getElementById("defeats").value;

    if (isNaN(victories) || isNaN(defeats) || victories === "" || defeats === "") {
        alert("Por favor, insira valores numéricos para vitórias e derrotas.");
        return;
    }

    const saldoVitorias = victories - defeats;

    let nivel;
    if (victories < 10) {
        nivel = "Ferro";
    } else if (victories <= 20) {
        nivel = "Bronze";
    } else if (victories <= 50) {
        nivel = "Prata";
    } else if (victories <= 80) {
        nivel = "Ouro";
    } else if (victories <= 90) {
        nivel = "Diamante";
    } else if (victories <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    let mensagemElement = document.getElementById("mensagem");
    if (mensagemElement) {
        mensagemElement.textContent = `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
    } else {
        console.error("Elemento 'mensagem' não encontrado. Verifique o ID do elemento HTML.");
    }
}