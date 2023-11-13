function getNameHero() {
    let nameHero = document.getElementById("nameHero").value;
    let nameHeroElement = document.getElementById("nameHeroExpose");

    // Verificando se o elemento foi encontrado antes de tentar acessar seu conteúdo
    if (nameHeroElement) {
        nameHeroElement.textContent = `O nome do Herói é ${nameHero}.`;
    } else {
        console.error("Elemento não encontrado. Verifique os IDs dos elementos HTML.");
    }
}

function getXpHero(){
    let nameHero = document.getElementById("nameHero").value;
    let xpHero = document.getElementById("xpHero").value;

    if (isNaN(xpHero) || xpHero === "") {
        alert("Por favor, insira um valor numérico para a XP do herói.");
        return;
    }

    xpHero = parseInt(xpHero);

    let heroLevel;

    if (xpHero < 1000) {
        heroLevel = "Ferro";
    } else if (xpHero >= 1001 && xpHero <= 2000) {
        heroLevel = "Bronze";
    } else if (xpHero >= 2001 && xpHero <= 5000) {
        heroLevel = "Prata";
    } else if (xpHero >= 6001 && xpHero <= 7000) {
        heroLevel = "Ouro";
    } else if (xpHero >= 7001 && xpHero <= 8000) {
        heroLevel = "Platina";
    } else if (xpHero >= 8001 && xpHero <= 9000) {
        heroLevel = "Ascendente";
    } else if (xpHero >= 9001 && xpHero <= 10000) {
        heroLevel = "Imortal";
    } else {
        heroLevel = "Radiante";
    }

    let xpHeroExpose = document.getElementById("xpHeroExpose");
    if (xpHeroExpose) {
        xpHeroExpose.textContent = `O herói ${nameHero} está no level ${heroLevel}`
    } else {
        console.error("Elemento não encontrado. Verifique os IDs dos elementos HTML.");
    }
}