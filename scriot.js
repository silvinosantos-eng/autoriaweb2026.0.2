console.log("Javascript funcionando!");

const button = document.getElementById("titulo");
const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("botao");
const remover = document.getElementById("remover");
const alterar = document.getElementById("alterar");

botao.addEventListener("click", function() {
    mensagem.classList.add("destaque");
});

remover.addEventListener("click", function() {
    mensagem.classList.remove("destaque");
});