function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
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

// Main
(function () {
    let peso = 58.7;
    let altura = 1.62;

    const imc = calcularImc(peso, altura);
    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificarImc(imc)}`);
})();