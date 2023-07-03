window.addEventListener('DOMContentLoaded', function () {
  var texto = document.querySelector('.texto');
  texto.style.opacity = '1';

  var idx = 0;
  var imgs = document.getElementById("containerCarrossel");
  var img = document.querySelectorAll("#containerCarrossel img");

  function frente() {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
  }

  setInterval(frente, 5000);
});