const inputpeso = document.getElementById("peso");
const inputaltura = document.getElementById("altura");
const btnCalcular = document.getElementById("btnCalcular");


const resultado = document.getElementById("resultado");
const valorIMC = document.getElementById("valorIMC");
const classificacao = document.getElementById("classificacao");


btnCalcular.addEventListener("click", function() {
    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);


    if (peso <= 0 || altura <= 0) {
        valorIMC.textContent = "Digite valores válidos.";
        classificacao.textContent = "";
        resultado.className = "vazio";
        return;
    }


    const imc = peso / (altura * altura);
    valorIMC.textContent = "Seu IMC é: " + imc.toFixed(1);


    if (imc < 18.5) {
        classificacao.textContent = "Abaixo do peso";
        resultado.className = "abaixo";
    } else if (imc < 25) {
        classificacao.textContent = "Peso normal";
        resultado.className = "normal";
    } else if (imc < 30) {
        classificacao.textContent = "Acima do peso";
        resultado.className = "sobrepeso";
    } else {
        classificacao.textContent = "Obesidade";
        resultado.className = "obesidade";
    }
});