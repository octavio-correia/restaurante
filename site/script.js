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

  setInterval(frente, 7000);



  var iTexto = 0;
  var txtLength = document.querySelectorAll(".paragrafo");
  var txt = document.querySelectorAll(".paragrafo");

  function frenteTxt() {
    iTexto++;
    if (iTexto > (txtLength.length*2) - 1) {
      iTexto = 0;
    }

    txt.forEach(function (element) {
      element.style.transform = `translateX(${-iTexto * 200}px)`;
    })
  }
    setInterval(frenteTxt, 7000);

 
})