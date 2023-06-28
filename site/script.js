window.addEventListener('DOMContentLoaded', function () {
  var texto = document.querySelector('.texto');
  texto.style.opacity = '1';
});

var grow = document.getElementsByClassName("menusTopo")

function cresce(elemento) {
  var tamanhoAtual = window.getComputedStyle(elemento).getPropertyValue("font-size");
  var tamanhoNovo = parseFloat(tamanhoAtual) + 3;
  elemento.style.fontSize = tamanhoNovo + "px";
}

function diminui(elemento) {
  var tamanhoAtual = window.getComputedStyle(elemento).getPropertyValue("font-size");
  var tamanhoNovo = parseFloat(tamanhoAtual) - 3;
  elemento.style.fontSize = tamanhoNovo + "px";
}